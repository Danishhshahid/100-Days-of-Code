
// Question 145: Create a function that accepts a callback and invokes it with some arguments.


function excueteCallback (callback: any ,name2: string){
    callback(name2)

}

let name1 = (name1 : string)=>{
    console.log(`Hello ${name1}`);
    
}

excueteCallback(name1,"Danish")