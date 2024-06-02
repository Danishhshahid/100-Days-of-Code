"use strict";
//Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
let p = new Promise((resolve, reject) => {
    let success = Math.random() > 0.5;
    if (success) {
        resolve("Success");
    }
    else {
        reject(new Error("Failed"));
    }
});
p.then((result) => console.log(result));
p.catch((error) => console.log(error.message));
