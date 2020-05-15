const container = document.querySelector('.container');

container.addEventListener('click', (event) => {
	let target = event.target;
	console.dir(target);
	console.log(target.dataset.value);
});
