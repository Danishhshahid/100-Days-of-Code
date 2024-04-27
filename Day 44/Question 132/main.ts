// Discuss the difference between default and named exports in JavaScript modules.

import { utilone, utiltwo } from "./utlis";

console.log(utilone(2,6));
console.log(utiltwo(2,6));


import name from "./calculator";
 let danish = new name("Danish")
 danish.greet()