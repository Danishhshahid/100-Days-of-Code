"use strict";
// Iterate over a Map of student IDs and names, and log each pair to the console.// Creates a Map to store student IDs (keys) and names (values)
let students = new Map();
students.set("Danish", 1);
students.set("Shoukat", 2);
students.set("Sijawal", 3);
students.forEach((id, name) => {
    console.log(`Student ID : ${id}, Name: ${name}`);
});
