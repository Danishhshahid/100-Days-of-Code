"use strict";
function GreaterThan20(numbers) {
    return numbers.filter(numbers => numbers > 20);
}
let numbers = [22, 11, 23, 14, 16, 55];
console.log(GreaterThan20(numbers));
