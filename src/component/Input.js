import React, { Component } from "react";
import uniqid from 'uniqid';
import Overview from "./Overview";

class Input extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            task: { 
                text: '',
                id: uniqid(),
                number: 0,
            },
            tasks: [],
        };
    }

    // sets current task in state to whatever is typed in the input field
    handleChange = (e) => {
        this.setState({
            task: {
                text: e.target.value,
                id: this.state.task.id,
                number: this.state.tasks.length
            },
        });
    };

    // adds current task in state to current tasks array state via concat
    onSubmitTask = (e) => {
        e.preventDefault();
        this.setState({
            tasks: this.state.tasks.concat(this.state.task),
            task: { 
                text: '',
                id: uniqid(),
            },
        });
        console.log(this.state.tasks)
    };

    render(){
        const { task, tasks } = this.state;

        return(
            <div>
                <Overview tasks={tasks} />
                <form onSubmit={this.onSubmitTask}>
                    <label htmlFor="taskInput">New Task: </label>
                    <input type='text' id="taskInput" onChange={this.handleChange} value={task.text} />
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default Input