// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers
console.log(Math.max(numbers));

// Find longest string in strings
let arr = [];
var n = 0;
var str = "";
strings.forEach(function(i) {
	if (i.length > n) {
		n = i.length;
		str = i;
	}
});
console.log(str);

// Find all the even numbers
let arr = [];
numbers.forEach(function(i) {
	if (i % 2 == 0) {
		arr.push(i);
	}
});
console.log(arr);

// Find all the odd numbers
let arr = [];
numbers.forEach(function(i) {
	if (i % 2 != 0) {
		arr.push(i);
	}
});
console.log(arr);

// Find all the words that contain 'is' use string method 'includes'

// Find all the words that contain 'is' use string method 'indexOf'
function wordCounter(s, word) {
	let count = s.indexOf(word);
	//     count++;
	//   }
	return count;
}

console.log(wordCounter(strings.join(" "), "is"));

// Check if all the numbers in numbers array are divisible by three use array method (every)
let arr = [];
numbers.forEach(function(i) {
	if (i % 3 == 0) {
		arr.push(i);
	}
});
console.log(arr);

//  Sort Array from smallest to largest

console.log(numbers.sort((a, b) => a - b));

// Remove the last word in strings
numbers.pop();
console.log(numbers);
// Add a new word in the array
numbers.push(31);
console.log(numbers);

// Remove the first word in the array
numbers.shift();
console.log(numbers);

// Place a new word at the start of the array use (unshift)
numbers.unshift(2);
console.log(numbers);

// Make a subset of numbers array [18,9,7,11]
console.log(numbers.slice(3, 7));

// Make a subset of strings array ['a','collection']

console.log(strings.slice(2, 4));

// Replace 12 & 18 with 1221 and 1881

numbers[numbers.indexOf(12)] = 1221;
numbers[numbers.indexOf(18)] = 1881;
console.log(numbers);

// Replace words with string in strings array
console.log(strings.replace("collection", "array"));

// Customers Array
var customers = [
	{ firstname: "Joe", lastname: "Blogs" },
	{ firstname: "John", lastname: "Smith" },
	{ firstname: "Dave", lastname: "Jones" },
	{ firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'

var firstnamewithJ = customers.filter(i => i.firstname.startsWith("J"));

// Create new array with firstname and lastname

let arr = [];
customers.forEach(function(i) {
	arr.push(`${i.firstname} + ${i.lastname}`);
});

// Sort the array created above alphabetically
arr.sort();
