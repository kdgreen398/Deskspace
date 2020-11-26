import React, { useState } from "react";
import { useStore } from "react-redux";
import { Link } from 'react-router-dom';

import MiniTask from "./MiniTask";

import '../styles/Home.css';
import dot from '../static/gradient-square.png';
import grayDot from '../static/gray-dot.png';
import profileDot from '../static/circle.png';

import Calendar from "./Calendar";
import ToDoList from "./ToDoList";


export default function Home() {

    const store = useStore();
    const [state, setState] = useState(store.getState());

    const newTasks = state.myTasks.slice(0, 3);
    const myProjects = state.myProjects;


    return (
        <div className="main-container">
            <div className="side-bar">
                <div className="profile-card flex-container">
                    <img className="profile-icon" src={profileDot} alt="" srcset="" />
                    <div>
                        <h3>Kaleb Green</h3>
                        <p>View Full Profile</p>
                    </div>
                </div>

            </div>
            <div className="main-content">
                <div className="project-widget">
                    <h3>Your Projects</h3>
                    <div className="flex-container">
                        {myProjects.map((project) =>
                            <div className="project-card">
                                <img src={dot} alt="dot" srcset="" />
                                <h4>{project.name}</h4>
                            </div>
                        )}
                        <div className="project-card">
                            <img src={grayDot} alt="dot" srcset="" />
                            <h4>New Project</h4>
                        </div>
                    </div>
                </div>
                <div className="list-widget">
                    <h3>New Tasks</h3>
                    {newTasks.map((task) =>
                        <div className="task-card flex-container">
                            <img src={dot} alt="dot" srcset="" />
                            <div>
                                <h3>{task.objective}</h3>
                                <p>due date: <span>{task.dueDate.toDateString()}</span></p>
                                <p>created by <span>Anthony Garcia</span></p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}