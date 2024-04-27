// Explain how this behaves differently in arrow functions compared to traditional functions.

let person ={
    name : "danish",
    
    traditonal: function(){
        console.log(`this is Traditional Value : ${this.name}`);
        
        let arrowFunction = ()=>{
            console.log(`This is arrow Function Value ${this.name}`);
            
        }
        arrowFunction()
    },

       
}

person.traditonal()

