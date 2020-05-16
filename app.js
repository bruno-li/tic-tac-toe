const container = document.querySelector('.container');

container.addEventListener('click', (event) => {
	let target = event.target;
	if (target.className === 'board') {
		// console.log(target.dataset.value);
		human.selection.push(target.dataset.value);
		target.textContent = 'O';
		computerSelection();
		// console.log(`human ${target.dataset.value}`);
		// console.log(human.selection);
	}
});

const computerSelection = () => {
	let choices = document.querySelectorAll('.board');
	let randomSelection = Math.floor(Math.random() * 9) + 1;
	// randomSelection.toString();
	[ ...choices ].filter((choice) => {
		if (choice.dataset.value.includes(randomSelection)) {
			choice.textContent = 'X';
		}
	});
	// console.log(`computer ${randomSelection}`);
};

const players = (name) => {
	const selection = [];
	return { name, selection };
};

const human = players('human');

console.log(human);
const ai = players('ai');
