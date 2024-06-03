"use strict";
function excueteCallback(callback, name2) {
    callback(name2);
}
let name1 = (name1) => {
    console.log(`Hello ${name1}`);
};
excueteCallback(name1, "Danish");
