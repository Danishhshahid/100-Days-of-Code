"use strict";
function makeAdder(valuetoAdd) {
    return function (number) {
        return number + valuetoAdd;
    };
}
;
let addsix = makeAdder(6);
console.log(addsix(56));
