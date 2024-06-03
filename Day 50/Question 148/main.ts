// Question 148: Demonstrate the use of the setTimeout() function to execute code after a delay.






console.log("this is early msg");

function name1 (data : string){
    setTimeout(() => {
        console.log(`My name is ${data}`);
        
    }, 3000);
}

name1("danish")