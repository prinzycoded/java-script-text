let fullName = "Okoro Prince Ugochukwu";

let words = fullName.split(" ");
let result = "";

for (let i = 0; i < words.length; i++) {
    let word = words[i];
    
    let formatted = word[0].toUpperCase() + word.slice(1).toLowerCase();
    
    result += formatted + " ";
}

console.log(result.trim());