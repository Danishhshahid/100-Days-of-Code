function objectproperties (obj :  { [key: string] : any }){
    for ( let property in obj){
        console.log(` ${property} : ${obj[property]}`);
        
    }
}
objectproperties({make: "toyota" , model : "yarsi", Varient : "top of the line", year : 2023});