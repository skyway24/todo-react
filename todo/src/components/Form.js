import React, { useState } from "react";

function Form(props) {
  const [text, setText] = useState("");

  const inputTextHandler = (e) => {
    setText(e.target.value);
  };

  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(text);
    setText('');
  }

  const statusHandler = (e) => {
    //console.log(e.target.value);
    props.setStatus(e.target.value);
  };

  return (
    <form>
      <input value={text} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
