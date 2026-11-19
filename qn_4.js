let isLoggedIn = true;
let role = "admin";

console.log("\n4. Login & Role Check");

if (!isLoggedIn) {
    console.log("Please log in");
} else if (role === "admin") {
    console.log("Welcome, Admin");
} else {
    console.log("Welcome, User");
}