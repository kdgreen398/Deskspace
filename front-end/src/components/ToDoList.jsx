import React, { useState } from "react";
import { useStore } from "react-redux";

import "../styles/ToDoList.css"


export default function ToDoList(props) {


    const miniTask = props.myTasks.filter((task) => task.dueDate.toDateString() === props.selectedDate.toDateString());

    return (
        <div className="to-do-list col-md-6">
            <div className="header">
                <h1>My Tasks</h1>
                <p>{props.selectedDate.toDateString()}</p>
            </div>
            <div className="container-fluid list-container">
                {miniTask.map((task, index) => {
                    const { objective, dueDate, isComplete } = task;
                    let hours = (dueDate.getHours() < 10) ? '0' + dueDate.getHours() : dueDate.getHours();
                    hours = (hours === "00") ? "12" : hours;

                    const minutes = (dueDate.getMinutes() < 10) ? '0' + dueDate.getMinutes() : dueDate.getMinutes();
                    const timeString = `${hours}:${minutes}`;
                    return (
                        <div key={index} className="row to-do-item">
                            <input type="checkbox" className="to-do-checkbox" />
                            <div>
                                <label>{objective}</label>
                                <br />
                                <label>{timeString}</label>
                            </div>
                            {/* <p>{dueDate.toString()}</p> */}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}