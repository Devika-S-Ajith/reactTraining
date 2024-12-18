import React from 'react';
import { useTodos } from './TodoContext';

const CompletedTodos = () => {
  const { state } = useTodos();
  const completedTodos = state.todos.filter(todo => todo.completed);


  return (

    <div>
      <h2>Completed Todos</h2>
      <ul>
        {completedTodos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedTodos;
