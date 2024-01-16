/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
const squares = numbers.map(num => num * num);
// Resulting array: [1, 4, 16, 16, 25]

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
const evenNumbers = numbers.filter(num => num % 2 === 0);
// Resulting array: [2, 4, 4]

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
const sum = numbers.reduce((acc, num) => acc + num, 0);
// Resulting sum: 16

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
const upperCaseWords = words.map(word => word.toUpperCase());
// Resulting array: ['HELLO', 'WORLD']

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
const longWords = words.filter(word => word.length > 4);
// Resulting array: ['world']

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
const concatenatedString = words.reduce((acc, word) => acc + word, '');
// Resulting string: 'helloworld'

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// - map: Creates a new array by transforming each element in the original array based on a provided function.
// - filter: Creates a new array with elements that pass a provided condition.
// - reduce: Applies a function to each element of the array, resulting in a single output value.