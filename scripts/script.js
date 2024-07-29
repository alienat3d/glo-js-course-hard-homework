'use strict';

const gameBody = document.querySelector('.square-body');
let blocks = gameBody.querySelectorAll('.block');
const resetBtn = document.querySelector('.btn-reset');

const initialBlocksArray = [...blocks];
let blocksArray = [...blocks];

const swap = (arr, a, b) => arr[a] = arr.splice(b, 1, arr[a])[0];

const addClickListeners = () => {
	blocks.forEach((block, idx) => {

		block.addEventListener('click', (evt) => {
			const tgt = evt.target;

			if (tgt.closest('.top') && idx > 4) {
				swap(blocksArray, idx, idx - 5);
				render();
			} else if (tgt.closest('.right') &&
				idx !== 4 &&
				idx !== 9 &&
				idx !== 14 &&
				idx !== 19 &&
				idx !== 24) {
				swap(blocksArray, idx, idx + 1);
				render();
			} else if (tgt.closest('.bottom') && idx < 20) {
				swap(blocksArray, idx, idx + 5);
				render();
			} else if (tgt.closest('.left') &&
				idx !== 0 &&
				idx !== 5 &&
				idx !== 10 &&
				idx !== 15 &&
				idx !== 20) {
				swap(blocksArray, idx, idx - 1);
				render();
			}
		})
	});
}

const render = () => {
	gameBody.innerHTML = '';

	blocksArray.forEach(block => {
		gameBody.insertAdjacentHTML('beforeend', `
			<div class="block">
				<div class="block-number">${block.querySelector('.block-number').textContent}</div>
				<div class="block-btn">
					<div class="arrow left"><img src="img/arrow-left.svg" alt=""></div>
					<div class="arrow right"><img src="img/arrow-right.svg" alt=""></div>
					<div class="arrow top"><img src="img/arrow-up.svg" alt=""></div>
					<div class="arrow bottom"><img src="img/arrow-down.svg" alt=""></div>
				</div>
			</div>
		`);
	});

	blocks = gameBody.querySelectorAll('.block');

	addClickListeners();
}

resetBtn.addEventListener('click', () => {
	gameBody.innerHTML = '';
	initialBlocksArray.forEach((block, idx) => {
		gameBody.insertAdjacentHTML('beforeend', `
			<div class="block">
				<div class="block-number">${idx + 1}</div>
				<div class="block-btn">
					<div class="arrow left"><img src="img/arrow-left.svg" alt=""></div>
					<div class="arrow right"><img src="img/arrow-right.svg" alt=""></div>
					<div class="arrow top"><img src="img/arrow-up.svg" alt=""></div>
					<div class="arrow bottom"><img src="img/arrow-down.svg" alt=""></div>
				</div>
			</div>
		`);
	});

	blocksArray = initialBlocksArray;

	blocks = gameBody.querySelectorAll('.block');

	addClickListeners();
});

addClickListeners();