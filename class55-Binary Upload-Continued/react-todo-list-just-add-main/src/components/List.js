// app.js => list.js
// using the Todo in the code when working on the todos.map
import Todo from './Todo'

// get todos object from the calling in app.js
// does the desctructuring
// looping trough the todos and making and Todo-component for each
const List = ({ todos }) => {
    return (
        <div>
          {todos.map((todo) => 
            <Todo key={todo.id} todo={todo} />
          )}  
        </div>
    )
}

export default List

