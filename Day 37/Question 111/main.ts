// //Use an if-else-if chain to categorize a person's age group (child, teenager, adult).

let ageIdentifier = (age: number) :string => {
 if (age < 13) {
        return `You are a child`
      } else if (age < 18) {
        return `You are a Teenager adult.`
      } else if (age < 30) {
        return `You are a young adult.` 
      } else if (age < 65) {
        return `You are a adult.`
      } else {
        return `You are a Senior citizen.`
      }
    }
console.log(ageIdentifier(12));
console.log(ageIdentifier(16));
console.log(ageIdentifier(25));
console.log(ageIdentifier(60));
console.log(ageIdentifier(80));
