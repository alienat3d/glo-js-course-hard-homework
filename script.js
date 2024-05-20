'use strict';
/* 
1). Переменная lang может принимать 2 значения: 'ru' 'en'.
Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. Решите задачу
	a) через if,
	b) через switch-case
	c) через многомерный массив без if'ов и switch’ей.
*/
const htmlTag = document.querySelector('html');
const languageSwitchBtn = htmlTag.querySelector('.language-switcher');

let currentLanguage = htmlTag.getAttribute('lang');

const switchLanguage = function () {
	currentLanguage === 'ru' ? htmlTag.setAttribute('lang', 'en')
		: htmlTag.setAttribute('lang', 'ru');

	currentLanguage = htmlTag.getAttribute('lang');

	let langsArray = [];
	langsArray.ru = [
		'Понедельник\n',
		'\tВторник\n',
		'\t\tСреда\n',
		'\t\t\tЧетверг\n',
		'\t\t\t\tПятница\n',
		'\t\t\t\t\tСуббота\n',
		'\t\t\t\t\t\tВоскресенье'];
	langsArray.en = ['Monday\n',
		'\tTuesday\n',
		'\t\tWednesday\n',
		'\t\t\tThursday\n',
		'\t\t\t\tFriday\n',
		'\t\t\t\t\tSaturday\n',
		'\t\t\t\t\t\tSunday'];

	console.clear();
	console.log(langsArray[currentLanguage].join(''));
	/* switch (currentLanguage) {
		case 'ru':
			console.log(
				'Понедельник\n' +
				'\tВторник\n' +
				'\t\tСреда\n' +
				'\t\t\tЧетверг\n' +
				'\t\t\t\tПятница\n' +
				'\t\t\t\t\tСуббота\n' +
				'\t\t\t\t\t\tВоскресенье');
			break;
		case 'en':
			console.log(
				'Monday\n' +
				'\tTuesday\n' +
				'\t\tWednesday\n' +
				'\t\t\tThursday\n' +
				'\t\t\t\tFriday\n' +
				'\t\t\t\t\tSaturday\n' +
				'\t\t\t\t\t\tSunday'); 
	}
	*/
	/* 
	if (currentLanguage === 'ru') {
		console.log(
			'Понедельник\n' + 
			'\tВторник\n' + 
			'\t\tСреда\n' + 
			'\t\t\tЧетверг\n' + 
			'\t\t\t\tПятница\n' + 
			'\t\t\t\t\tСуббота\n' + 
			'\t\t\t\t\t\tВоскресенье');
	} else {
		console.log(
			'Monday\n' + 
			'\tTuesday\n' + 
			'\t\tWednesday\n' + 
			'\t\t\tThursday\n' + 
			'\t\t\t\tFriday\n' + 
			'\t\t\t\t\tSaturday\n' + 
			'\t\t\t\t\t\tSunday');
	} 
*/
}

languageSwitchBtn.addEventListener('click', switchLanguage);

// * ======================== * \\

/* 2). У нас есть переменная namePerson. Если значение этой переменной “Артём” то вывести в консоль “директор”, если значение “Александр” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”
	Решить задачу с помощью нескольких тернарных операторов, без использования if или switch  */

let namePerson;

namePerson = 'Александр';

namePerson === 'Артём' ? console.log('директор') :
	namePerson === 'Александр'
		? console.log('преподаватель') :
		console.log('студент');