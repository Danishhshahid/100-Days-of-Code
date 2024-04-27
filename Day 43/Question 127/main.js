"use strict";
//Convert a traditional function expression to an arrow function.
function tradintionalFunction(a, b) {
    return a * b;
}
let ArrowFunction = (a, b) => a * b;
console.log(tradintionalFunction(7, 8));
console.log(ArrowFunction(7, 8));
