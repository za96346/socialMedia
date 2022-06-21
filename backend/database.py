from mysql import connector

class init:
    def __init__(self):
        self.connection = connector.connect(
            auth_plugin='mysql_native_password',
            host='127.0.0.1',
            port=3306,
            user='root',
            password='siou0722'
        )
        self.cursor=self.connection.cursor()
class create(init):
    def __init__(self):
        super().__init__()
    def database(self):
        try:
            self.cursor.execute('drop database `doggybook`;')
        except:
            pass
        self.cursor.execute('create database `doggybook`;')
    def table_user(self):
        self.cursor.execute('''use `doggybook`;''')
        self.cursor.execute('''create table `user`(
                                    `id` varchar(50),
                                    `name` varchar(50),
                                    `account` varchar(50),
                                    `password` varchar(50),
                                    `sexual` varchar(10)
        );''')

class select(create):
    def __init__(self):
        super.__init__(self)

        instance_create=create()
        instance_create.database()
        instance_create.table_user()
        self.cursor.execute('''use `doggybook`;''')
    def table_user(self):
        self.cursor.execute('select * from `user`;')
        data=self.cursor.fetchall()
        return data
    
instance_select=select()
res=instance_select.table_user()
print(res)
