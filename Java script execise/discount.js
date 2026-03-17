let price = 8000;
let discountPercent = 15;

let discountAmount = (discountPercent / 100) * price;

let finalPrice = price - discountAmount;

console.log("Discount Amount:", discountAmount);
console.log("Final Price:", finalPrice);