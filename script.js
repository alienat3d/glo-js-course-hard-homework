'use strict';
/*
[✓] 1.Написать скрипт, который заменяет слово "функция" и его однокоренные слова в div с id=task1 на «<strong>функция</strong>». 

[✓] 2. Написать скрипт который в div с id=task2 найдет время. Время имеет формат часы:минуты. И часы, и минуты состоят из двух цифр, пример: 09:00.
заключить найденное время в тег <b></b>

[] 3. Создать запрос во всем документе найти текст в кавычках и заключить его в теги <mark></mark>

[] 4. Замените в документе домены вида http://site.ru на <a href="http://site.ru">site.ru</a>, 

[] 5. Напишите регулярное выражение для поиска цвета, заданного как #ABCDEF, вывести цвет в консоль

[] 6. Ссылки такого вида http://site.ru/aaaa/bbbb.html заменить
на <a href="http://site.ru/aaaa/bbbb.html">site.ru</a>
*/

const taskBlock1 = document.getElementById('task1');
const taskBlock2 = document.getElementById('task2');

const addTagStrong = () => {
	taskBlock1.innerHTML = taskBlock1.innerHTML.replace(/функ[а-я]+/gi, str => {
		return `<strong>${str}</strong>`;
	});
}
const addTagB = () => {
	taskBlock2.innerHTML = taskBlock2.innerHTML.replace(/\b\d\d:\d\d/g, str => {
		return `<b>${str}</b>`;
	});
}

addTagStrong();
addTagB();