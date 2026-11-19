let a = 25;
let b = 50;
let c = 30;

let largest;

console.log("\n5. Largest of Three Numbers");

if (a >= b && a >= c) {
    largest = a;
} else if (b >= a && b >= c) {
    largest = b;
} else {
    largest = c;
}

console.log("The largest number is:", largest);