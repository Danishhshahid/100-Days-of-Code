"use strict";
function Decimals(num1, num2) {
    return Math.round(num1 * num2 * 100) / 100;
}
console.log(Decimals(0.25, 0.45));
