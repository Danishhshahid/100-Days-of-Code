function Decimals(num1 : number , num2 : number): number{
    return Math.round(num1 * num2 * 100) / 100;
}

console.log(Decimals(0.25,0.45));
