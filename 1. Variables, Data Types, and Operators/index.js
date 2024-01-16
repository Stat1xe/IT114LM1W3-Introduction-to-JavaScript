/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
// Using the var keyword to define a variable
<link>var</link> ; x = 5;
    console.log(x); // Output: 5
<link>var</link> ; y = 10;
    console.log(y); // Output: 10

// TODO 1.2 Use the let keyword to define a variable.
// Your code here
// Using the let keyword to define a variable
<link>let</link> ; a = 3;
    console.log(a); // Output: 3

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
// Using the const keyword to define a variable
<link>const</link> ; b = 7;
    console.log(b); // Output: 7
// Trying to reassign the value of the variable
b = 10; // This will result in a TypeError, as const variables cannot be reassigned.

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: 

//var is function-scoped, and its declaration is hoisted to the top of the function. It can be re-declared and updated throughout the function.
//let is block-scoped, and its declaration is hoisted to the top of the block. It can be updated but not re-declared within the same block scope.
//const is also block-scoped like let, but its value cannot be reassigned once it has been initialized.

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here

// Using different arithmetic operators
let addition = 5 + 3; // Output: 8
let subtraction = 10 - 4; // Output: 6
let multiplication = 7 * 2; // Output: 14
let division = 20 / 5; // Output: 4
let modulus = 10 % 3; // Output: 1 (remainder of division)

// Checkpoint 1.2 What operators did you use?
// Answer: Addition (+) Subtraction (-) Multiplication (*) Division (/) Modulus (%)

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here

// Using different string operators
let str1 = "Hello";
let str2 = "World";
let combinedStr = str1 + " " + str2; // Output: "Hello World"

// Checkpoint 1.3 What operators did you use?
// Answer: Concatinatination Operator (+)

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here

// Using different logical operators
let value1 = true;
let value2 = false;
let andResult = value1 && value2; // Output: false
let orResult = value1 || value2; // Output: true
let notResult = !value1; // Output: false

// Checkpoint 1.4 What operators did you use?
// Answer: Logical AND (&&) Logical OR (||) Logical NOT (!)


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
//Your code here

// Using different relational operators
let num1 = 5;
let num2 = 10;
let equalResult = num1 == num2; // Output: false
let notEqualResult = num1 != num2; // Output: true
let greaterThanResult = num2 > num1; // Output: true
let lessThanResult = num1 < num2; // Output: true
let greaterThanOrEqualResult = num2 >= num1; // Output: true
let lessThanOrEqualResult = num1 <= num2; // Output: true

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: The expression [] == false evaluates to true in JavaScript. This happens because of type coercion. When comparing an object (in this case, an empty array) with a boolean, JavaScript coerces the types to be comparable. In this specific case, the empty array is coerced to a falsy value, and when compared to false, it evaluates to true.