//access var outside the blockscope




{
    let letblock : string = "Danish";
    const constblock : number =99;
    console.log(letblock + constblock);
    
}
// letblock = "daanish"; // error
// constblock = 55; // error

// Object var are only accessable and safe inside the object and easily accessable inside the object only;