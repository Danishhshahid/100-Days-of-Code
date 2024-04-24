//divisible by two number 2 / 3

let divisible = (number : number): boolean =>{
    return number % 2 === 0 && number % 3 === 0
}


console.log(divisible(12));
console.log(divisible(7));
