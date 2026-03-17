let num = 60;

if (num % 2 === 0) {
    console.log("Divisible by 2");
} else {
    console.log("Not divisible by 2");
}

if (num % 3 === 0) {
    console.log("Divisible by 3");
} else {
    console.log("Not divisible by 3");
}

if (num % 5 === 0) {
    console.log("Divisible by 5");
} else {
    console.log("Not divisible by 5");
}

if (num % 2 === 0 && num % 3 === 0 && num % 5 === 0) {
    console.log("Divisible by 2, 3, and 5");
} else {
    console.log("Not divisible by all three");
}