import React, { useState } from "react";
import todoForm from "./todoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  return (
    <div>
      <todoForm onSubmit={addTodo} />
    </div>
  );
}

export default TodoList;
