let marks = [33, 34,55,76,98,100];
let averageNumbers = marks.reduce((total,grade) => total + grade ,0) / marks.length;
console.log(averageNumbers);
