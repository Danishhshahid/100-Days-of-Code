"use strict";
// comparing two strings ignoring case sensitivity
let comparing = (str1, str2) => {
    return str1.toLowerCase() === str2.toLowerCase();
};
console.log(comparing("danish", 'DANISH'));
console.log(comparing("danish", 'SAQIB'));
