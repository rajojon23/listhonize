import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Task from "./components/Task";

import "../css/index.css";

const App = () => {

    const [taskList, setTaskList] = useState([]);
    const [newTask, setnewTask] = useState("");
    const [reRender, setreRender] = useState(false);//will be the trigger that forces a re-render of the page when needed
    
    useEffect(() => {
    
    
    }, [reRender]);//to force re-render when required

    useEffect(() => {
       
        //call to fetch the data needed (task list) from the BE

        fetch('http://127.0.0.1:5000/api/v1/tasklist/all')
        .then(response => response.json())
        .then((data) => {

            //data received from server BE
            const taskData = data;

            //iterate through the data we got and push accordingly into tasklist
            for (let index = 0; index < taskData.length; index++) {
                const task = taskData[index][1];
                taskList.push(task);
                setTaskList(taskList);
                
            }
            setreRender(!reRender);//force re-render of the page (for instant update)
            
        });

    }, []);
    
    //Function that adds a new task name 
    const addTask = (taskname) => {

        if(newTask != ''){//make sure first the input isn't empty
            taskList.push(taskname);
            setTaskList(taskList);

            //fetch to add the data needed (taskname) to send to the BE
            fetch('http://127.0.0.1:5000/api/v1/tasklist/add', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    task: taskname
                })
              })
              .then((response) => response.json())
              .then((json) => {
                console.log(json);
                return json;
               })


        }

    };


    //Function that adds a new task name, but on the 'Enter' key pressed, same behavior as the add button on click
    const handleKeyPress = (event) => {
       

        if (event.key === 'Enter') {

            event.preventDefault();


            if(newTask != ''){
                addTask(newTask);
                setreRender(!reRender);

                
            }

            

          }
    }
  
        return (
            <div className="container">
                <h2>To Do</h2>
                <div className="searchContainer">
                    <input
                        className="searchInput"
                        placeholder="What needs to be done?"
                        onChange={(evt) => {
                            setnewTask(evt.target.value);
                        
                        }}
                        onKeyPress={handleKeyPress}
                    />
                    <button
                        onClick={(event) => {
                            addTask(newTask);
                            setreRender(!reRender);//instant update of the page on click of this button

                    }}
                    >
                        Add
                    </button>
                </div>
                <ul> 
                    {taskList.map((task) => (
                        
                        <Task task={task} taskList={taskList} setTaskList={setTaskList}></Task>
                    ))}
                </ul>
            </div>
        )
    
}



export default App;