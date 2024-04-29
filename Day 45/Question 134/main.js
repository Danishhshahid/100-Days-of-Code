"use strict";
//Take a JSON string and parse it into a JavaScript object.
let jsonString = `{"name" : "danish", "age" : 19, "city" : "larkana"}`;
const person = JSON.parse(jsonString);
console.log(person);
