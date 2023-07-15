// import all components / files which are used
import { useState } from 'react'
import Header from "./components/Header";
import List from "./components/List"
import AddTodo from "./components/AddTodo"

// using the useState-hook
// todos => is the actual state (an array with 3 objects)
// setTodos => is the end-state
// useState => is the defined initial state with which it get started
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      item: "Drink Water",
    },
    {
      id: 2,
      item: "Make Healthy Dinner",
    },
    {
      id: 3,
      item: "Exercise",
    },
  ]);

  const addTodo = (todo) => {
    const id = Math.ceil(Math.random()*100000)
    const newTodo = {id, ...todo}
    setTodos([...todos, newTodo])
  }

  // Different components following
  // for Header: passing in a prop-Title for the component
  // for List: passing in a todos-Object - see above - in the component
  return (
    <div className="container">
      <Header title="Todo List" />
      <AddTodo onAdd={addTodo} />
      <List todos={todos}/>
    </div>
  );
}

export default App;
