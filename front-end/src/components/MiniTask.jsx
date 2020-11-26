import React, { useState } from "react";
import { useStore } from "react-redux";


export default function MiniTask(props) {

    // const store = useStore();
    // const [state, setState] = useState(store.getState());
    const { objective, dueDate, isComplete } = props.task;
    const isOverDue = props.isOverDue;
    let dueString = "";

    if (!isOverDue) {
        dueString = "Due: " + dueDate.toLocaleDateString();
        const time = dueDate.toLocaleTimeString();
        dueString += " at " + time;
    } else {
        dueString = "Overdue!!"
    }



    // console.log(store.getState());



    return (
        <div className="miniTask col-sm">
            <p>{objective}</p>
            <p>{dueString}</p>
        </div>
    );
}