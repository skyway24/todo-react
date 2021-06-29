import React from "react";
import Todo from "./Todo";
import "../App.css";
function TodoList({ todosList, setTodoList }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todosList.map((todo) => (
          <Todo
            setTodoList={setTodoList}
            todosList={todosList}
            key={todo.id}
            text={todo.text}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
