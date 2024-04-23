"use strict";
// Calculating days until new year 
let calculateDays = () => {
    let now = new Date;
    let years = new Date(now.getFullYear() + 1, 0, 1);
    let difference = years.getTime() - now.getTime();
    let days = Math.ceil(difference / (1000 * 60 * 60 * 24));
    return days;
};
console.log(calculateDays());
