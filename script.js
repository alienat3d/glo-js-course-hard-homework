'use strict';
/* 
1) Если пользователь введет одинаковый ответ на вопрос "Какой дополнительный тип услуги нужен?" то необходимо не перезаписывать, а сохранять оба ответа в appData.services, добавить каждому названию ключа уникальность!

2) Посчитать свойство appData.screenPrice методом reduce
*/
const appData = {
	ROLLBACK: 5,
	title: '',
	screens: [],
	screenPrice: 0,
	adaptive: true,
	allServicePrices: 0,
	fullPrice: 0,
	servicePercentPrice: 0,
	services: {},
	ask: function () {
		do {
			appData.title = prompt('Как называется ваш проект?', ' КаЛьКулятор Верстки');
		} while (appData.isNumber(appData.title));

		for (let i = 0; i < 2; i++) {
			let name = '';
			let price = 0;

			do {
				name = prompt('Какие типы экранов нужно разработать?');
			} while (appData.isNumber(name));

			do {
				price = prompt('Сколько будет стоить данная работа? (₽)');
			} while (!appData.isNumber(price));

			appData.screens.push({ id: i, name, price });
		}

		for (let i = 1; i < 3; i++) {
			let name = '';
			let price = 0;

			do {
				const answer = prompt('Какой дополнительный тип услуги нужен?');
				// [1]
				if (appData.services[answer]) {
					name = answer + '-' + i;
				} else {
					name = answer;
				}
			} while (appData.isNumber(name));

			do {
				price = prompt('Сколько будет стоить данная работа? (₽)');
			} while (!appData.isNumber(price));

			appData.services[name] = +price;
		}
	},
	addPrices: function () {
		// for (const screen of appData.screens) {
		// 	appData.screenPrice += +screen.price;
		// }
		// [2]
		appData.screenPrice = appData.screens.reduce(function(sum, item) {
			return sum + +item.price;
		}, 0)

		for (const price in appData.services) {
			appData.allServicePrices += appData.services[price];
		}
	},
	isNumber: function (num) {
		return !isNaN(parseFloat(num)) && isFinite(num);
	},
	getFullPrice: function () {
		appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
	},
	getTitle: function () {
		appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLowerCase();
	},
	getServicePercentPrice: function () {
		appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.ROLLBACK / 100));
	},
	getRollbackMessage: function (price) {
		if (price >= 30000) {
			return "Даем скидку в 10%";
		} else if (price >= 15000 && price < 30000) {
			return "Даем скидку в 5%";
		} else if (price >= 0 && price < 15000) {
			return "Скидка не предусмотрена";
		} else {
			return "Что-то пошло не так";
		}
	},
	start: function () {
		appData.ask();
		appData.addPrices();
		appData.getFullPrice();
		appData.getServicePercentPrice();
		appData.getTitle();
		appData.logger();
	},
	logger: function () {
		console.log(appData.fullPrice);
		console.log(appData.servicePercentPrice);
		console.log(appData.screens);
	}
}

appData.start();