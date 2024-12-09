import React, { useEffect, useState } from 'react';
import TodoList from './leftSection';
import RandomText from './rightSection';
import './App.css';
import { TodoProvider, useTodos } from './TodoContext'; 

const App = () => {
  const [text, setText] = useState('Waiting ...');
  const [useLocalStorage, setUseLocalStorage] = useState(true);

  const { state, dispatch } = useTodos();

  useEffect(() => {
    const storage = useLocalStorage ? localStorage : sessionStorage;
    const storedTodos = JSON.parse(storage.getItem('todos')) || [];
    storedTodos.forEach(todo => {
      dispatch({ type: 'ADD_TODO', payload: todo });
    });

    const timeoutId = setTimeout(() => {
      setText('Helooooooooo  !!!!!!!!!!!!');
    }, 10000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [useLocalStorage, dispatch]);

  const saveTodos = () => {
    const storage = useLocalStorage ? localStorage : sessionStorage;
    storage.setItem('todos', JSON.stringify(state.todos));
  };

  const toggleStorage = () => {
    setUseLocalStorage((prev) => {
      const newUseLocalStorage = !prev;
      const storage = newUseLocalStorage ? localStorage : sessionStorage;
      storage.setItem('todos', JSON.stringify(state.todos));
      return newUseLocalStorage;
    });
  };

  useEffect(() => {
    saveTodos(); 
  }, [state.todos]);

  return (
    <div className="container">
      <div>
        <label>
          <input
            type="checkbox"
            checked={useLocalStorage}
            onChange={toggleStorage}
          />
          Use LocalStorage
        </label>
      </div>

      <TodoList />
      <RandomText text={text} />
    </div>
  );
};

const WrappedApp = () => (
  <TodoProvider>
    <App />
  </TodoProvider>
);

export default WrappedApp;
