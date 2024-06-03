//Question 147: Explain how to handle errors in a callback pattern.


function fetchData (callback : (error : Error | null, Data? : string) => void):void{

    let error = new Error ("This is a Error");
    let Data = "some data"

    if(Math.random() > 0.5){
        callback(null,Data)
    }else{
        callback(error)
    }

    
}
fetchData((error,Data) => {
    if  (error){
        console.error(error.message);
        
    }else {
        console.log(Data);
        
    }
});