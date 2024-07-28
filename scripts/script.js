'use strict';

const gameBody = document.querySelector('.square-body');
let blocks = gameBody.querySelectorAll('.block');
const blocksArray = [...blocks];

const moveElemInArray = (arr, elem, moveToIdx) => {
	console.log("Original array: " + arr);
	let moveEle = elem;
	let moveToIndex = moveToIdx;
	while (moveEle < 0) {
		moveEle += arr.length;
	}
	while (moveToIndex < 0) {
		moveToIndex = moveToIndex + arr.length;
	}
	if (moveToIndex >= arr.length) {
		let un = moveToIndex - arr.length + 1;
		while (un--) {
				arr.push(undefined);
		}
	}
	arr.splice(moveToIndex, 0, arr.splice(moveEle, 1));
	console.log("After move: " + arr);
}

blocks.forEach((block, idx, arr) => {
	block.addEventListener('click', (evt) => {
		const tgt = evt.target;
		if (tgt.closest('.top')) {
			console.log('move up');
		} else if (tgt.closest('.right')) {
			console.log('move right')
			// moveElemInArray(blocksArray, blocksArray[idx], idx + 1);
			// console.log(blocksArray);
		} else if (tgt.closest('.bottom')) {
			console.log('move bottom')
		} else if (tgt.closest('.left')) {
			console.log('move left')
			moveElemInArray(blocksArray, block, idx - 1);
			console.log(blocksArray);
		}
	})
});

