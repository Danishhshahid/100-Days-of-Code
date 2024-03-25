"use strict";
let mixedArr = ["danish", 45, true, "sijawal", "shoukat"];
let stringsArr = mixedArr.filter(item => typeof item === "string");
console.log(stringsArr);
