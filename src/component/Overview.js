import React from "react";
import './Overview.css'
import DeleteButton from "./DeleteButton";

const Overview = (props) => {
    const { tasks } = props;

    // handleClick = (e) => {
    //     this.setState({tasks: this.state.tasks.filter(task => {
    //         return task.number !== 
    //     })})
    // }

    return (
        <ul>
            {tasks.map((task) => {
                return (
                <li key={task.id}>
                    {task.number + 1}. {task.text}
                    <DeleteButton />
                </li>
                );
            })}
        </ul>
    );
};

export default Overview;