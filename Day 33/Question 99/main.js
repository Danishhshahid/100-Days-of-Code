"use strict";
// Generating my birthday
let myBirthday = (month, day) => {
    let now = new Date();
    let year = now.getFullYear();
    let birthday = new Date(year, month - 1, day);
    if (birthday < now) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
};
let NextBirthday = myBirthday(10, 18);
console.log("Next birthday on " + NextBirthday.toLocaleDateString());
