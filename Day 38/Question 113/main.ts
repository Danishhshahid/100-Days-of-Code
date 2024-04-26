


let countries = new Map<string, string>()

countries.set('Pakistan', 'karachi');

let  countryChecking = (countries : Map<String,string>)=>{
    if (countries.has('Pakistan')){
        console.log(`Pakistan is present and its value ${countries.get("Pakistan")}`);
        
    }else{
        console.log("Pakistan is not Available");
        
    }
}

countryChecking(countries)