import React, { useState } from 'react';
import { useTodos } from './TodoContext';
import './leftside.css';

const TodoList = () => {
  const [newTodo, setNewTodo] = useState('');
  const { state, dispatch } = useTodos(); 

  const handleTodoInput = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim()) {
      dispatch({ type: 'ADD_TODO', payload: newTodo });
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    dispatch({ type: 'REMOVE_TODO', payload: index });
  };

  const editTodo = (index, newText) => {
    dispatch({ type: 'UPDATE_TODO', payload: { index, newText } });
  };

  const handleEdit = (index) => {
    const newText = prompt('Edit ToDo:', state.todos[index]);
    if (newText !== null) {
      editTodo(index, newText);
    }
  };

  return (
    <div className="left-section">
      <h2>Todo List</h2>
      <ul>
        {state.todos.map((todo, index) => (
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
          onChange={handleTodoInput}
          placeholder="Add a new todo"
        />
        <button onClick={addTodo}>Add</button>
      </div>
    </div>
  );
};

export default TodoList;
