let sentence = "I love learning JavaScript";
let count = 0;

for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i].toLowerCase(); // make it case-insensitive
    
    if (char === "a") {
        count++;
    }
}

console.log("Number of 'a's:", count);