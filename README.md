## About The Project
This is a very simple to-do list. Enjoy!

### Built With
Below are the major frameworks or library that I used for this project. Also make sure you have them installed in order to run the app on your machine.

* [React](https://reactjs.org/)
* [Webpack](https://webpack.js.org/)
* [NPM](https://www.npmjs.com/get-npm)
* [Python](https://www.python.org/downloads/) - (2.7 or higher)
* [Flask](https://flask.palletsprojects.com/en/1.1.x/installation/#)

## Getting Started
To get a local copy up and running follow these simple example steps.
1. Clone the repo
   ```sh
   git clone https://github.com/rajojon23/listhonize.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ``` 
3. Run the front-end watcher
   ```sh
   npm run-script  watch
   ``` 
4. Activate the python virtual environment
   ```sh
   fullstack\Scripts\activate
   ``` 

5. Install Flask
   ```sh
   pip install flask
   ``` 

6. Install Flask-CORS
   ```sh
   pip install flask-cors
   ``` 

7. Run the back-end server
   ```sh
   run python server/server.py
   ``` 


8. If all is well, you should be able to use the app by opening the  `index.html` file on your preferred browser


## API
The REST API to the app is described below. The database used is SQLite, which is already included with Python. The default name of the database is `tasklist.db`  

### Get the task list
`GET http://127.0.0.1:5000/api/v1/tasklist/all`

### Add a Task
`POST http://127.0.0.1:5000/api/v1/tasklist/add?task=Reach%20out` 
   ```sh
   {task : "Reach out"}
   ``` 

### Remove a specific Task
`POST http://127.0.0.1:5000/api/v1/tasklist/delete?task=Reach%20out` 

   ```sh
   {task : "Reach out"}
   ``` 

## To add
* Save tasks as completed into the database (tasks that are crossed out)


