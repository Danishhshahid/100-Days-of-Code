"use strict";
// Question 145: Create a function that accepts a callback and invokes it with some arguments.
function excueteCallback(callback, name2) {
    callback(name2);
}
let name1 = (name1) => {
    console.log(`Hello ${name1}`);
};
excueteCallback(name1, "Danish");
