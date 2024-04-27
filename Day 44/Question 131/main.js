"use strict";
// Create two modules; one that exports a class, and another that imports the class and creates an instance.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello My Name is ${this.name}`);
    }
}
exports.Person = Person;
