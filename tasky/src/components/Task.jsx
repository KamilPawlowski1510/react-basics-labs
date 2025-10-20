import React from 'react';

const getPriorityColour = (priority) => {
    switch (priority) {
        case "Low":
            return "green"
        case "Medium":
            return "orange"
        case "High":
            return "red"
        default:
            return "white"
    }
}

const Task = (props) => {

    return (
        <div className="card" style={{ backgroundColor: props.done ? 'lightgrey' : '#5bb4c4' }}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description">{props.description}</p>
            <p className="priority" style={{ backgroundColor: getPriorityColour(props.priority)}}>{props.priority}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>

        </div>
    )

}


export default Task;
