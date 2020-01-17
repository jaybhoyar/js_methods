// 1. Write a JavaScript program to list the properties and values of a JavaScript object. (Object.keys)

console.log(Object.keys(obj));

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
var student = {
	name: "David Rayy",
	class: "VI",
	rollno: 12
};
console.log(Object.values(student));
delete student.rollno;
console.log(Object.values(student));

// 3. Write a function to get the length of an object.
function getLength() {
	let length = Object.values(student).length;
	return length;
}

console.log(getLength());
