"use strict";
function mixing(num1, numStr) {
    let numFromStr = Number(numStr);
    if (isNaN(numFromStr)) {
        throw new Error('str cant be converted in number');
    }
    return num1 + numFromStr;
}
console.log(mixing(5, "10"));
