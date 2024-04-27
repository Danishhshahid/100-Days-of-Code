"use strict";
//Explain how the this keyword changes its value when used inside a nested function within a method.
let myObject = {
    name: "Danish",
    outerMethod: function () {
        console.log(this.name);
        let InnerMethod = () => {
            console.log(this.name);
        };
        InnerMethod();
    },
};
myObject.outerMethod();
