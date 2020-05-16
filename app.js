const container = document.querySelector('.container');

const selectSquare = () => {
	let target = event.target;

	if (target.className === 'board') {
		// console.dir(target);
		human.selection.push(target.dataset.value);
		target.textContent = 'O';
		computerSelection();
		console.log(`human ${human.selection}`);
		target.classList.add('selected');
		console.dir(target);
	}
};

const computerSelection = () => {
	let choices = document.querySelectorAll('.board');
	let randomSelection = Math.floor(Math.random() * 9) + 1;
	[ ...choices ].filter((choice) => {
		if (choice.dataset.value.includes(randomSelection)) {
			console.log(choice);
			choice.textContent = 'X';
			ai.selection.push(choice.dataset.value);
			console.log(`AI ${ai.selection}`);
			choice.classList.add('selected');
		}
	});
};

const players = (name) => {
	const selection = [];
	return { name, selection };
};

container.addEventListener('click', selectSquare);

const human = players('human');
const computer = players('ai');
const ai = players('ai');
