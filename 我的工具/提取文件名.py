#! /usr/bin/python
# -*- coding: utf-8 -*-

############################################################################

import os
import tkinter as tk
from tkinter import messagebox
from tkinter import filedialog
############################################################################



filenames_info = ""


############################################################################


def selectProductDir():
    root_path = filedialog.askdirectory() + '/'
    SetEntryText(dir_entry, root_path)


def SetEntryText(entry, text):
    entry.delete(0, 'end')
    entry.insert(0, text)


# 拼接路径
def joinDir(root, *dirs):
    for item in dirs:
        root = os.path.join(root, item)
    return root


# 提取处理
def getFileName():
    ''' 获取指定目录下的所有指定后缀的文件名 '''
    prename = prefix_entry.get()
    extname = ext_entry.get()
    if extname.find('.') == -1 :
        messagebox.showinfo("提示：", "请输入合法扩展名")
        return

    path = dir_entry.get()
    if not os.path.exists(path):
        messagebox.showinfo("提示：", "输入路径不存在")
        return
    
    global filenames_info
    
    for i in os.listdir(path):
        # os.path.splitext():分离文件名 与 扩展名
        if os.path.splitext(i)[1] == ext_entry.get():
            listbox.insert(tk.END, prename + i)
            filenames_info += prename + i + "\n"
            print( i)
    messagebox.showinfo('提示', '提取完毕！')
    writeTofile()


# 写入到文件
def writeTofile():
    filepath = joinDir(dir_entry.get(), 'auto_create_file.txt')
    filepath.replace('\\', '/')
    print(filepath)
    fp = open(filepath, "w", encoding='utf-8')
    fp.write(filenames_info)
    fp.close()
    messagebox.showinfo("提示：", "信息保存在: " + filepath)


def clearList():
    global filenames_info
    filenames_info = ""
    listbox.delete(0, tk.END)

############################################################################




############################################################################
#########   图形界面 创建
############################################################################
# 定义窗口
window = tk.Tk()
window.title("提取文件名")
window.geometry("400x400")
window.minsize(600, 600)
window.maxsize(600, 600)
############################################################################


############################################################################
#########文件处理面板##########
main_frame = tk.Frame(window)
main_frame.pack(side=tk.TOP)


# 文件目录标签
tk.Label(main_frame, text="文件夹路径：", font=('Arial', 10), width=10, height=1).pack(side=tk.LEFT)


# 文件目录输入框
dir_entry = tk.Entry(main_frame, textvariable=tk.StringVar(), font=('Arial', 10), width=66, bg='white')
dir_entry.pack(side=tk.LEFT)
tk.Button(main_frame, text='...', font=('Arial', 10), borderwidth=1, width=6, height=1, command=selectProductDir).pack(side=tk.RIGHT)
############################################################################


############################################################################
#########文件扩展名面板##########
ext_frame = tk.Frame(window)
ext_frame.pack(side=tk.TOP)

# 文件后缀名标签
tk.Label(ext_frame, text='文件扩展名：', font=('Arial', 10), width=10, height=1).pack(side=tk.LEFT)

# 文件后缀名输入框
ext_entry = tk.Entry(ext_frame, textvariable=tk.StringVar(), font=('Arial', 10), width=100, bg='white')
ext_entry.pack(side=tk.RIGHT)
############################################################################


############################################################################
#########文件前缀名面板##########
prefix_frame = tk.Frame(window)
prefix_frame.pack(side=tk.TOP)

# 文件前缀 标签
tk.Label(prefix_frame, text='文件前缀名：', font=('Arial', 10), width=10, height=1).pack(side=tk.LEFT)

# 文件前缀 输入框
prefix_entry = tk.Entry(prefix_frame, textvariable=tk.StringVar(), font=('Arial', 10), width=100, bg='white')
prefix_entry.pack(side=tk.RIGHT)
############################################################################


# 提取按钮
pane_btn = tk.Frame(window)
pane_btn.pack(side=tk.TOP)
btn_get = tk.Button(pane_btn, text='提取', font=('Arial', 10), width=24, height=1, command=getFileName).pack(side=tk.LEFT)

# 清理按钮
btn_clear = tk.Button(pane_btn, text='清理', font=('Arial', 10), width=24, height=1, command=clearList).pack(side=tk.RIGHT)
############################################################################



###############################显示文件列表 ##################################
# def print_item(event):
#     print listbox.get(listbox.curselection())

listbox = tk.Listbox(window, selectmode=tk.EXTENDED, borderwidth=4, width=200, height=80, listvariable=tk.StringVar())
listbox.pack()

# 添加点击事件
# listbox.bind('<ButtonRelease-1>', print_item)
############################################################################


############################################################################
# 消息循环
window.mainloop()
############################################################################