'use strict';

// [✓] Добавлять новые элементы с текстом из инпута

const list = document.querySelector('.list');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
	const li = document.createElement('li');
	li.textContent = input.value;
	list.append(li);
})