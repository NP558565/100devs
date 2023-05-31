console.log('woek')
const addlist = document.getElementById('addlist')
const listname = document.querySelectorAll('.listN')

Array.from(listname).forEach(el => {
  el.addEventListener('click', filterListName)
})

function filterListName () {
  const filteredList = this.dataset.name
  // console.log(filteredList);
  window.location.href = `/todos/${filteredList}`
}

// const deleteBtn = document.querySelectorAll('.del')

// Array.from(deleteBtn).forEach((el)=>{
//   el.addEventListener('click', deleteList)
// })

// async function deleteList(){
//   const todoId = this.parentNode.dataset.id
//   try{
//       const response = await fetch('/todos/deleteTodo', {
//           method: 'delete',
//           headers: {'Content-type': 'application/json'},
//           body: JSON.stringify({
//               'todoIdFromJSFile': todoId
//           })
//       })
//       const data = await response.json()
//       console.log(data)
//       location.reload()
//   }catch(err){
//       console.log(err)
//   }
// }