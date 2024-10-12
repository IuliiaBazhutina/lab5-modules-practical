import { toUpperCase } from './stringModule.js';

export function add(a, b) { 
    return (a + b); 
}

export function subtract(a, b) { 
    return (a - b); 
}

export default function multiply(a, b) { 
    return a * b; 
}

export function addAndLogUpper(a, b) {
    let result = add(a, b);
    return toUpperCase(result.toString(10));
}