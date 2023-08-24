#!/usr/bin/env python
# -*- coding: UTF-8 -*-

import os
import sys
import shutil
import re
import platform
import subprocess
import zipfile
import tkinter
from tkinter import messagebox
import xxtea
import json
import hashlib

########################################################################################################################



########################################################################################################################
# 全局变量
scriptRoot = os.path.split(os.path.realpath(__file__))[0]
engineRoot = os.environ.get('QUICK_V3_ROOT')
jitPath = ""
new_env = os.environ.copy()
luaFiles = []
ignoreDir = ["Default"]
info = {}

########################################################################################################################



########################################################################################################################
def joinDir(root, *dirs):
    for item in dirs:
        root = os.path.join(root, item)
    return root

def initJitPath(mode):
    global jitPath
    global new_env
    sysstr = platform.system()
    if(sysstr =="Windows"):
        if "64" == mode:
            messagebox.showinfo("提示：", "Windows系统不支持64位编译模式！")
            sys.exit(-1)
        jitPath = joinDir(scriptRoot, "win32", "luajit.exe")
    elif(sysstr == "Linux"):
        messagebox.showinfo("提示：", "即将支持Linux系统！")
        sys.exit(-1)
    elif(sysstr == "Darwin"):
        jitPath = joinDir(scriptRoot, "mac", "luajit")
        if "64" == mode:
            jitPath = jitPath + "64"
    else:
        messagebox.showinfo("提示：", "不支持的系统！")
        sys.exit(-1)

    # important, to find luajit lua
    new_env['LUA_PATH'] = joinDir(scriptRoot, "?.lua")

def doFile(path, luaRoot, zFile):
    tmp = path + ".tmp"
    jitcmd = '%s -bg "%s" "%s"' %(jitPath, path, tmp)
    # do shell cmd
    cmd = subprocess.Popen(jitcmd, shell = True, stdout = subprocess.PIPE, env = new_env)
    cmd.wait()
    if os.path.exists(tmp) == False:
        print("Error: Fail to compile:%s" %(path))
        messagebox.showinfo("提示：", "编译" % (path) % "文件失败！")
        sys.exit(-1)

    # remove perfix and suffix, replace / with .
    modulePath = path[len(luaRoot) + 1:-4]
    if os.sep == '\\':
        moduleName = re.sub('\\\\', '.', modulePath)
    else:
        moduleName = re.sub('/', '.', modulePath)
    print("== compiling: %s" %(moduleName))
    # fix the file modify time
    os.utime(tmp, (1330712280, 1330712280))
    # add to zip file
    zFile.write(tmp, moduleName)
    # remove temp file
    os.unlink(tmp)

def listDir(d):
    global luaFiles
    for item in os.listdir(d):
        nDir = joinDir(d, item)
        if os.path.isfile(nDir):
            if not nDir.endswith(".lua"): # only do lua file
                continue
            luaFiles.append(nDir)
        else:
            listDir(nDir)

def packageScript(projectDir, outName, mode):
    global luaFiles
    luaRoot = joinDir(projectDir, "src")
    if not os.path.exists(luaRoot):
        messagebox.showinfo("提示：", luaRoot % "不存在！")
        sys.exit(-2)

    initJitPath(mode)
    listDir(luaRoot) # Can't delete file in listdir

    outfile = joinDir(projectDir, "res", outName + mode + ".zip")
    zFile = zipfile.ZipFile(outfile, 'w')
    for item in luaFiles:
        doFile(item, luaRoot, zFile)
    zFile.close()
    messagebox.showinfo("打包完成：", outfile)

########################################################################################################################



########################################################################################################################
###################### 按钮点击事件
#点击 打包按钮
def onPackScriptClicked():
    # 初始化所有参数
    projectDir = ProjDirEntry.get()
    name = PackageNameEntry.get()
    mode = ModeEntry.get()

    # 验证参数合法性
    if 0 == len(projectDir):
        messagebox.showinfo("提示：", "工程目录不能为空！")
        return
    if not os.path.exists(projectDir):
        messagebox.showinfo("提示：", "输入的工程目录不存在！")
        return

    # 编译脚本
    packageScript(projectDir, name, mode)


def onEncodeResClicked():
    # 初始化环境
    projectDir = ProjDirEntry.get()
    eSign = SignEntry.get()
    eKey = KeyEntry.get()

    # 验证信息合法性
    if 0 == len(projectDir):
        messagebox.showinfo("提示：", "工程目录不能为空！")
        return
    if not os.path.exists(projectDir):
        messagebox.showinfo("提示：", "输入的工程目录不存在！")
        return
    if 0 == len(eSign):
        messagebox.showinfo("提示：", "签名不能为空！")
        return
    if 0 == len(eKey):
        messagebox.showinfo("提示：", "密钥不能为空！")
        return

    # 开始加密文件
    encodeRes(projectDir, eSign, eKey)


def onCalculateMD5Clicked():
    # 初始化信息
    info["version"] = versionCodeEntry.get()
    info["packages"] = [PackageNameEntry.get()]  # first package name is fixed for cpp
    info["asserts"] = {}
    global scanRoot
    global outputFileName
    outputFileName = md5FileEntry.get()
    scanRoot = joinDir(ProjDirEntry.get(), "res")

    # 求解MD5
    getMD5(scanRoot)
    jsonStr = json.dumps(info)
    fp = open(joinDir(scanRoot, outputFileName), "wb")
    fp.write(jsonStr)
    fp.close()
    messagebox.showinfo("提示：", "MD5计算完成！")

########################################################################################################################



########################################################################################################################
#### 加密资源
def checkFileExt(path):
    binExt = [".zip", ".jpg", ".jpeg", ".png", ".pvr", ".ccz", ".bmp", ".tmx", ".plist"]
    ext = os.path.splitext(path)[1]
    ext = ext.lower()
    return ext in binExt

def copyFile(src, dest, encodeSign, encodeKey):
    buff = ""
    inFp = open(src, 'rb')
    for line in inFp.readlines():
        buff += line
    inFp.close()

    if checkFileExt(src):
        # xxtea encoder
        buff = encodeSign + xxtea.encrypt(buff, encodeKey)

    outFp = open(dest, 'wb')
    outFp.write(buff)
    outFp.close()

def copyDir(src, dest, encodeSign, encodeKey):
    for item in os.listdir(src):
        if "." == item[0]:  # ignore hidden files
            continue

        nSrc = joinDir(src, item)
        nDest = joinDir(dest, item)
        if os.path.isfile(nSrc):
            copyFile(nSrc, nDest, encodeSign, encodeKey)
        else:
            if not os.path.exists(nDest):
                os.mkdir(nDest)
            copyDir(nSrc, nDest, encodeSign, encodeKey)

def encodeRes(projectDir, encodeSign, encodeKey):
    resPath = joinDir(projectDir, "res")
    resBKPath = joinDir(projectDir, "res_bk")
    if os.path.exists(resBKPath):
        messagebox.showinfo("提示：", "已经是加密资源不需要重复加密！")
        return
    # 1. backup res, removd res
    shutil.copytree(resPath, resBKPath)
    shutil.rmtree(resPath)
    os.mkdir(resPath)
    # 2. work backup dir, encode bin file.
    copyDir(resBKPath, resPath, encodeSign, encodeKey)
    messagebox.showinfo("加密完成：", resPath)

########################################################################################################################



########################################################################################################################
# 计算MD5
def getMD5(root):
    files = os.listdir(root)
    for f in files:
        itemPath = joinDir(root, f)
        if os.path.isdir(itemPath):
            if (f[0] == '.' or (f in ignoreDir)):
                pass
            else:
                getMD5(itemPath)
        elif os.path.isfile(itemPath):
            if f[0] != '.' and f != outputFileName:
                fp = open(itemPath, 'rb')
                m5 = hashlib.md5()
                m5.update(fp.read())
                fp.close()
                name = itemPath[(len(scanRoot) + 1):]
                if os.sep == '\\':
                    name = re.sub('\\\\', '/', name)
                # key is path, value[0] = md5, value[2] = size
                info["asserts"][name] = [m5.hexdigest(), os.path.getsize(itemPath)]

########################################################################################################################




########################################################################################################################

# 创建主窗口
_root = tkinter.Tk()
_root.title("打包加密工具")
_root.minsize(480, 280)
_root.maxsize(480, 280)

# 工程目录
projGroup = tkinter.Frame(_root)
projGroup.pack(side=tkinter.TOP)
tkinter.Label(projGroup, text="工程目录：", bg="gray", font=("Arial", 15)).pack(side=tkinter.LEFT)
varProjDir = tkinter.Variable()
varProjDir.set("D:\Github.com\workspace\yuebang_webpage")  # 设置文本框中的值
ProjDirEntry = tkinter.Entry(projGroup, textvariable=varProjDir, width=40)
ProjDirEntry.pack(side=tkinter.RIGHT)


#压缩包名称
packageGroup = tkinter.Frame(_root)
packageGroup.pack(side=tkinter.TOP)
tkinter.Label(packageGroup, text="压缩包名：", bg="gray", font=("Arial", 15)).pack(side=tkinter.LEFT)
varPackageName = tkinter.Variable()
varPackageName.set("mainframe")  # 设置文本框中的值
PackageNameEntry = tkinter.Entry(packageGroup, textvariable=varPackageName, width=40)
PackageNameEntry.pack(side=tkinter.RIGHT)


# 编译模式 <32/64>
modeGroup = tkinter.Frame(_root)
modeGroup.pack(side=tkinter.TOP)
tkinter.Label(modeGroup, text="编译模式：", bg="gray", font=("Arial", 15)).pack(side=tkinter.LEFT)
varMode = tkinter.Variable()
varMode.set("64")  # 设置文本框中的值
ModeEntry = tkinter.Entry(modeGroup, textvariable=varMode, width=40)
ModeEntry.pack(side=tkinter.RIGHT)


# 签名信息
signGroup = tkinter.Frame(_root)
signGroup.pack(side=tkinter.TOP)
tkinter.Label(signGroup, text="签名信息：", bg="gray", font=("Arial", 15)).pack(side=tkinter.LEFT)
varSign = tkinter.Variable()
varSign.set("signeli(MZM)2018")  # 设置文本框中的值
SignEntry = tkinter.Entry(signGroup, textvariable=varSign, show='*', width=40)
SignEntry.pack(side=tkinter.RIGHT)


#密钥信息
keyGroup = tkinter.Frame(_root)
keyGroup.pack(side=tkinter.TOP)
tkinter.Label(keyGroup, text="密钥信息：", bg="gray", font=("Arial", 15)).pack(side=tkinter.LEFT)
varKey = tkinter.Variable()
varKey.set("wltsci@*&Xui")  # 设置文本框中的值
KeyEntry = tkinter.Entry(keyGroup, textvariable=varKey, show='*', width=40)
KeyEntry.pack(side=tkinter.RIGHT)


# MD5文件名：
md5Group = tkinter.Frame(_root)
md5Group.pack(side=tkinter.TOP)
tkinter.Label(md5Group, text="MD5文件名：", bg="gray", font=("Arial", 15)).pack(side=tkinter.LEFT)
varMD5File = tkinter.Variable()
varMD5File.set("new_version.json")  # 设置文本框中的值
md5FileEntry = tkinter.Entry(md5Group, textvariable=varMD5File, width=38)
md5FileEntry.pack(side=tkinter.RIGHT)


# 新包版本号：
versionGroup = tkinter.Frame(_root)
versionGroup.pack(side=tkinter.TOP)
tkinter.Label(versionGroup, text="新包版本号：", bg="gray", font=("Arial", 15)).pack(side=tkinter.LEFT)
varVersion = tkinter.Variable()
varVersion.set("1.0.0")  # 设置文本框中的值
versionCodeEntry = tkinter.Entry(versionGroup, textvariable=varVersion, width=38)
versionCodeEntry.pack(side=tkinter.RIGHT)


# 创建按钮分组
btnGroup = tkinter.Frame(_root)
btnGroup.pack(side=tkinter.BOTTOM)
tkinter.Button(btnGroup, text="打包工程", command=onPackScriptClicked).pack()
tkinter.Button(btnGroup, text="加密工程", command=onEncodeResClicked).pack()
tkinter.Button(btnGroup, text="计算MD5", command=onCalculateMD5Clicked).pack()


# 进入消息循环
tkinter.mainloop()

########################################################################################################################




