Win11子系统 Ubuntu 安装 mysql

1.删掉之前安装的mysql, 没有安装过可以忽略.
    sudo apt remove --purge *mysql*
    sudo rm -rf /ect/mysql /var /lib/mysql
    sudo apt remove --purge *mariadb*
2.更新软件列表和软件
    sudo apt update		#更新软件列表
    sudo apt upgrade	#更新软件	
3.安装mysql-server
    sudo apt install mysql-server
    安装完后默认开启mysql服务,如果没有开启,可以在终端输入下面的命令开启.
    sudo service mysql start.
    开启服务可能会报错:
    *starting MySQL database server mysqld:No directory, logging in with HOME=/
    这是mysql日志输出目录没有权限导致的,解决方法是:
    sudo service mysql stop #停止mysql服务
    sudo usermod -d /var/lib/mysql/mysql #启用日志输出目录权限
    sudo service mysql start #重启mysql服务
4.登录mysql数据库
    mysql -u root -p	#登录mysql命令
    Enter password: 	#单击回车键
    ERROR 1698(28000): Access denied for user 'root'@'localhost'
    表面mysql禁止用户'root'@'localhost'登入,解决办法是:
    1.编辑mysql配置文件: sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf
    在配置文件[mysqld]字段最后加入: skip-grant-tables #不使用密码登录mysql
    再重新启动mysql: sudo service mysql restart
    然后登录: mysql -u root -p
    2.也可使用命令: mysqladmin -u root password [新的密码]
    给root用户直接启用新的密码.
5.切换数据库
    use [数据库名];
    例:use mysql;
    修改user表属性: update user set plugin='mysql_native_password' where user='root';
6.查询表
    字段查询: 	select [字段1名], [字段2名], [字段3名], ... from [表名];
    全表查询: 	select * from [表名];   
7.退出mysql数据库
    使用quit命令或者按ctrl+z组合键退出.