"use strict";
//Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.
let grading = (Grade) => {
    switch (Grade) {
        case "A":
            console.log("excellent");
            break;
        case "B":
            console.log("Good");
            break;
        case "C":
            console.log("Fair");
            break;
        case "D":
            console.log("Poor");
            break;
        case "F":
            console.log("Fail");
            break;
        default:
            console.log(`Pls Enter Valid Grade`);
    }
};
grading("A");
grading("B");
grading("C");
grading("D");
grading("F");
grading("G");
