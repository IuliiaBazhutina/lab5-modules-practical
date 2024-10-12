import { toUpperCase } from './stringModule.js';
import multiply from './mathModule.js'

export function findMax(arr) { 
    return Math.max(...arr); 
}

export function reverseArray(arr) { 
    return arr.reverse(); 
}

export function addAndLogUpper(a, b) {
    const result = add(a, b);
    console.log(toUpperCase(result.toString()));
}

export function findMaxAndMultAndLogUpper(arr, a) {
    const result = multiply(findMax(arr), a);
    return toUpperCase(result.toString());
}