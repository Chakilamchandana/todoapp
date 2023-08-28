import React, { useState } from "react";

function ToDoItem(props){

    const [taskisDone, setDone] = useState(false);

    function strikeItem(){
        setDone((prevValue) =>{
            return !prevValue;
        });
    }
    return(
        <div onClick={strikeItem}>
            <li style={{ textDecoration: taskisDone? 'line-through' : 'none'}}>{props.text}</li>
        </div>
    )
}

export default ToDoItem;