
const Todo = ({ todo }) => {//takes a todo item and displays it to user as an h2 element
    return (
        <div>
            <h2>{todo.item}</h2>
        </div>
    )
}

export default Todo //allows access to component elsewhere in our code

