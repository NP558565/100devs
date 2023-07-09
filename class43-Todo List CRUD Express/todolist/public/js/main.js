document.querySelector('.clearList').addEventListener('click', deleteList)
const listItems = document.querySelectorAll('.listItems>li')

listItems.forEach(item => item.addEventListener('click', toggleTask))

async function deleteList()
{
    const response = await fetch('/clearList', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })

    const data = await response.json()
    console.log(data)
    location.reload()
}

async function toggleTask()
{
    const isTaskDone = !this.classList.contains('done')
    const response = await fetch('/toggleTask', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            task : this.textContent.trim(),
            isDone : isTaskDone
        })
    })

    const data = await response.json()
    console.log(data)
    location.reload()
}