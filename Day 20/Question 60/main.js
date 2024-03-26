"use strict";
let userprofile = function () {
    let name = "danish";
    let age = 19;
    return {
        displayInfo: function () {
            console.log(`Name : ${name}, Age: ${age}`);
        }
    };
}();
userprofile.displayInfo();
