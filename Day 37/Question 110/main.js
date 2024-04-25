"use strict";
//Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
let GradingSystem = (marks) => {
    if (marks >= 90) {
        console.log(`Congrats You Got "A" Grade`);
    }
    else if (marks >= 75) {
        console.log(`Congrats You Got "B" Grade`);
    }
    else if (marks >= 65) {
        console.log(`Congrats You Got "C" Grade`);
    }
    else if (marks >= 50) {
        console.log(`Congrats You Got "D" Grade`);
    }
    else if (marks < 50) {
        console.log(`You Are failed`);
    }
};
console.log(GradingSystem(93));
console.log(GradingSystem(70));
console.log(GradingSystem(66));
console.log(GradingSystem(55));
console.log(GradingSystem(40));
