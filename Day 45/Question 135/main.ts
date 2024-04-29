//Explain how you can format a JSON string with proper indentation for readability.


let person = {
    name : "danish",
    age :19,
    city : "larkana "
};

const jsonString = JSON.stringify(person , null, 2);

console.log(jsonString);
