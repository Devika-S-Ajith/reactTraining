import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'; 
import TodoList from './leftSection';
import RandomText from './rightSection';
import './App.css';
import { TodoProvider, useTodos } from './TodoContext';
import Login from './Login'; 
import AllTodos from './AllTodos'; 
import CompletedTodos from './CompletedTodos'; 
import AddTodo from './AddTodo';
import ProtectedRoute from './ProtectedRoutes'; 

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

  const toggleStorage = (e) => {
    const newUseLocalStorage = !useLocalStorage;
    const storage = newUseLocalStorage ? localStorage : sessionStorage;
    storage.setItem('todos', JSON.stringify(state.todos));
    setUseLocalStorage(newUseLocalStorage);
  };

  useEffect(() => {
    saveTodos(); 
  }, [state.todos]);

  return (
    <Router>
      <div className="container">
        <nav>
          {/* Navigation Bar */}
          <ul>
            <li>
              <NavLink to="/all-todos" className={({ isActive }) => (isActive ? 'active' : '')}>All Todos</NavLink>
            </li>
            <li>
              <NavLink to="/completed-todos" className={({ isActive }) => (isActive ? 'active' : '')}>Completed Todos</NavLink>
            </li>
            {/* <li>
              <NavLink to="/add-todo" className={({ isActive }) => (isActive ? 'active' : '')}>Add Todo</NavLink>
            </li> */}
            <li>
              <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>Login</NavLink>
            </li>
          </ul>
        </nav>

        
        <Routes>
        
          <Route path="/login" element={<Login />} />

       
          <Route element={<ProtectedRoute />}>
            <Route path="/all-todos" element={<AllTodos />} />
            <Route path="/completed-todos" element={<CompletedTodos />} />
            <Route path="/add-todo" element={<AddTodo />} />
            <Route path="/todos" element={<TodoList />} />
          </Route>

          <Route path="/" element={<RandomText text={text} />} />
        </Routes>
      </div>
    </Router>
  );
};

const WrappedApp = () => (
  <TodoProvider>
    <App />
  </TodoProvider>
);

export default WrappedApp;
