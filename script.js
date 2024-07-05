'use strict';

const input = document.getElementById('input');
const output = document.getElementById('output');

const handleInput = () => output.textContent = input.value;

function debounce(callee, timeoutMs) {
	return function perform(...args) {
		let previousCall = this.lastCall;

		this.lastCall = Date.now();

		if (previousCall && this.lastCall - previousCall <= timeoutMs) {
			clearTimeout(this.lastCallTimer);
		}

		this.lastCallTimer = setTimeout(() => callee(...args), timeoutMs);
	}
}

const debouncedHandle = debounce(handleInput, 300);

input.addEventListener('input', debouncedHandle);