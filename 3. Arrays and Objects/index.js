/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here

const firstItem = numbers[0];
const fifthItem = numbers[4];
const lastItem = numbers[numbers.length - 1];

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here

const min = Math.min(...numbers);
const max = Math.max(...numbers);
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
const average = sum / numbers.length;

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: In Python, lists are similar to arrays in JavaScript, but there are differences in their behavior and features. Python lists are more flexible as they can contain elements of different types, while JavaScript arrays are generally used to store elements of the same type. Additionally, Python lists have built-in methods like append() and extend(), while JavaScript arrays have methods like push() and concat() to manipulate their contents.

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here

const it114L = {
    courseCode: "IT114L",
    name: "Web Development",
    units: 3,
    numberOfStudents: 50
  };

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here

it114L.professorName = "Job Lipat";
console.log(it114L.professorName);

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here

const courses = [
    { courseCode: "IT114L", name: "Web Development", units: 3 },
    { courseCode: "IT220L", name: "Database Management", units: 4 },
    { courseCode: "IT350L", name: "Software Engineering", units: 3 }
  ];

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here

const totalUnits = courses.reduce((total, course) => total + course.units, 0);

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer:  In Python, the equivalent of JavaScript objects would be dictionaries. Both objects in JavaScript and dictionaries in Python are used to store key-value pairs, allowing for efficient data organization and retrieval. They are both versatile and can store different types of data as values, making them fundamental data structures in their respective languages.

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here

const copiedNumbers = [...numbers, 100];

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here

const { courseCode, units } = it114L;
console.log("Course Code:", courseCode);
console.log("Units:", units);