//Filtering the array

function GreaterThan20 (numbers : number[]): number[]{
    return numbers.filter(numbers => numbers > 20)
}


let numbers : number[]=[22,11,23,14,16,55];
console.log(GreaterThan20(numbers));

