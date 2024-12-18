import React, { useState } from 'react';
import { useTodos } from './TodoContext';

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState('');
  const { dispatch } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: newTodo });
    setNewTodo('');
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
