import {useState} from "react";

// Components
import TodoItem from "./components/TodoItem/TodoItem";
import TodoForm from "./components/TodoForm/TodoForm";

// CSS
import "./App.css"

function App() {
  // State
  const [todos, setTodos] = useState([
    { text: "Learn about React", isCompleted: false },
    { text: "Meet with Daisy for workshop", isCompleted: false },
    { text: "Meet with Jordi", isCompleted: false },
  ]);

  // Actions 
    // ("..." is the spread operator - looping through old array copying each element and adding it to the new array)
    //  What it would look like if you did not add the three dots before todos
    // [["something", "something else"], "some todo"]
    // Using the spread operator it looks like this: 
    // ["something", "something else", "some todo"]
  
    const addTodo = (text) => {
    const newTodos = [...todos, { text:text, isComplete: false }];
    setTodos(newTodos);
  };

  // fin dthe todo in this array and take its isComplete value and set it to true (whether its false or true)
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  };

  return (
    <div className="app">
      <div className="todo-list">
      <h1>My todo list</h1>
      {todos.map((todo, index) => (
        <TodoItem 
          todo={todo} 
          key={index} 
          index={index} 
          completeTodo={completeTodo} 
          removeTodo={removeTodo}
        />
      ))}
    <TodoForm addTodo={addTodo} />
    </div>
    </div>
  
  );
}

export default App;
