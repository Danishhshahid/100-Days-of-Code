//replacing text with string 

function replacingnames (sent : string): string{

    return sent.replace(/sijawal/g, "Danish");
}

console.log(replacingnames(`My name is sijawal and my friend name is Danish.`));
