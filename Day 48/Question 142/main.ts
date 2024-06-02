

console.log("Hello world one");

let promise = new Promise ((resolve) => {
    setTimeout(()=>{
        resolve("hello world two")
    },3000);
})

promise.then((message) => console.log(message)
)
