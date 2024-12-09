import React, { useState } from 'react';
import { useTodos } from './TodoContext';
import './leftside.css';

const TodoList = () => {
  const [newTodo, setNewTodo] = useState('');
  const [error, setError] = useState('');
  const { state, dispatch } = useTodos(); 

  const handleTodoInput = (e) => {
    setNewTodo(e.target.value);
    setError('');
  };

  const validateTodo = () => {
    if (!newTodo.trim()) {
      return 'TODO cannot be empty.';
    }
    if (newTodo.length < 3) {
      return 'TODO must be at least 3 characters long.';
    }
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validateTodo();
    if (validationError) {
      setError(validationError);
      return; 
    }

    dispatch({ type: 'ADD_TODO', payload: newTodo });

    setNewTodo('');
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

      <form onSubmit={handleSubmit} className="todo-input">
        <input
          type="text"
          value={newTodo}
          onChange={handleTodoInput}
          placeholder="Add a new todo"
          aria-label="New Todo"
        />
        <button type="submit">Add</button>

        {error && <div className="error-message">{error}</div>} 
      </form>
    </div>
  );
};

export default TodoList;
