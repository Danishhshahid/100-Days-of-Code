"use strict";
// 
console.log("this is early msg");
function name1(data) {
    setTimeout(() => {
        console.log(`My name is ${data}`);
    }, 3000);
}
name1("danish");
