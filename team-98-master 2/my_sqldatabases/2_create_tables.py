import mysql.connector
import configparser

config = configparser.ConfigParser()
config.read('my_config.ini')

demo_db = mysql.connector.connect(**config['main_db'])
demo_db_cursor = demo_db.cursor(buffered=True)


demo_db_cursor.execute('''SHOW TABLES''')

demo_db_cursor.execute('''CREATE TABLE aww(aww_id int  PRIMARY KEY, password varchar(20) , name varchar(200))''')

demo_db_cursor.execute('''CREATE TABLE ben(ben_id int AUTO_INCREMENT PRIMARY KEY, 
                        aww_id int , pregnant_since DATE , 
                        FOREIGN KEY (aww_id) REFERENCES aww(aww_id))''')

demo_db_cursor.execute('''CREATE TABLE sess(session_id int AUTO_INCREMENT PRIMARY KEY, 
                        aww_id int , ben_id int, 
                        session_date DATE , session_start TIMESTAMP , session_end TIMESTAMP,
                        baby_age int , trimester int,
                        FOREIGN KEY (aww_id) REFERENCES aww(aww_id), 
                        FOREIGN KEY (ben_id) REFERENCES ben(ben_id))''')

demo_db_cursor.execute('''CREATE TABLE ques(question_id int AUTO_INCREMENT PRIMARY KEY , 
                        question_statment varchar(200))''')

demo_db_cursor.execute('''CREATE TABLE opts(option_id int AUTO_INCREMENT,
                        question_id int,
                        option_statement varchar(200),
                        PRIMARY KEY(option_id,question_id),
                        FOREIGN KEY (question_id) REFERENCES  ques(question_id))''')
demo_db_cursor.execute('''CREATE TABLE problems(problem_id int AUTO_INCREMENT PRIMARY KEY , 
                        problem_statment varchar(200))''')


demo_db_cursor.execute('''CREATE TABLE solution(solution_id int AUTO_INCREMENT,
                        problem_id int,
                        problem_statement varchar(200),
                        PRIMARY KEY(solution_id,problem_id),
                        FOREIGN KEY (solution_id) REFERENCES  problems(problem_id))''')

