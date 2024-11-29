import React from "react";
import "./leftside.css";

const TodoList = ({ todos, newTodo, onInputChange, addTodo, deleteTodo, editTodo }) => {
  const handleEdit = (index) => {
    const newText = prompt("Edit ToDo:", todos[index]);
    if (newText !== null) {
      editTodo(index, newText);
    }
  };

  return (
    <div className="left-section">
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <div className="todo-input">
        <input
          type="text"
          value={newTodo}
          onChange={onInputChange}
          placeholder="Add a new todo"
        />
        <button onClick={addTodo}>Add</button>
      </div>
    </div>
  );
};

export default TodoList;
