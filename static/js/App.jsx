import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Task from "./components/Task";

import "../css/index.css";

const App = () => {

    const [taskList, setTaskList] = useState([]);
    const [newTask, setnewTask] = useState("");
    const [reRender, setreRender] = useState(false);
    
    useEffect(() => {
    // setTaskList(taskList);
    
    }, [reRender]);
    
    const addTask = (taskname) => {

        if(newTask != ''){
            taskList.push(taskname);
            setTaskList(taskList);
        }

    };

    const handleKeyPress = (event) => {
       

        if (event.key === 'Enter') {
            // Do code here
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
                            setreRender(!reRender);

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