let arr = ["C++ ", "Java ", "JS ", "Ruby ", "Python "];

//     Print the array before moving
console.log("Original array: " + arr);

// Position where from the element is 
// going to move here 'Ruby' is moved 
let elemIdx = 3;

// Position at which element is to be moved 
// here 'Ruby' is moved to  index 1 which is 
// index of 'Java'
let moveToIdx = 1;

// If actual index of moved element is 
// less than 0 when 'moveEle += array size'
while (elemIdx < 0) {
	elemIdx += arr.length;
}

// Where the element to be moved f that 
// index is less than 0 when 
// 'moveToIndx += array size'
while (moveToIdx < 0) {
	moveToIdx = moveToIdx + arr.length;
}

// If 'moveToIndx' is greater than the 
// size of the array then with need to 
// push 'undefined' in the array.
if (moveToIdx >= arr.length) {
	let un = moveToIdx - arr.length + 1;
	while (un--) {
			arr.push(undefined);
	}
}
// Here element of 'moveEle' is removed and 
// pushed at 'moveToIndx' index
arr.splice(moveToIdx, 0, arr.splice(elemIdx, 1));

// Print the array after moving
console.log("After move: " + arr);