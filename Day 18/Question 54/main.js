"use strict";
function objectWithDynamicKey(key, value) {
    let dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
;
const Userpreference = objectWithDynamicKey("theme", "Dark");
console.log(Userpreference);
