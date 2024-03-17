"use strict";
//Changing the guest list
let Guests = ["Sijawal", "saif", "shoukat"];
console.log(`New Guests:\n ${Guests}\n`);
let donotattend = "saif";
console.log(`${donotattend},Can't make it to dinner\n`);
let newguest = "Danish";
Guests[Guests.indexOf(donotattend)] = newguest;
Guests.forEach((Guests) => {
    console.log(` Hello dear ${Guests},\t You are invited to dinner`);
});
