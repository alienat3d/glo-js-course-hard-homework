let arr = ["C++ ", "Java ", "JS ", "Ruby ", "Python "];

//     Print the array before moving
console.log("Original array: " + arr);

// Position where from the element is 
// going to move here 'Ruby' is moved 
let moveEle = 3;

// Position at which element is to be moved 
// here 'Ruby' is moved to  index 1 which is 
// index of 'Java'
let moveToIndx = 1;

// If actual index of moved element is 
// less than 0 when 'moveEle += array size'
while (moveEle < 0) {
	moveEle += arr.length;
}

// Where the element to be moved f that 
// index is less than 0 when 
// 'moveToIndx += array size'
while (moveToIndx < 0) {
	moveToIndx = moveToIndx + arr.length;
}

// If 'moveToIndx' is greater than the 
// size of the array then with need to 
// push 'undefined' in the array.
if (moveToIndx >= arr.length) {
	let un = moveToIndx - arr.length + 1;
	while (un--) {
			arr.push(undefined);
	}
}
// Here element of 'moveEle' is removed and 
// pushed at 'moveToIndx' index
arr.splice(moveToIndx, 0, arr.splice(moveEle, 1));

// Print the array after moving
console.log("After move: " + arr);