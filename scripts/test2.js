'use strict';

const input = ["a", "b", "c"];

const expected = ["b", "c", "a"];

function move(input, from, to) {
  let numberOfDeletedElm = 0;

  const elm = input.splice(from, numberOfDeletedElm)[0];
	console.log(elm);
	numberOfDeletedElm = 1;

  const result = input.splice(to, numberOfDeletedElm, elm);
	return result;
}

const result = move(input, 0, 2);
console.log(result)

