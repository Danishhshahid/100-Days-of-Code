"use strict";
//access var outside the blockscope
{
    let letblock = "Danish";
    const constblock = 99;
    console.log(letblock + constblock);
}
// letblock = "daanish"; // error
// constblock = 55; // error
// Object var are only accessable and safe inside the object and easily accessable inside the object only;
