"use strict";
// Discuss the difference between default and named exports in JavaScript modules.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utlis_1 = require("./utlis");
console.log((0, utlis_1.utilone)(2, 6));
console.log((0, utlis_1.utiltwo)(2, 6));
const calculator_1 = __importDefault(require("./calculator"));
let danish = new calculator_1.default("Danish");
danish.greet();
