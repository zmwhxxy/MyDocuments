#! /usr/bin/python
# -*- coding: utf-8 -*-

############################################################################

import os
from PIL import Image
import json
import tkinter as tk
from tkinter import messagebox
from  tkinter import filedialog
############################################################################
# 工程目录相关的

base_path = ""
temp_path = ""

#产品信息
root_path = "D:/Github.com/workspace/yuebang_webpage/images/products"
file_path = "D:/Github.com/workspace/yuebang_webpage/src"
file_name = "data.js"

products = ""
############################################################################


############################################################################
def checkFileExt(path):
    binExt = [".jpg", ".jpeg", ".png", ".pvr", ".ccz", ".bmp", ".tmx", ".svg"]
    ext = os.path.splitext(path)[1]
    ext = ext.lower()
    return ext in binExt

# 拼接路径
def joinDir(root, *dirs):
    for item in dirs:
        root = os.path.join(root, item)
    return root

# 遍历目录
def listDir(d):
    global base_path
    global temp_path
    global products
    for item in os.listdir(d):
        nDir = joinDir(d, item)
        if os.path.isfile(nDir):
            if checkFileExt(nDir):
                if isTitleDir.get():
                    tempname = "\"" + base_path + item + "\","
                else:
                    if not checkFileExt(nDir):  #没有后缀名的文件当作商品名称<删除首个字符排序用的>
                        tempname = "\""  + item[1:] + "\","
                    else:
                        tempname = "\"" + base_path + item + "\","
                products += "\t\t" + tempname + "\n"
                listbox.insert(tk.END, tempname)
                print(tempname)
        else:
            temp_path = base_path
            base_path += os.path.basename(nDir) + "/"
            products += "\n\t[\n"
            if isTitleDir.get(): # 文件夹加名作为商品名
                tempname = "\"" + os.path.basename(nDir) + "\","
                listbox.insert(tk.END, tempname)
                print(tempname)
                products += "\t\t" + tempname + "\n"
            listDir(nDir)
            base_path = temp_path
            products += "\t],"





# 写入到文件
def writeTofile():
    filepath = joinDir(file_entry.get(), file_name)
    print(filepath)
    fp = open(filepath, "w", encoding='utf-8')
    fp.write(products)
    fp.close()
    messagebox.showinfo("提示：", "文件写入完成！")

# 提取处理
def getProductsInfo():
    listbox.insert(tk.END, "------------------------------------------------------------------------ 提取 [产品信息] ------------------------------------------------------------------------")
    root_path = product_entry.get()
    if not os.path.exists(root_path):
        messagebox.showinfo("提示：", "输入路径不存在")
        return

    #求解相对路径
    global base_path
    base_path = os.path.basename(root_path) + '/'

    global products
    products = "// 产品信息表 => 结构:[名称,主图,详情图1,详情图2,详情图3,...] \n\nvar productArr = [\t"

    # 遍历文件夹
    listDir(root_path)

    products += "\n]"
    messagebox.showinfo('提示', '提取完毕！')


def clearList():
    listbox.delete(0, tk.END)
    global products
    products = ""

def SetEntryText(entry, text):
    entry.delete(0, 'end')
    entry.insert(0, text)

def selectProductDir():
    root_path = filedialog.askdirectory()
    SetEntryText(product_entry, root_path)

def selectFileWriteDir():
    file_path = filedialog.askdirectory()
    SetEntryText(file_entry, file_path)

def selectPictureDir():
    SetEntryText(picture_entry, filedialog.askdirectory())


#批量修改图片大小(固定宽高)
def changeImageSize(path):
        image = Image.open(path)
        resized_image = image.resize((int(s_width.get()), int(s_height.get())))
        resized_image.save(path)

# 等比缩放
def changeImageWithSameRatio(path):
    image = Image.open(path)
    maxWidth = int(s_width.get())
    maxHeight = int(s_height.get())
    Ratio = 1;
    w = image.width;
    h = image.height;
    wRatio = maxWidth / w;
    hRatio = maxHeight / h;
    if maxWidth == 0 and maxHeight == 0:
        Ratio = 1;
    elif maxWidth == 0:
        if hRatio < 1: Ratio = hRatio;
    elif maxHeight == 0:
        if wRatio < 1: Ratio = wRatio;
    elif wRatio < 1 or hRatio < 1:
        Ratio = wRatio if wRatio <= hRatio else hRatio
    w = int(w * Ratio)
    h = int(h * Ratio)
    resized_image = image.resize((w, h))
    resized_image.save(path)


def changeImagesByListDir(d):
    for item in os.listdir(d):
        nDir = joinDir(d, item)
        if os.path.isfile(nDir):
            if checkFileExt(nDir):
                if isSameScale.get():
                    changeImageWithSameRatio(nDir)
                else:
                    changeImageSize(nDir)
        else:
            changeImagesByListDir(nDir)


def changePictureSize():
    changeImagesByListDir(picture_entry.get())
    messagebox.showinfo('提示', '处理完毕！')


def onSameScaleChecked():
    if isSameScale.get():
        listbox.insert(tk.END, "------------------------------------------------------------------------ 选择 [图片等比缩放] ------------------------------------------------------------------------ ")
    else:
        listbox.insert(tk.END, "------------------------------------------------------------------------ 取消 [图片等比缩放] ------------------------------------------------------------------------ ")



def onTitleDirChecked():
            if isTitleDir.get():
                listbox.insert(tk.END, "------------------------------------------------------------------------ 选择 [目录名导出为产品名] ------------------------------------------------------------------------ ")
            else:
                listbox.insert(tk.END, "------------------------------------------------------------------------ 取消 [目录名导出为产品名] ------------------------------------------------------------------------ ")
############################################################################

# 定义窗口
window = tk.Tk()

# 设置行和列的权重
window.rowconfigure(0, weight=1)
window.columnconfigure(0, weight=1)

window.title("商品信息生成器")
window.geometry("800x1000")
window.minsize(800, 1000)
window.maxsize(800, 1000)
############################################################################

############################################################################
#########文件处理面板##########
# 产品根目录
fm1 = tk.Frame(window, relief=tk.FLAT)
fm1.pack(side=tk.TOP)
tk.Label(fm1, text="产品目录：", font=('Arial', 10), width=10, height=2).pack(side=tk.LEFT)

# 设置文本框中的值
value1 = tk.Variable()
value1.set(root_path)

# 目录输入框
product_entry = tk.Entry(fm1, textvariable=value1, font=('Arial', 10), width=80, bg='white')
product_entry.pack(side=tk.LEFT)
tk.Button(fm1, text='...', font=('Arial', 10), borderwidth=1, width=4, height=1, command=selectProductDir).pack(side=tk.LEFT)
tk.Button(fm1, text='提取信息', font=('Arial', 10), borderwidth=1, width=10, height=1, command=getProductsInfo).pack(side=tk.RIGHT)
##############################################################################


##############################################################################
# 文件生成目录
fm2 = tk.Frame(window, relief=tk.FLAT)
fm2.pack(side=tk.TOP)
tk.Label(fm2, text="写入目录：", font=('Arial', 10), width=10, height=2).pack(side=tk.LEFT)

# 文件目录输入框
value2 = tk.Variable()
value2.set(file_path)  # 设置文本框中的值
file_entry = tk.Entry(fm2, textvariable=value2, font=('Arial', 10), width=80, bg='white')
file_entry.pack(side=tk.LEFT)
tk.Button(fm2, text='...', font=('Arial', 10), borderwidth=1, width=4, height=1, command=selectFileWriteDir).pack(side=tk.LEFT)
tk.Button(fm2, text='写入文件', font=('Arial', 10), borderwidth=1, width=10, height=1, command=writeTofile).pack(side=tk.RIGHT)
############################################################################



############################################################################
# 图片路径 控制
fm3 = tk.Frame(window, relief=tk.FLAT)
fm3.pack(side=tk.TOP)
tk.Label(fm3, text="图片目录：", font=('Arial', 10), width=10, height=2).pack(side=tk.LEFT)
value3 = tk.Variable()
value3.set(root_path)  # 设置文本框中的值
picture_entry = tk.Entry(fm3, textvariable=value3, font=('Arial', 10), width=80, bg='white')
picture_entry.pack(side=tk.LEFT)
tk.Button(fm3, text='...', font=('Arial', 10), borderwidth=1, width=4, height=1, command=selectPictureDir).pack(side=tk.LEFT)
tk.Button(fm3, text='修改大小', font=('Arial', 10), borderwidth=1, width=10, height=1, command=changePictureSize).pack(side=tk.RIGHT)



#############################################################################
chf = tk.Frame(window)
chf.pack()


isSameScale = tk.IntVar()
isTitleDir = tk.IntVar()
tk.Checkbutton(chf, text = "图片等比放缩", variable = isSameScale, command=onSameScaleChecked, onvalue = 2, offvalue = 0, height=1, width = 20).pack(side=tk.LEFT)
tk.Checkbutton(chf, text = "目录名导出为产品名", variable = isTitleDir, command=onTitleDirChecked, onvalue = 2, offvalue = 0, height=1, width = 20).pack(side=tk.LEFT)

# 图片宽 控制
fm4 = tk.Frame(window, relief=tk.FLAT)
fm4.pack(side=tk.TOP)

s_width=tk.Scale(fm4, from_=0, to=10000, orient="horizonta", label="宽度(像素)", tickinterval=1000,  length=10000)
s_width.pack(side=tk.TOP);



# 图片高 控制
fm5 = tk.Frame(window, relief=tk.FLAT)
fm5.pack(side=tk.TOP)
s_height = tk.Scale(fm5, from_=0, to=10000, orient="horizonta", label="高度(像素)", tickinterval=1000,  length=10000)
s_height.pack(side=tk.BOTTOM);

############################################################################


############################################################################

fm5 = tk.Frame(window, relief=tk.FLAT)
fm5.pack(side=tk.TOP)

# 清空信息按钮
tk.Button(fm5, text='清空信息', font=('Arial', 10), padx=10, borderwidth=4, width=8, height=1, command=clearList).pack(side=tk.RIGHT)

###############################显示文件列表 ##################################
# def print_item(event):
#     print listbox.get(listbox.curselection())

fml = tk.Frame(window, relief=tk.FLAT)
fml.pack(side=tk.BOTTOM)
listbox = tk.Listbox(fml, selectmode=tk.EXTENDED, borderwidth=4, width=110, height=180, listvariable=tk.StringVar())
listbox.pack()

# 添加点击事件
# listbox.bind('<ButtonRelease-1>', print_item)
############################################################################


############################################################################
# 消息循环
window.mainloop()
############################################################################