'use strict';

/* 
1) Создать массив arr = []
— Записать в него 7 любых многозначных чисел в виде строк
— Вывести в консоль только те, что начинаются с цифры 2 или 4 (Должны присутствовать в массиве)

2) Вывести в столбик все простые числа от 1 до 100 (сделать при помощи цикла)
— Рядом с каждым числом написать оба делителя данного числа
	Например: “Делители этого числа: 1 и n” 
*/

// * ==================== Усложнённое задание №2/1 ==================== * \\

const arr = ['11', '22', '33', '44', '55', '66', '77'];

for (let i = 0; i < arr.length; i++) {
	const firstLetter = arr[i][0];
	if (firstLetter === '2' || firstLetter === '4') {
		console.log(arr[i]);
	}
}

// * ==================== Усложнённое задание №2/2 ==================== * \\

function isPrime(num) {
	if (num <= 1) return false;
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) return false;
	}
	return true;
}

function printPrimes(limit) {
	let primes = `Простые числа от 1 до ${limit}:\n`;
	for (let i = 1; i <= limit; i++) {
		if (isPrime(i)) {
			primes += `${i} (Делители этого числа: 1 и ${i})\n`
		}
	}

	return primes;
}
console.log(printPrimes(100));