import "./leftside.css"

function TodoList() {
  const todos = [
    "Go to office",
    "Drink water",
    "Eat healthy",
    "Sleep at 8",
    "Read 3 pages",
  ];

  return (
    <div className="left-section">
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
