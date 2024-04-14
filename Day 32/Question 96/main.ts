function CalculateSum (numbers : number[]): number{
    return numbers.reduce((accumulator, current ) => accumulator + current,0);
}



let numbers : number[]=[9,8,7,6,5,5,4,3,2,1];
console.log(CalculateSum(numbers));
