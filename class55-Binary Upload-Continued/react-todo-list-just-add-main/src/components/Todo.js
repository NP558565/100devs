// app.js => list.js => todo.js
// get an indiviudal todo from List.js and output a h2-element
// with the item-attribute from the definition in App.js
const Todo = ({ todo }) => {
    return (
        <div>
            <h2>{todo.item}</h2>
        </div>
    )
}

export default Todo

