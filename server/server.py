from flask import Flask, render_template, request, jsonify
import sqlite3
from sqlite3 import Error

app = Flask(__name__, static_folder="../static/dist", template_folder="../static")

sql_create_tasklist_table = """ CREATE TABLE IF NOT EXISTS tasklist (
                                    id integer PRIMARY KEY,
                                    name text NOT NULL
                                ); """

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/hello')
def hello():
    return "Hello Here!"


@app.route('/test_call' , methods=['GET'])
def test_call():
    return jsonify('test call returned from server!')

@app.route('/api/v1/tasklist/all' , methods=['GET'])
def get_tasklist():
    conn = sqlite3.connect('tasklist.db')
    cur = conn.cursor()
    tasklist = cur.execute('SELECT * FROM tasklist;').fetchall()
    return jsonify(tasklist)

@app.route('/api/v1/tasklist/add' , methods=['POST'])
def add_task():
     # if key doesn't exist, returns None
    task = request.args.get('task')
    conn = sqlite3.connect('tasklist.db')
    cur = conn.cursor()
    tasklist = cur.execute("INSERT OR IGNORE INTO tasklist(name) VALUES(?)", [task])
    conn.commit()
    tasklist = cur.execute('SELECT * FROM tasklist;').fetchall()
    return  jsonify(tasklist)
    
# def create_connection(db_file):
#     """ create a database connection to a SQLite database """
#     conn = None
#     try:
#         conn = sqlite3.connect(db_file)
#         print(sqlite3.version)
#     except Error as e:
#         print(e)
#     finally:
#         if conn:
#             conn.close()
def create_connection(db_file):
    """ create a database connection to the SQLite database
        specified by db_file
    :param db_file: database file
    :return: Connection object or None
    """
    conn = None
    try:
        conn = sqlite3.connect(db_file)
        return conn
    except Error as e:
        print(e)

    return conn


def create_table(conn, create_table_sql):
    """ create a table from the create_table_sql statement
    :param conn: Connection object
    :param create_table_sql: a CREATE TABLE statement
    :return:
    """
    try:
        c = conn.cursor()
        c.execute(create_table_sql)
    except Error as e:
        print(e)

if __name__=="__main__":
    # create a database connection
    conn = create_connection("tasklist.db")
    # create tables
    if conn is not None:
        # create tasklist table
        create_table(conn, sql_create_tasklist_table)
    else:
        print("Error! cannot create the database connection.")

    app.run()

