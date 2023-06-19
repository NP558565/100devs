document.querySelector('button').addEventListener('click', getRapName)



async function getRapName()
{
  const rapName = document.querySelector('input').value
  try{
    const res = await fetch(`http://localhost:8000/api/rappers/${rapName}`)
    const data = await res.json()

    document.querySelector('h2').textContent = 'Result: ' + data.birthName
  }catch(err)
  {
    console.log(err)
  }

}
