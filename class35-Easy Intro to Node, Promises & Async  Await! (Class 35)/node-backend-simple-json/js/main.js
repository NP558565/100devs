document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  try {
  const userName = document.querySelector("#userName").value;
  const res = await fetch(`/api?student=${userName}`)
  const data = await res.json()
  } catch(err) {
    console.log(err);
    //Display an error message to the user
    return;
  }

  console.log(data);
  document.querySelector("#personName").textContent = data.name
  document.querySelector("#personStatus").textContent = data.status
  document.querySelector("#personOccupation").textContent = data.currentOccupation
}