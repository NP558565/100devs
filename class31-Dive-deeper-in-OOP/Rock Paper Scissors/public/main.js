//Create a button
//Make the button delete all of the outcomes

const deleteButton = document.querySelector('#delete-button')

deleteButton.addEventListener('click', _ => {
    fetch('/rng', {
        method: 'delete',
        headers: { 'Content-Type': 'application./json' },
        //You don't need to send a body, you just need to send a delete request.
        })
    })
    .then(res => {
        if (res.ok) return res
    })
    .then(data => {
        window.location.reload()
    })
