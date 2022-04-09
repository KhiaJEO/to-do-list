
import React from "react";

// CSS
import "./TodoItem.css";

function TodoItem(props) {
    const { todo, index, completeTodo, removeTodo } = props;

    return (
    <div className={`todo ${todo.isCompleted ? "complete" : ""}`}> 
    {todo.text} 
        <div>
            <button onClick={() => completeTodo(index)}>Complete</button>
            <button onClick={() => removeTodo(index)}>X</button>
        </div>
    </div>
);
}

export default TodoItem;


// ? is a turnery statement (a short hand for an if else statement)
// : is an else statememt