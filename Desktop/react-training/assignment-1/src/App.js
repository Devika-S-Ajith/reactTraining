import TodoList from "./leftSection";
import { RandomText } from "./rightSection";

export default function App() {
  return(
    <div className="container">

    <TodoList/>
    <RandomText/>
    </div>
  )
}