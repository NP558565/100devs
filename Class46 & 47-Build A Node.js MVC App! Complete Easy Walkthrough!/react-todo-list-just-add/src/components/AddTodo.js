import { useState } from 'react' //allows use of state in react component

const AddTodo = ({ onAdd }) => { //allows user to submit new todo items, allows AddToDo to use onAdd function
    const [item, setItem] = useState('')//hooks a state to monitor form

    const onSubmit = (e) => {//handles user form submission
        e.preventDefault()//prevents changing/refreshing page
        onAdd({item})//uses the function passed as argument, passes the user submitted form info

        setItem('')//clears state for another user entry
    }

    return (//returns a form element so the user can add todo items
        <form onSubmit={onSubmit}>
            <label>Add Todo:</label>
            <input 
                type="text" 
                placeholder="Todo Item"
                value={item}//shows the current state of the user's text
                onChange={ (e) => setItem(e.target.value)}//updates state to show users text in input
            /> 
            <input type="submit" value="Add Todo" />
        </form>
    )
}

export default AddTodo //allows component to be exported/used elsewhere in our code
