import React from 'react';
import { useTodos } from './TodoContext';

const AllTodos = () => {
  const { state } = useTodos();

  return (
    <div>
      <h2>All Todos</h2>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllTodos;
