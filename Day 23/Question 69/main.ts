function divideandRemainder (num1 : number, num2 : number):{quotient : number, remainder: number}{
    const quotient = Math.floor(num1 / num2 );
    const remainder = num1 % num2;
    return { quotient, remainder}
};


console.log(divideandRemainder(8,2));
