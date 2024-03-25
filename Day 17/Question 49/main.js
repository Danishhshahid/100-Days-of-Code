"use strict";
function loveHobbies(...hobbies) {
    hobbies.forEach(hobby => {
        console.log(`I love ${hobby}`);
    });
}
;
loveHobbies("reading", "cricket", "learning new things");
