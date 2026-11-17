// Lesson 1: Intro to JavaScript

// Comments

// ctrl + * to make a comment
// shift + alt + A to make a multi-line comment

/* cndjic
vfnjiv
cdfj */

// Section 1: Console.log()
// The console.log() function is used to print messages to the console. It is useful for debugging and testing code.

console.log("Hello World!");

// Section 2: Variables and Data Types

// Variables store data values. Here are some examples of various data types:

// String (text)

let exampleString = "This is a string";
console.log(exampleString);

// Number
let exampleNumber = 50;
console.log(exampleNumber);

// Boolean
let booleanExample = false;
console.log(booleanExample);

// Array (list of values)
let exampleArray = ["red", "green", "blue"];
console.log(exampleArray); // logs the entire array
console.log(exampleArray[1]); // logs the second item in the array (green)
// Arrays have indexes, index starts from 0!

// Object (hold key-value pairs)
let person = {
  name: "Alice",
  age: 25,
  isStudent: false,
};
console.log(person); // logs the entire object
console.log(person.name); // logs the value of the "name" property (Alice)

// Undefined (declared variable but not assigned a value)
let exampleUndefined;
console.log(exampleUndefined);

// Null (explicitly set to have no value)
let nullExample = null;
console.log(nullExample);

// let vs const
// when declarin variables with let, we are able to reassign the value stored inside.
// when declaring variables with const, the value inside may not be reassigned.
// Use const as the default, and only use let when you know the value will be reassigned.

let changeableMessage = "I can change!"; // declaring variable and giving value
changeableMessage = "I have changed!"; // reassigning the value inside
console.log(changeableMessage);

const fixedValue = "I cannot change!";
// fixedValue = "Uh-oh.";
console.log(fixedValue);

// Section 3: Operators
// Operators perfform calculations or comparison.

let num1 = 10;
let num2 = 5;

console.log(num1 + num2); // addition
console.log(num1 - num2); // subtraction
console.log(num1 * num2); // multiplication
console.log(num1 / num2); // division
console.log(num1 % num2); // modulus (remainder)

// Using the + to add together strings
const firstName = "Jane";
const lastName = "Doe";
const fullName = firstName + " " + lastName;

console.log(firstName, lastName, fullName);

// Incrementing with ++ and decrementing with --

let counter = 0;

counter++; // increases number by 1
counter++;
counter++;
counter--; // decreases number by 1
counter--;

console.log(counter);

// Addition and Subtraction Assignments

let score = 10;

score += 10; // equivalent to score = score + 10

score -= 5; // equivalent to score = score - 5

console.log(score);

// Multiplication and Division Assignments
score *= 2; // equivalent to score = score * 2
console.log(score);

score /= 5; // equivalent to score = score / 5
console.log(score);

// Comparison Operators

// These operators compare two values and return a boolean (true or false).

console.log(15 > 20); // greater than
console.log(15 < 20); // less than
console.log(15 >= 15); // greater than or equal to
console.log(15 <= 15); // less than or equal to
console.log(15 == 15); // equal to (does not take into account data type)
console.log(15 === 15); // strictly equal to (takes into account data type)
console.log(15 != "15"); // not equal to
console.log(15 !== "15"); // strictly not equal to (takes into account data type)
