"use strict";
function scores(...score) {
    let averagescore = score.reduce((sum, value) => sum + value, 0);
    return averagescore / score.length;
}
;
console.log(scores(80, 90, 44, 55));
