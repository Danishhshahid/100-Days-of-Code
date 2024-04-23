"use strict";
// Dice roll Game
let dice = () => {
    return Math.floor(Math.random() * 6) + 1;
};
console.log(dice());
