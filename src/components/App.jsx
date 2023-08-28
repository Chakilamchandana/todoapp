import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App(){
    const [inputText, setInputText] = useState("");
    const [items,setItems] = useState([]);
    
    function handleChange(event){
        console.log(event.target.value);
        const newInput = event.target.value;
        setInputText(newInput);
    }

    function addItem(){
        setItems((prevItems) =>{
            return [...prevItems, inputText]
        });
        setInputText("");
    }

return(
    <div className="container">
        <div className="heading">
            <h1>To-Do List</h1>
        </div>
        <div className="form">
            <input type="text" onChange={handleChange} value={inputText}/>
            <button onClick={addItem}><span>Add</span></button>
        </div>
        <div>
            <ul>
                {items.map((item) => {
                    return <ToDoItem text={item}/>
                })}
            </ul>
        </div>
    </div>
)
}

export default App;