import { useState, useEffect } from "react";
import TodoList from "./leftSection";
import RandomText from "./rightSection";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [text, setText] = useState("Waiting ...");
  const [useLocalStorage, setUseLocalStorage] = useState(true);

 
  useEffect(() => {
    const storage = useLocalStorage ? localStorage : sessionStorage;
    const storedTodos = JSON.parse(storage.getItem("todos")) || [];
    setTodos(storedTodos);

  
    const timeoutId = setTimeout(() => {
      setText("Helooooooooo  !!!!!!!!!!!!");
    }, 10000);

  
    return () => {
      clearTimeout(timeoutId);
    };
  }, [useLocalStorage]); 

  const saveTodos = () => {
    const storage = useLocalStorage ? localStorage : sessionStorage;
    storage.setItem("todos", JSON.stringify(todos));
  };

  const handleTodoInput = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos((prevTodos) => {
        const updatedTodos = [...prevTodos, newTodo];
        saveTodos();
        return updatedTodos;
      });
      setNewTodo("");
    }
  };

  const deleteTodo = (index) => {
    setTodos((prevTodos) => {
      const todosCopy = [...prevTodos];
      todosCopy.splice(index, 1);
      saveTodos();
      return todosCopy;
    });
  };

  const editTodo = (index, newText) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos[index] = newText;
      saveTodos();
      return updatedTodos;
    });
  };

  const toggleStorage = () => {
    setUseLocalStorage((prev) => {
      const newUseLocalStorage = !prev;
      const storage = newUseLocalStorage ? localStorage : sessionStorage;
      storage.setItem("todos", JSON.stringify(todos));
      return newUseLocalStorage;
    });
  };

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

      <TodoList
        todos={todos}
        newTodo={newTodo}
        onInputChange={handleTodoInput}
        addTodo={addTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />

      <RandomText text={text} />
    </div>
  );
};

export default App;
