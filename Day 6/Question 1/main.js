"use strict";
//Adding more guest:
let Guest = ["sijawal", "Saif", "shoukat"];
console.log(`Old Guest List: ${Guest}\n`);
Guest.unshift("Danish");
Guest.splice(1, 0, "Younis");
Guest.push("Mehran");
console.log(`New Guest List:\t ${Guest}`);
//Printing the Message:
Guest.forEach((Guest) => {
    console.log(`Hello Dear ${Guest}, You are invited to the party`);
});
