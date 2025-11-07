
const searchBarElement = document.querySelector('input#search-bar')
const searchResetButtonElement = document.querySelector('button#search-reset')
const skillsListElement = document.querySelector('#skills-list')
const skillsSublists = skillsListElement.querySelectorAll('ul.skills')



const searchBarInputListener = _ => {
	let search = searchBarElement.value.toLowerCase()
	skillsSublists.forEach(sublist => {
		sublist.childNodes.forEach(listElement =>
			listElement.classList.toggle('hidden', listElement.innerText.toLowerCase().search(search) < 0))
	})
}
searchBarElement.addEventListener('input', searchBarInputListener)
searchResetButtonElement.addEventListener('click', _ => {
	searchBarElement.value = ""
	searchBarInputListener()
})