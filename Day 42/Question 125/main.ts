// Modify a method in an object to use the this keyword to access another property in the same object.



let twoNumbers = {
    num1 : 10,
    num2 : 3,
    
    getcalculation : function (){
        return this.num1 * this.num2
    }




}

console.log(twoNumbers.getcalculation());
