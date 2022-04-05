import {useState} from "react";
import TodoItem from "./components/TodoItem";

function App() {
  // State
  const [todos, setTodos] = useState([
    "Learn React",
    "Tell all my friends to learn React",
    "Get them to tell five of their friends to learn React",
    "Start a successful mlm or pyramid scheme around React",
  ])
  return (
    <div>
      <h1>My todo list</h1>
      <TodoItem/>
      {todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} />
      ))}
    </div>
  );
}

export default App;
