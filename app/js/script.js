'use strict';
/* 
[✓] 1. Сделать так, чтоб после нажатия на кнопку Рассчитать изменение значения input[type=range] меняло и сумму в поле с подписью "Стоимость с учетом отката". Сумма должна пересчитываться с учетом реального значения процента отката. Проверить чтоб значение не менялось до расчета, только после расчета.
*/

const title = document.getElementsByTagName('h1')[0];
const startBtn = document.querySelector('#start');
const resetBtn = document.querySelector('#reset');
const plusBtn = document.querySelector('.screen-btn');
const optionPercentCheckboxes = document.querySelectorAll('.other-items.percent');
const optionNumCheckboxes = document.querySelectorAll('.other-items.number');
const rollbackController = document.querySelector('.rollback input');
const rollbackControllerValue = document.querySelector('.rollback .range-value');
const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen');
let screenSelects = screens[0].querySelectorAll('select');
let screenInputs = screens[0].querySelectorAll('input');

const appData = {
	title: '',
	screens: [],
	screensCount: 0,
	screenPrice: 0,
	adaptive: true,
	servicePricesPercent: 0,
	servicePricesNumber: 0,
	rollback: 0,
	fullPrice: 0,
	servicePercentPrice: 0,
	servicesPercent: {},
	servicesNumber: {},
	init() {
		appData.addTitle();
		startBtn.addEventListener('click', () => {
			if (appData.checkFields(screenSelects, screenInputs)) appData.start();
		});
		plusBtn.addEventListener('click', appData.addScreenBlock);
		// == [1] ==
		rollbackController.addEventListener('input', appData.operateRangeInput);
		// == / [1] ==
	},
	addTitle: function () {
		document.title = title.textContent;
	},
	isNumber: function (num) {
		return !isNaN(parseFloat(num)) && isFinite(num);
	},
	checkFields: function (selects, inputs) {
		let error = false;

		inputs.forEach(input => {
			if (input.value === '' || input.value <= 0 || !appData.isNumber(input.value)) error = true;
		});

		selects.forEach(select => {
			if (select.selectedIndex === 0) error = true;
		});

		return !error;
	},
	// == [1] ==
	operateRangeInput: function () {
		rollbackControllerValue.textContent = rollbackController.value + ' %';
		appData.rollback = +rollbackController.value;
		appData.servicePercentPrice = Math.round(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
		totalCountRollback.value = appData.servicePercentPrice;
	},
	// == / [1] ==
	start: function () {
		appData.addScreens();
		appData.addServices();
		appData.addPrices();
		appData.showResult();
		// appData.logger();
	},
	showResult: function () {
		total.value = appData.screenPrice;
		totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
		fullTotalCount.value = appData.fullPrice;
		totalCountRollback.value = appData.servicePercentPrice;
		totalCount.value = appData.screensCount;
	},
	addScreens: function () {
		screens = document.querySelectorAll('.screen');

		screens.forEach(function (screen, index) {
			const select = screen.querySelector('select');
			const input = screen.querySelector('input');
			const selectName = select.options[select.selectedIndex].textContent;

			appData.screens.push({
				id: index,
				name: selectName,
				price: select.value * +input.value,
				count: +input.value
			});
		});
	},
	addScreenBlock: function () {
		const cloneScreen = screens[0].cloneNode(true);
		cloneScreen.querySelector('input').value = '';
		plusBtn.insertAdjacentElement('beforebegin', cloneScreen);

		screens = document.querySelectorAll('.screen');
		screenSelects = document.querySelectorAll('.screen select');
		screenInputs = document.querySelectorAll('.screen input');
	},
	addServices: function () {
		optionPercentCheckboxes.forEach(function (item) {
			const checkbox = item.querySelector('input[type=checkbox]');
			const label = item.querySelector('label');
			const input = item.querySelector('input[type=text]');

			if (checkbox.checked) appData.servicesPercent[label.textContent] = +input.value;
		});

		optionNumCheckboxes.forEach(function (item) {
			const checkbox = item.querySelector('input[type=checkbox]');
			const label = item.querySelector('label');
			const input = item.querySelector('input[type=text]');

			if (checkbox.checked) appData.servicesNumber[label.textContent] = +input.value;
		});
	},
	addPrices: function () {
		appData.screenPrice = appData.screens.reduce(function (sum, item) {
			return sum + +item.price;
		}, 0)

		appData.screensCount = appData.screens.reduce(function (sum, item) {
			return sum + +item.count;
		}, 0)

		for (const key in appData.servicesNumber) {
			appData.servicePricesNumber += appData.servicesNumber[key];
		}

		for (const key in appData.servicesPercent) {
			appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
		}

		appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;

		appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
	},
	// getRollbackMessage: function (price) {
	// 	if (price >= 30000) {
	// 		return "Даем скидку в 10%";
	// 	} else if (price >= 15000 && price < 30000) {
	// 		return "Даем скидку в 5%";
	// 	} else if (price >= 0 && price < 15000) {
	// 		return "Скидка не предусмотрена";
	// 	} else {
	// 		return "Что-то пошло не так";
	// 	}
	// },
	logger: function () {
		// console.log('click');
	}
}

appData.init();