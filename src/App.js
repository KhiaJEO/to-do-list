import {useState} from "react";

// Components
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";

function App() {
  // State
  const [todos, setTodos] = useState([
    "Learn React",
    "Tell all my friends to learn React",
    "Get them to tell five of their friends to learn React",
    "Start a successful mlm or pyramid scheme around React",
  ]);

  // Actions ("..." is the spread operator - looping through old array copying each element and adding it to the new array)
  const addTodo = (text) => {
    const newTodos = [...todos, text];
    //  What it would look like if you did not add the three dots before todos
    // [["something", "something else"], "some todo"]
    // Using the spread operator it looks like this: 
    // ["something", "something else", "some todo"]
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>My todo list</h1>
      <TodoItem/>
      {todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
