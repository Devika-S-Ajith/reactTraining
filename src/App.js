import { Component } from "react";
import TodoList from "./leftSection";
import RandomText from "./rightSection";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [], 
      newTodo: "",
      text: "Waiting ...",
      useLocalStorage: true, 
    };
  }

  componentDidMount() {
    const storage = this.state.useLocalStorage ? localStorage : sessionStorage;
    const storedTodos = JSON.parse(storage.getItem("todos")) || [];
    this.setState({ todos: storedTodos });

    setTimeout(() => {
      this.setState({ text: "Helooooooooo  !!!!!!!!!!!!" });
    }, 10000);
  }

  saveTodos = () => {
    const storage = this.state.useLocalStorage ? localStorage : sessionStorage;
    storage.setItem("todos", JSON.stringify(this.state.todos));
  };

  handleTodoInput = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  addTodo = () => {
    if (this.state.newTodo.trim()) {
      this.setState(
        (prevState) => ({
          todos: [...prevState.todos, prevState.newTodo],
          newTodo: "",
        }),
        this.saveTodos
      );
    }
  };

  deleteTodo = (index) => {
    this.setState(
      (prevState) => {
        const todosCopy = [...prevState.todos];
        todosCopy.splice(index, 1); 
        return { todos: todosCopy }; 
      },
      this.saveTodos
    );
  };

  editTodo = (index, newText) => {
    const updatedTodos = [...this.state.todos];
    updatedTodos[index] = newText;
    this.setState({ todos: updatedTodos }, this.saveTodos);
  };

  toggleStorage = () => {
    this.setState(
      (prevState) => ({
        useLocalStorage: !prevState.useLocalStorage,
      }),
      () => {
       
        const storage = this.state.useLocalStorage ? localStorage : sessionStorage;
        storage.setItem("todos", JSON.stringify(this.state.todos));
      }
    );
  };

  render() {
    return (
      <div className="container">
        
        <div>
          <label>
            <input
              type="checkbox"
              checked={this.state.useLocalStorage}
              onChange={this.toggleStorage}
            />
            Use LocalStorage
          </label>
        </div>
        
        <TodoList
          todos={this.state.todos}
          newTodo={this.state.newTodo}
          onInputChange={this.handleTodoInput}
          addTodo={this.addTodo}
          deleteTodo={this.deleteTodo}
          editTodo={this.editTodo}
        />
        
        <RandomText text={this.state.text} />
      </div>
    );
  }
}

export default App;
