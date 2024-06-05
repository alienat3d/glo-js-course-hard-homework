'use strict';
/*
Кол-во попыток пользователя должно быть ограничено: 10

— если пользовательское число больше, то бот выводит "Загаданное число меньше, осталось попыток ..." и предлагает ввести новый вариант;

— если пользовательское число меньше, то бот выводит "Загаданное число больше, осталось попыток ..." и предлагает ввести новый вариант;

— если пользователь вводит правильное число, то бот выводит "Поздравляю, Вы угадали!!! Хотели бы сыграть еще?", при нажатии ОК игра перезапускается (снова 10 попыток и новое загаданное число)

— если пользователь ввел не число, то выводит сообщение "Введи число!" и предлагает ввести новый вариант;

— если пользователь нажимает "Отмена", то игра выводит прощальное сообщение и завершается.

— если закончились попытки то программа сообщает: "Попытки закончились, хотите сыграть еще?"

Программа должны быть выполнена с помощью рекурсии, без единого цикла.

Загаданное число и оставшиеся кол-во попыток должно храниться «в замыкании»
*/

const ROLLBACK = 5;

let title, 
		screens, 
		screenPrice, 
		adaptive, 
		allServicePrices, 
		fullPrice, 
		servicePercentPrice, 
		service1, 
		service2;

// * ==================== Усложнённое задание №1 ==================== * \\
const isNumber = function (num) {
	return !isNaN(parseFloat(num) && isFinite(num));
}

const ask = function () {
	title = prompt('Как называется ваш проект?', ' КаЛьКулятор Верстки');
	screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');

	do {
		screenPrice = +prompt('Сколько будет стоить данная работа? (₽)').trim();
	} while (!isNumber(screenPrice));

	adaptive = confirm('Нужен ли адаптив на сайте?');
}

const getAllServicePrices = function () {
	let servicePrice;
	let sum = 0;

	for (let index = 0; index < 2; index++) {
		if (index === 0) {
			service1 = prompt('Какой дополнительный тип услуги нужен?');
		} else if (index === 1) {
			service2 = prompt('Какой дополнительный тип услуги нужен?');
		}

		do {
			servicePrice = prompt('Сколько будет стоить данная работа? (₽)').trim();
		} while (!isNumber(servicePrice));

		sum += +servicePrice;
	}

	return sum;
}

const showTypeOf = function (variable) {
	console.log(variable, typeof variable);
}

const getFullPrice = function () {
	return screenPrice + allServicePrices;
}

const getServicePercentPrice = function () {
	return fullPrice - (fullPrice * (ROLLBACK / 100));
}

const getTitle = function () {
	if (!title) {
		return console.log('Название проекта не было указано!');
	} else {
		return title.trim()[0].toUpperCase() + title.trim().substring(1).toLowerCase();
	}
}

const getRollbackMessage = function (price) {
		switch (true) {
			case price >= 30000:
				console.log(`Поздравляем! Вы получили от нас скидку 10%! Ваша цена теперь 	составляет ${price - (price * 0.1)}₽!`);
				break;
			case price <= 30000 && price >= 15000:
				console.log(`Поздравляем! Вы получили от нас скидку 5%! Ваша цена теперь 	составляет ${price - (price * 0.05)}₽!`);
				break;
			case price <= 15000 && price >= 0:
				console.log(`Скидка не предусмотрена. Ваша цена ${price}₽.`);
				break;
			case price < 0:
				console.log('Что-то пошло не так...');
				break;
	}
}

// screensVariety = screens.toLowerCase().split(', ');
/* const getRollbackMessage = function (price) {
	if (price >= 30000) {
		return "Даем скидку в 10%";
	} else if (price >= 15000 && price < 30000) {
		return "Даем скидку в 5%";
	} else if (price >= 0 && price < 15000) {
		return "Скидка не предусмотрена";
	} else {
		return "Что-то пошло не так";
	}
} */

ask();

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrice();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log('allServicePrices:', allServicePrices);

console.log(getRollbackMessage(fullPrice));
console.log(screens);
console.log(servicePercentPrice);

console.log(
	'Стоимость верстки экранов ' + screenPrice + ' рублей. \n' +
	'Стоимость разработки сайта ' + fullPrice + ' рублей.'
);