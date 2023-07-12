import Todo from './Todo' //allows access to ToDo component

const List = ({ todos }) => {//takes an array of todos and outputs a list of todo items
    return (
        <div>
          {todos.map((todo) => 
            <Todo key={todo.id} todo={todo} />
          )}  
        </div>
    )
}

export default List //exports List for use elsewhere in our code

