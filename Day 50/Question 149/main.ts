//Question 149: Explain the concept of the event loop in JavaScript with an example.


console.log("starting");

setTimeout(() => {
    console.log("hello Callback is excueted after waiting 3 sec in web api and then pushed to callback que and then to call stack");
    
}, 3000);

console.log("Ended");


