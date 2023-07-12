import { useState } from 'react' //imports and destructures useState from react
import Header from "./components/Header"; //allows access to the header component
import List from "./components/List" //allows access to the list component
import AddTodo from "./components/AddTodo" //allows access to the addtodo component

function App() {//creates a function called App

  const [todos, setTodos] = useState([ //hooks a state and links it to todos and the function to change the state is setTodos
    {//example object #1, to do list item
      id: 1,
      item: "Drink Water",
    },
    {//example object #2, to do list item
      id: 2,
      item: "Make Healthy Dinner",
    },
    {//example object #3, to do list item
      id: 3,
      item: "Exercise",
    },
  ]);

  const addTodo = (todo) => {//used to add items to out todo list
    const id = Math.ceil(Math.random()*100000)//generates a random key for each list item
    const newTodo = {id, ...todo} //creates a new todo item
    setTodos([...todos, newTodo]) //adds another todo item to the current list of todo items
  }

  return (//returns a div containing the output from out components/App
    <div className="container">
      <Header title="Todo List" />
      <AddTodo onAdd={addTodo} />
      <List todos={todos}/>
    </div>
  );
}

export default App; //exports our App for use elsewhere
