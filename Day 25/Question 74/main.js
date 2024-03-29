"use strict";
//swap values of two variables,
function swapping() {
    let a = 88;
    let b = 78;
    console.log(`The inital value of a = ${a} and b = ${b}`);
    let swap = a;
    a = b;
    b = swap;
    console.log(`After Swaping the a = ${a}, b = ${b}`);
}
swapping();
