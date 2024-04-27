"use strict";
//Explain how to export a function from one JavaScript file and import it into another file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
function person() {
    let Name = "danish";
    console.log(Name);
}
exports.person = person;
person();
