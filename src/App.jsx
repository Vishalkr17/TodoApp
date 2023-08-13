import React, { useEffect, useState } from "react";
import './App.css'
import TodoList from "./TodoList";


/// hook
function App() {
  const [todos, setTodos] = useState([]);

useEffect(() => {
    fetch("http://localhost:3000/todos", {
      method: "GET"
    })
    .then((response) => response.json())
    .then((data) => setTodos(data))


    setInterval(() => {
      fetch("http://localhost:3000/todos", {
        method: "GET"
      }).then((response) => {
        response.json().then((data) => {
          setTodos(data);
        })
      });
    }, 1000)
    
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE"
    })
    .then(response => response.json())
    .then(data => setTodos(data))
  };

  return (
    <div>
      <h1>Easy Todo App</h1>
      <input type="text" />
      <div>
        <TodoList todos={todos} onDelete={handleDelete} />
      </div>
    </div>
  );
}


export default App;