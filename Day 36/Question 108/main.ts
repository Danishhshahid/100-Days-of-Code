// comparing two strings ignoring case sensitivity


let comparing = (str1 : string , str2 : string) :boolean => {
    return str1.toLowerCase() === str2.toLowerCase();
}

console.log(comparing("danish",'DANISH'));
console.log(comparing("danish",'SAQIB'));
