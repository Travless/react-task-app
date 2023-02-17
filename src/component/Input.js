import { React, useState } from "react";

const Input = () => {

    const [newTask, setNewTask] = useState('')

    return(
        <div>
            <form className="form-cont" onSubmit={(e) => {setNewTask(e.target.value); console.log(newTask)}}>
                <label className="input-label" for="task-input">New Task: </label>
                <input className="task-input" id="task-input" type='text'/>
                <button className="submit-btn" id="submit-btn" type="submit">Add</button>
            </form>
        </div>
    )
}

export default Input