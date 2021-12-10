
import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Routes, Route, Link} from "react-router-dom";
import {uuid} from 'uuidv4';
import AddTodo from './AddTodo';
import './App.css';
import Header from './Header';
import TodoList from './TodoList';

function App() {

const LOCAL_STRG_KEY = "todos";
const [todos, setTodos] = useState([]);

const addTodoHandler = (todo) => {
  console.log(todo);
  setTodos([...todos, {id: uuid(), ...todo}]);
}

const removeTodoHandler = (id) => {
   const newTodoList = todos.filter((todo) => {
   return todo.id !== id;
});

   setTodos(newTodoList);
};

useEffect(() => {
  const retrieveTodos = JSON.parse(localStorage.getItem(LOCAL_STRG_KEY));
  if(retrieveTodos) setTodos(retrieveTodos);
}, []);

useEffect(() => {
  localStorage.setItem(LOCAL_STRG_KEY, JSON.stringify(todos));
}, [todos]);

return (
    <div className="ui container">
        <Router>
        <Link to="/">TodoList</Link>
        </Router>
    </div>
  );
}

export default App;
