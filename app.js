const container = document.querySelector('.container');

container.addEventListener('click', (event) => {
	let target = event.target;
	if (target.className === 'board') {
		console.log(target.dataset.value);
	}
});
