import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/all-todos">All Todos</Link></li>
      <li><Link to="/completed-todos">Completed Todos</Link></li>
      <li><Link to="/add-todo">Add Todo</Link></li>
    </ul>
  </nav>
);

export default Navbar;
