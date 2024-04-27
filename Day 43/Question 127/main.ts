//Convert a traditional function expression to an arrow function.


function tradintionalFunction (a :number ,b: number ){
    return a *b;
}

let ArrowFunction = (a: number,b: number )=> a *b;

console.log(tradintionalFunction(7,8));
console.log(ArrowFunction(7,8));

