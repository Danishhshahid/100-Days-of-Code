"use strict";
// // finding the index number of a element in array
function ReplaceNumbers(arr) {
    const index = arr.indexOf(43);
    if (index !== -1)
        arr[index] = 55;
}
const numbers = [54, 65, 76, 87, 43, 566, 444];
console.log(ReplaceNumbers(numbers));
console.log(numbers);
