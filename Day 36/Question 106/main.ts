//Checking if year is  leap of not

let leapYearChecking = (year : number ): boolean => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(leapYearChecking(2024));
console.log(leapYearChecking(2021));
