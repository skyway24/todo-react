import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodo, setFilterTodo] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);
  useEffect(() => {
    filterHandler();
    saveLocalTodo();
  }, [todos, status]);
  //const [inputText, setinputText]= useState("");

  const onAddHandler = (events) => {
    setTodos([
      ...todos,
      { text: events, completed: false, id: Math.random() * 1000 },
    ]);
  };
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodo(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilterTodo(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTodo(todos);
    }
  };

  const saveLocalTodo = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form onAdd={onAddHandler} setStatus={setStatus} />
      <TodoList setTodoList={setTodos} todosList={filterTodo} />
    </div>
  );
}

export default App;
