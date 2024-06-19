'use strict';
/* 
[✓] 1) Используя функцию-конструктор DomElement из основного задания №1, создать квадрат 100 на 100 пикселей. Ему необходимо задать фон(background) любого цвета и свойство position: absolute.
[✓] 2) Поместить его на страницу только после выполнения события DOMContentLoaded. Внутри тега body должно быть только подключение скрипта. (В случае подключения файла скрипта к странице перед закрывающим тэгом body)
[✓] 3) Написать обработчик события для keydown, который будет принимать callback-функцию. Данная функция будет отлавливать нажатие на стрелки клавиатуры. В зависимости от нажатой кнопки(Вверх - стрелка вверх, Влево - стрелка влево, Вправо - стрелка вправо, Вниз - стрелка вниз) наш квадрат будет перемещаться на 10 пикселей при каждом нажатии.
*/
const DomElement = function (selector, height, width, bg, fontSize, text, position) {
	this.selector = selector;
	this.height = height;
	this.width = width;
	this.bg = bg;
	this.fontSize = fontSize;
	this.text = text;
	this.position = position;

	this.createElem = function () {
		const prefixSelector = this.selector.slice(0, 1);
		const mainElem = document.querySelector('main');
		let element;

		if (prefixSelector === '.') {
			element = document.createElement('div');
			element.classList.add(this.selector.substring(1));
		} else if (prefixSelector === '#') {
			element = document.createElement('p');
			element.setAttribute('id', this.selector.substring(1));
		} else {
			console.error('Проверьте селектор, разрешены для ввода только класс (".") и id ("#")');
		}

		element.style.cssText = `
			height: ${this.height};
			width: ${this.width};
			background: ${this.bg};
			font-size: ${this.fontSize};
			position: ${this.position};
		`;

		element.textContent = this.text;

		mainElem.append(element);
	}
}

const newDivElement = new DomElement('.some-block', '100px', '100px', 'yellow', '20px', 'The quick brown fox jumps over the lazy dog', 'absolute');

document.addEventListener('DOMContentLoaded', () => {
	newDivElement.createElem();

	const elem = document.querySelector('.some-block');

	let elemYPosition = 0;
	let elemXPosition = 0;

	window.addEventListener('keydown', function (evt) {
		switch (true) {
			case evt.key === 'ArrowDown':
				console.log('You pressed "↓" key');
				elemYPosition = parseInt(elemYPosition) + 10 + 'px';
				elem.style.top = elemYPosition;
				break;
			case evt.key === 'ArrowUp':
				console.log('You pressed "↑" key');
				elemYPosition = parseInt(elemYPosition) - 10 + 'px';
				elem.style.top = elemYPosition;
				break;
			case evt.key === 'ArrowLeft':
				console.log('You pressed "←" key');
				elemXPosition = parseInt(elemXPosition) - 10 + 'px';
				elem.style.left = elemXPosition;
				break;
			case evt.key === 'ArrowRight':
				console.log('You pressed "→" key');
				elemXPosition = parseInt(elemXPosition) + 10 + 'px';
				elem.style.left = elemXPosition;
				break;
			default:
				console.warn('Нажмите на одну из кнопок-стрелок на клавиатуре');
				break;
		}
	})
});
