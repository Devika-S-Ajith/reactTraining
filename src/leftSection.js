import { Component } from "react";
import "./leftside.css";

class TodoList extends Component {
  handleEdit = (index) => {
    const newText = prompt("Edit ToDo:", this.props.todos[index]);
    if (newText !== null) {
      this.props.editTodo(index, newText);
    }
  };

  render() {
    return (
      <div className="left-section">
        <h2>Todo List</h2>
        <ul>
          {this.props.todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => this.handleEdit(index)}>Edit</button>
              <button onClick={() => this.props.deleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
        <div className="todo-input">
          <input
            type="text"
            value={this.props.newTodo}
            onChange={this.props.onInputChange}
            placeholder="Add a new todo"
          />
          <button onClick={this.props.addTodo}>Add</button>
        </div>
      </div>
    );
  }
}

export default TodoList;
