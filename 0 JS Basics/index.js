const app = require('./index0.js')
console.warn(app.x);

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
    return age >= 18;
}

const arr = [32, 33, 16, 40];
const arrResult = arr.filter((ele) => {
    return ele > 20;
})
console.warn(arrResult);

// The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.

let myFunction = (a, b) => a * b;
hello = function () {
    return "Hello World!";
}
hello1 = () => {
    return "Hello World!";
}
// It gets shorter! If the function has only one statement, and the statement returns a value,
//  you can remove the brackets and the return keyword:
hello2 = () => "Hello World!";
//arrow functino with parameters
hello3 = (val) => "Hello " + val;
//arrow funciton without parenthesis
hello4 = val => "Hello " + val;

//Global modules, import necessary functions only
const gs = require('fs').writeFileSync;
gs("abc.txt", "Junaid Kheppar");
