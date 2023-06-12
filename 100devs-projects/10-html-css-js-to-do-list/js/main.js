//////////////////////////selectors

const todoInput = document.querySelector('.todoInput');
const todoButton = document.querySelector('.todoButton');
const todoList = document.querySelector('.todoList');
const filterOption = document.querySelector('.filterTodo')

//////////////////////////events listenters

document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('change', filterTodo);


//////////////////////////functions

function addToDo(e){
  // prevent form from submitting
  e.preventDefault();
  console.log(todoInput.value)
  // todo section
  const todoSec = document.createElement('section')
  todoSec.classList.add('todo')



  // todo Li
  const newTodo = document.createElement('li')
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todoItem')
  todoSec.appendChild(newTodo)

  //add todo to local localStorage
  saveLocalTodos(todoInput.value)



  // check mark button
  const completedButton = document.createElement('button')
  completedButton.innerHTML = '<i class="fas fa-check"></i>'
  completedButton.classList.add('complete-btn')
  todoSec.appendChild(completedButton)

  ///// trash mark button
  const trashButton = document.createElement('button')
  trashButton.innerHTML = '<i class="fas fa-trash"></i>'
  trashButton.classList.add('trash-btn')
  todoSec.appendChild(trashButton)

  //// append to list
  todoList.appendChild(todoSec)
  // clear input value
  todoInput.value = ""
}

function deleteCheck(e){
  //deleteCheck
  const item = e.target;
  if(item.classList[0] === 'trash-btn'){ //genius
    const todo = item.parentElement // key
    //animation
    todo.classList.add('fall')
    removeLocalTodos(todo);
    todo.addEventListener('transitionend', ()=>{
      todo.remove()
    })
  }

  //check mark
  if(item.classList[0] === 'complete-btn'){
    const todo = item.parentElement
    todo.classList.toggle('completed')
  }
}


function filterTodo(e){
  const todos = todoList.children;
  console.log(todos);
  Array.from(todos).forEach(function(todo){
    switch (e.target.value) { // all, uncompleted, completed
      case "all":
      todo.style.display = 'flex';
        break;
      case 'completed':
      if (todo.classList.contains(`completed`)) { // if it has completed class
        todo.style.display = 'flex' //.. then show
      }
      else{
        todo.style.display = 'none'
      }
        break;
      case 'uncompleted':
      if (!todo.classList.contains(`completed`)) {
        todo.style.display = 'flex'
      }
      else{
        todo.style.display = 'none'
      }
        break;
    }
  });

}

////// save todo
function saveLocalTodos(todo){
  // check -- do i already have anything already in the local storage
  let todos;
  if (localStorage.getItem('todos') === null) { // if it doesnt exist
    todos = [] // creates an empty array
  }
  else{         // converts values in local storage into an array... in todos
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo); // pushes parameter into todos array^
  localStorage.setItem('todos', JSON.stringify(todos));
}


//////////     get todos

function getTodos(){
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = []
  }
  else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach(todo => {
    const todoSec = document.createElement('section')
    todoSec.classList.add('todo')

    // todo Li
    const newTodo = document.createElement('li')
    newTodo.innerText = todo;   //// local storage value from param
    newTodo.classList.add('todoItem')
    todoSec.appendChild(newTodo)

    // check mark button
    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn')
    todoSec.appendChild(completedButton)

    ///// trash mark button
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn')
    todoSec.appendChild(trashButton)

    //// append to list
    todoList.appendChild(todoSec)
  });
}

// remove local todos
function removeLocalTodos(todo){
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = []
  }
  else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1)
  localStorage.setItem('todos', JSON.stringify(todos));

}
