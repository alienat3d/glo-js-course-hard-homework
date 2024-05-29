'use strict';

/* 
1) Создать массив week и записать в него дни недели в виде строк
Вывести на экран все дни недели
Каждый из них с новой строчки
Выходные дни - курсивом
Текущий день - жирным шрифтом(использовать объект даты)
*/

// * ==================== Усложнённое задание ==================== * \\

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const date = new Date();
const weekdayToday = date.getDay();
let weekDays = [];

for (const item of week) {
	weekDays.push(item);
}

weekDays.forEach(function(weekday, index) {
	const div = document.createElement('div');
	
	div.textContent = weekday;

	if (weekday === 'Суббота' || weekday === 'Воскресенье' ) {
		div.style.fontStyle = 'italic';
	}
	if (index + 1 === weekdayToday) {
		div.style.fontWeight = 700;
	}

	document.body.appendChild(div);
});
