"use strict";
function divideandRemainder(num1, num2) {
    const quotient = Math.floor(num1 / num2);
    const remainder = num1 % num2;
    return { quotient, remainder };
}
;
console.log(divideandRemainder(8, 2));
