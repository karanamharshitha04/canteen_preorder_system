from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mysqldb import MySQL

app = Flask(__name__)
CORS(app)


app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Harshi@04'
app.config['MYSQL_DB'] = 'canteen_db'

mysql = MySQL(app)


@app.route('/')
def home():
    return 'Canteen Pre Ordering System API'


@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()

    name = data['name']
    email = data['email']
    password = data['password']

    cursor = mysql.connection.cursor()

    query = "INSERT INTO users(name, email, password) VALUES(%s,%s,%s)"

    cursor.execute(query, (name, email, password))

    mysql.connection.commit()
    cursor.close()

    return jsonify({'message': 'User Registered Successfully'})


@app.route('/login', methods=['POST'])
def login():

    data = request.get_json()

    email = data['email']
    password = data['password']
    role = data['role']

    cursor = mysql.connection.cursor()

    query = "SELECT * FROM users WHERE email=%s"

    cursor.execute(query, (email,))

    user = cursor.fetchone()

    cursor.close()

    # User not found
    if not user:
        return jsonify({'message': 'Please register with this email id'}), 404

    # Password check
    db_password = user[3]

    if password != db_password:
        return jsonify({'message': 'Password is wrong'}), 401

    # Admin Login
    if role == "admin" and email == "admin@gmail.com":
        return jsonify({'message': 'Admin Login Successful'})

    # User Login
    return jsonify({'message': 'User Login Successful'})


@app.route('/menu', methods=['GET'])
def get_menu():

    cursor = mysql.connection.cursor()

    cursor.execute("SELECT * FROM food_items")

    rows = cursor.fetchall()

    food_list = []

    for row in rows:

        food = {
            'id': row[0],
            'category': row[1],
            'subcategory': row[2],
            'food_name': row[3],
            'price': row[4]
        }

        food_list.append(food)

    cursor.close()

    return jsonify(food_list)

# Run Flask App
if __name__ == '__main__':
    app.run(debug=True)