'use strict';

/* Калькулятор:
Решить задачу, где возможно использовать this. В объект можно добавлять свои свойства.
Есть объект calculator с тремя методами:
sum() возвращает сумму этих двух значений
mult() возвращает произведение этих двух значений
show() выводит результат вычислений в инпут ".res" объекта
*/
const firstInput = document.getElementById('a');
const secondInput = document.getElementById('b');
const sumBtn = document.getElementById('sum');
const multBtn = document.getElementById('mult');
const result = document.getElementById('res');

const calculator = {
	result: result,
	sum: function (a, b) {
		const result = a + b;
		show(result);
	},
	mult: function (a, b) {
		const result = a * b;
		this.show(result);
	},
	show: function (res) {
		result.value = res;
	}
}

sumBtn.addEventListener('click', () => {
	calculator.sum(firstInput.value, secondInput.value);
})

multBtn.addEventListener('click', () => {
	calculator.mult(firstInput.value, secondInput.value);
})