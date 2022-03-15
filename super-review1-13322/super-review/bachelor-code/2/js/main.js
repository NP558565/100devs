const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')

document.querySelector('#andiNext').addEventListener('click', andiNext) 
document.querySelector('#claireNext').addEventListener('click', claireNext) 
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

function andiNext(){
	claire.classList.add('hidden') /*INSERTCODE*/
	sharleen.classList.add('hidden') /*INSERTCODE*/
	andi.classList.toggle('hidden') /*INSERTCODE*/
}

function claireNext(){
	andi.classList.add('hidden') /*INSERTCODE*/
	sharleen.classList.add('hidden') /*INSERTCODE*/
	claire.classList.toggle('hidden') /*INSERTCODE*/
}

function sharleenNext(){
	clare.classList.add('hidden') /*INSERTCODE*/
	andi.classList.add('hidden')/*INSERTCODE*/
	sharleen.classList.toggle('hidden') /*INSERTCODE*/
}

/*code has been inserted*/
