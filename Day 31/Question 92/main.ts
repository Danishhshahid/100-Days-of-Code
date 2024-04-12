// removing an str from array

function removefirstelement  (str: any[]): any{
    return str.pop();

}

let vehicles : string[]=['Bikes','cycles','cars'];

console.log(removefirstelement(vehicles));
console.log(vehicles);

