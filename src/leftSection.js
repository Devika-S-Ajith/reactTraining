import { Component } from "react";
import "./leftside.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        "Go to office",
        "Drink water",
        "Eat healthy",
        "Sleep at 8",
        "Read 3 pages",
      ],
    };
  }
  render() {
    return (
      <div className="left-section">
        <h2>Todo List</h2>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
