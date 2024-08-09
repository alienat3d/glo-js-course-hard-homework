'use strict';

const SERVER_URL = 'https://jsonplaceholder.typicode.com/posts';
// const SERVER_URL = 'http://localhost:3000/posts';
const LOCAL_DB = 'db/db.json';

const btn = document.querySelector('button');

const getData = (LOCAL_DB) =>
	fetch(LOCAL_DB)
		.then(res => {
			if (res.status === 200) {
				return res.json();
			} else {
				throw new Error("Произошла ошибка, данные не были найдены!");
			}
		})
		.then(data => sendData('POST', SERVER_URL, data))
		.catch(err => console.warn(err));

/* function sendData(url, data) {
	fetch(url, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json'
		},
	})
		.then(res => {
		if (res.status === 201) {
			return res.json();
		} else {
			throw new Error("Произошла ошибка, данные не были сохранены!");
		}
	})
		.catch(err => console.warn(err));
} */

const sendData = (method, url, data) => {
	const xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	xhr.send(JSON.stringify(data));
	xhr.onload = function () {
		if (xhr.status !== 201) {
			alert( 'Ошибка: ' + xhr.status);
			return;
		}
		
		const responseObj = xhr.response;
		console.log(responseObj);
	};
	xhr.onerror = function() {
		console.error("Упс, кажется не удаётся подключиться к серверу...");
	};
}


btn.addEventListener('click', () => getData(LOCAL_DB));