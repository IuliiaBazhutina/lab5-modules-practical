import multiply, { add, subtract, addAndLogUpper } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray, findMaxAndMultAndLogUpper } from './arrayModule.js';


console.log('Add: ', add(5, 3));  // Test your add function

console.log('Uppercase: ', toUpperCase('hello'));  // Test string manipulation

console.log('Multiply: ', multiply(4, 5));  // Test the default export

console.log('Max: ', findMax([1, 2, 3, 4, 5]));  // Test findMax

console.log('Reversed: ', reverseArray([1, 2, 3]));  // Test reverseArray

console.log('Add two numbers, convert the result to uppercase: ', addAndLogUpper(10, 20)); // Test combining functions across modules: math and string modules

console.log('Find max number in array, multiply it by value, and convert the result to uppercase: ', findMaxAndMultAndLogUpper([1, 2, 3, 4, 5], 10)); // Test combining the array, math, and string modules

