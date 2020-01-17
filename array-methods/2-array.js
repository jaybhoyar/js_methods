var words = [
	"mystery",
	"brother",
	"aviator",
	"crocodile",
	"pearl",
	"orchard",
	"crackpot"
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(w) {
	let n = 0;
	let str = "";
	w.forEach(function(i) {
		if (i.length > n) {
			n = i.length;
			str = i;
		}
	});
	return str;
}
console.log(findLongestWord(words));

var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
// Use the above sum and calculate the average.

function sumArray(numbers1) {
	let sum = 0;
	numbers1.forEach(function(i) {
		sum = sum + i;
	});
	return sum;
}
console.log(sumArray(numbers1));
var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers

var words2 = [
	"seat",
	"correspond",
	"linen",
	"motif",
	"hole",
	"smell",
	"smart",
	"chaos",
	"fuel",
	"palace"
];

function averageNumbers(n) {
	let sum = 0;
	let i = 0;
	for (i = 0; i < n.length; i++) {
		sum = sum + n[i];
	}
	return sum / i;
}
console.log(averageNumbers(numbers2));

//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

function averageWordLength(w) {
	let sum = 0;
	let i = 0;
	for (i = 0; i < w.length; i++) {
		sum += w[i].length;
	}
	return sum / i;
}
console.log(averageNumbers(numbers2));
