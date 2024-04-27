//Create a loop that iterates through a string and stops when it finds the first vowel.
function Loguntilvowel (str : string): void{
const vowels = "aeiouAEIOU"
for (const char of str) {
    if (vowels.includes(char)){
        console.log(`First Vowel Found: ${char}`);
        
     break;   
    }

    
}
}
Loguntilvowel("Danish")
Loguntilvowel("Sijawal")
Loguntilvowel("Shoukat")