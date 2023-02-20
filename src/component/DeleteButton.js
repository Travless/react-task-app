import React from "react";

class DeleteButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: task.number,
        };
    }

    render(){
        return(
            <button>X</button>
        )
    }
}

export default DeleteButton