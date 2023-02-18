import React from "react";

class Input extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            task: { text: ''},
        tasks: [],
        };
    }

    handleChange = (e) => {
        this.setState({
            task: {
                text: e.target.value,
            }
        });
    };

    onSubmitTask = (e) => {
        e.preventDefault();
        this.setState({
            tasks: this.state.tasks.concat(this.state.task),
            task: { text: '' },
        });
    };

    render(){
        const { task, tasks } = this.state;

        return(
            <div>
                <form onSubmit={this.onSubmitTask}>
                    <label htmlFor="taskInput">New Task: </label>
                    <input type='text' id="taskInput" onChange={this.handleChange} value={task.text} />
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}
// const Input = () => {

//     const [newTask, setNewTask] = useState('')

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(newTask);
//         setNewTask('');
//     }

//     return(
//         <div>
//             <form className="form-cont" onSubmit={handleSubmit}>
//                 <label className="input-label">New Task: </label>
//                 <input className="task-input" id="task-input" type='text' value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
//                 <button className="submit-btn" id="submit-btn" type="submit">Add</button>
//             </form>
//         </div>
//     )
// }

export default Input