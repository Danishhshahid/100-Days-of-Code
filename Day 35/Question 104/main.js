"use strict";
// Getting random Hex Color
let randomHex = () => {
    let color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, "0");
    return color;
};
console.log(randomHex());
