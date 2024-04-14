"use strict";
function CalculateSum(numbers) {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
let numbers = [9, 8, 7, 6, 5, 5, 4, 3, 2, 1];
console.log(CalculateSum(numbers));
