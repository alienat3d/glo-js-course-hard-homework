'use strict';
/* 
1) Выведите на страницу текущую дату и время в 2-х форматах:
	a) 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'
	б) '04.02.2020 - 21:05:33'
2) Для вывода в формате (а) напишите функцию, которая будет менять склонение слов в зависимости от числа, "час, часов, часа"
3) Для вывода в формате (б) напишите функцию, которая будет добавлять 0 перед значениями которые состоят из одной цифры (из 9:5:3 1.6.2019 сделает 09:05:03 01.06.2019)
4) С помощью функции setInterval, реализуйте обновление даты и времени каждую секунду
*/

const fullDateBlock = document.getElementById('full-date');
const compactDateBlock = document.getElementById('compact-date');
const date = new Date();
const dayNum = date.getDay();
const dateNum = date.getDate();
const monthNum = date.getMonth();
const yearNum = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayNamesArray = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
const monthNamesArray = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
const wordHoursArray = ['час', 'часа', 'часов'];
const wordMinutesArray = ['минута', 'минуты', 'минут'];
const wordSecondsArray = ['секунда', 'секунды', 'секунд'];

// console.log(seconds);

let currentDayName = '';
let currentMonthName = '';

/* const getProperName = (array, ref, variable) => {
	array.forEach((item, idx) => {
		if (idx === ref) {
			variable = item;
		}
	});
} */
// getProperName(dayNamesArray, dayNum, currentDayName);

dayNamesArray.forEach((item, idx) => {
	if (idx === dayNum) {
		currentDayName = item;
	}
});

monthNamesArray.forEach((item, idx) => {
	if (idx === monthNum) {
		currentMonthName = item;
	}
});

console.log(currentMonthName);
/* currentDayName = getProperName(dayNamesArray, dayNum);
currentMonthName = getProperName(monthNamesArray, monthNum); */
// console.log(currentDayName);

fullDateBlock.textContent = 'Сегодня ' + currentDayName + ', ' + dateNum + ' ' + currentMonthName + ' ' + yearNum + ' года, ' + hours + ' час ' + minutes + ' минут ' + seconds + ' секунды';