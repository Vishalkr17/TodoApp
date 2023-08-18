import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css'
import TodoList from "./TodoList";
import axios from "axios";
import AddTodo from "./AddTodo";
import EditTodo from "./EditTodo";
import 'tachyons';
import AppBar  from "./Appbar";

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

  const handleDelete = async(todoId) => {
    await axios.delete(`http://localhost:3000/todos/${todoId}`);
    const response = await axios.get("http://localhost:3000/todos");
    const data = response.data;
    setTodos(data);
  };

  

  return (
    <div>
   
      <AppBar />
      <Routes>
      <Route path="/todos" element={
        <>
        
        <div>
          <AddTodo />
        </div>

        <div>
          <TodoList todos={todos} onDelete={handleDelete} />
        </div>

        </>
      } />

    
        <Route path="/todos/:todosId" element={<EditTodo  todos={todos} setTodos={setTodos} />} />
      </Routes>


    </div>
  );
}


export default App;