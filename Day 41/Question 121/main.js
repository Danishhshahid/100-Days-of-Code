"use strict";
//Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.
for (let i = 1; i <= 5; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i);
}
