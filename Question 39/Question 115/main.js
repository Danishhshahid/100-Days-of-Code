"use strict";
//// This function logs the day of the week based on a number (1-7)
let weekday = (dayNumber) => {
    switch (dayNumber) {
        case 1:
            console.log(`Today  is Sunday`);
            break;
        case 2:
            console.log(`Today  is Monday`);
            break;
        case 3:
            console.log(`Today  is Tuesday`);
            break;
        case 4:
            console.log(`Today  is wednesday`);
            break;
        case 5:
            console.log(`Today  is thursday`);
            break;
        case 6:
            console.log(`Today  is friday`);
            break;
        case 7:
            console.log(`Today  is saturday`);
            break;
    }
};
weekday(1);
weekday(3);
weekday(6);
