import React, { useState } from "react";

function TodoForm(props) {
    const { addTodo } = props;

    // State
    const [value, setValue] = useState("");

    // Actions
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!value) return;
        // putting the ! at the start means you are testing the opposite of the if statement. e.g if the string is falsey return (if it doesn't exist of an empty string return)
        addTodo(value);
        setValue("");
    }


    return (
        <form onSubmit={handleSubmit}>
            <input value={value} 
            type="text" 
            placeholder="Add Todo..." 
            onChange={(event) => setValue(event.target.value)}
            />
        </form>
    );
}

export default TodoForm;