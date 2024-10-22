import mysql.connector
import configparser

config = configparser.ConfigParser()
config.read('my_config.ini')

mydb = mysql.connector.connect(**config['user'])

mycursor = mydb.cursor()

mycursor.execute("CREATE DATABASE main_db")
mycursor.execute("SHOW DATABASES")

for x in mycursor:
    print(x)
  
print(mydb)