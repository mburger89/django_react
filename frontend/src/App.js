// import logo from "./logo.svg";
// import "./App.css";
import TodoItem from "./TodoItem";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let td = async () => {
      await fetch("http://localhost:8000/api/todos/")
        .then((res) => res.json())
        .then((j) => setTodos(j))
        .catch((error) => console.error(error));
    };
    td();
  }, []);

  const todoList = todos.map((todo) => <TodoItem {...todo} />);

  return (
    <div
      style={{
        gridTemplateColumns: "1fr 1fr 1fr",
        gridColumnStart: 2,
      }}
      // className="App"
    >
      <header className="App-header"></header>
      <h1> Todo List </h1>
      <ul style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
        {todoList}
      </ul>
    </div>
  );
}

export default App;
