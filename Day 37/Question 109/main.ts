// Write an if statement that logs "Good Morning" if the current time is before 12 PM


let goodMorningMsg = ()=>{
    const date = new Date
    const time = date.getHours()
    if( time < 12){
        console.log(`Good Morning dear Danish`);
        
    }

}

goodMorningMsg()
