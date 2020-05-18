const container = document.querySelector('.container');
let winning = [
	[ '1', '2', '3' ],
	[ '4', '5', '6' ],
	[ '7', '8', '9' ],
	[ '1', '4', '7' ],
	[ '2', '5', '8' ],
	[ '3', '6', '9' ],
	[ '1', '5', '9' ],
	[ '3', '5', '7' ]
];

const selectSquare = () => {
	let target = event.target;

	if (target.className === 'board') {
		human.selection.push(target.dataset.value);
		target.innerHTML = `<span>O</span>`;
		removeItemSelected(parseInt(target.dataset.value));
		computerSelection();
		target.classList.add('selected');
		if (checkWinner()) console.log('win');
	}
};

const computerSelection = () => {
	let choices = document.querySelectorAll('.board');
	// select a random item from the board
	var randomPick = board.boardItems[Math.floor(Math.random() * board.boardItems.length)];

	// push the selected item to AI selection and remove from the main board
	[ ...choices ].filter((choice) => {
		if (choice.dataset.value.includes(randomPick)) {
			ai.selection.push(choice.dataset.value);
			choice.innerHTML = `<span>X</span>`;
			removeItemSelected(parseInt(choice.dataset.value));
			choice.classList.add('selected');
		}
	});
};

// remove the selected item from board
const removeItemSelected = (item) => {
	let index = board.boardItems.indexOf(item);
	if (index > -1) {
		board.boardItems.splice(index, 1);
	}
};

const checkWinner = () => {
	return winning.some((winningArray) => winningArray.every((e) => human.selection.includes(e)));
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
