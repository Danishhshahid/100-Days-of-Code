function makeAdder (valuetoAdd : number) : (number : number) => number{
    
    return function (number : number): number{
        return number + valuetoAdd;
    
    }

};

let addsix = makeAdder(6)
console.log(addsix(56));
