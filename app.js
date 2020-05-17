const container = document.querySelector('.container');

const selectSquare = () => {
	let target = event.target;

	if (target.className === 'board') {
		// console.dir(target);
		human.selection.push(target.dataset.value);
		target.textContent = 'O';
		removeItemSelected(parseInt(target.dataset.value));
		computerSelection();
		console.log(`human ${human.selection}`);
		target.classList.add('selected');
		console.dir(target);
	}
};

const removeItemSelected = (item) => {
	console.log(`remove ${item}`);
	let index = board.boardItems.indexOf(item);
	if (index > -1) {
		board.boardItems.splice(index, 1);
	}
	console.log(board.boardItems);
};

const computerSelection = () => {
	let choices = document.querySelectorAll('.board');
	var randomPick = board.boardItems[Math.floor(Math.random() * board.boardItems.length)];

	[ ...choices ].filter((choice) => {
		if (choice.dataset.value.includes(randomPick)) {
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

const board = {
	boardItems: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
};

container.addEventListener('click', selectSquare);

const human = players('human');
const computer = players('ai');
const ai = players('ai');
