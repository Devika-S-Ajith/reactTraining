import { Component } from "react";
import TodoList from "./leftSection";
import RandomText from "./rightSection"

import "./App.css";

class App extends Component{
render(){

  return(
    <div className="container">

    <TodoList/>
    <RandomText/>
    </div>
  )
}
}

export default App