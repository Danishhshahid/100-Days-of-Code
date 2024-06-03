//Question 150: Describe how asynchronous callbacks differ from synchronous code execution.


//Synchronous Example : 
for( let i = 0; i < 10 ; i ++){
    console.log(i);         // the loop will execuete first and then other operations will excuete
}
console.log("after synchronous operation");


//asynchronous code : 


// the settime will wait for 3 sec without blocking other code and after 3 sec set time will be execueted
setTimeout(() => {
    console.log("this is a async operation");
    
}, 3000);

console.log("this is after a async operation");

