import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../../css/task.css";

const Task = ({task, taskList, setTaskList }) =>{
    console.log('Task component received task list', taskList);
    let taskListTemp = taskList;


    const removeTask = (taskToRemove) => {
        

        taskListTemp = taskListTemp.filter(task => task !== taskToRemove);

        console.log('new taskList', taskListTemp);

        setTaskList(taskListTemp);
    }


    return(
        <div className="taskContainer">
            <li 
                onClick={(event) => {
                    event.target.style.textDecoration = "line-through";
                    event.target.style.color = "gray";

                }}            
            
            >{task} </li>
            <button
                onClick={(event) => {
                    removeTask(task);

                }}           
            
            >Remove</button>
        </div>

    );
}

export default Task;