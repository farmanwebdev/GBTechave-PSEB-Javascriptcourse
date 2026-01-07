//Simple If Condition

let temperature = 30;
if (temperature > 25) {
  console.log("It's a hot day");
}
else {
  console.log("It's a cool day");
}


// let age = 20;

// if (age >= 20) {
//   console.log("You are an adult");
// }



//is Else

// let age = 16;

// if (age >= 18) {
//   console.log("You are an adult");
// } else {
//   console.log("You are a minor");
// }


// let score = 100;

// if (score >= 90) {
//   console.log("Grade: A");
// } else if (score >= 70) {
//   console.log("Grade: B");
// } else if (score >= 50) {
//   console.log("Grade: C");
// } else {
//   console.log("Grade: Fail");
// }


// let age = 20;
// let hasID = true;

// if (age >= 20 && hasID) {
//   console.log("Entry allowed");
// } else {
//   console.log("Entry denied");

// }




//======Logical Operators=======================//

// JavaScript Logical Operators – Complete Lecture


//  Credit to the right full owner this code isn't written by me  (Ali Basit)

// 1. Logical AND (&&)

// Returns true if BOTH conditions are true


let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("AND (&&): Access granted");
} else {
  console.log("AND (&&): Access denied");
}

// AND with values
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false



// 2. Logical OR (||)

// Returns true if AT LEAST ONE condition is true


let isAdmin = false;
let isEditor = true;

if (isAdmin || isEditor) {
  console.log("OR (||): Permission granted");
} else {
  console.log("OR (||): Permission denied");
}

// OR with values
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false



// 3. Logical NOT (!)


let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("NOT (!): User is not logged in");
}

// NOT examples
console.log(!true);   // false
console.log(!false);  // true



// 4. Short-Circuit Behavior

// JavaScript stops evaluation early


// AND short-circuit
let result1 = false && console.log("This will NOT run");
console.log("Short-circuit AND:", result1);

// OR short-circuit
let result2 = true || console.log("This will NOT run");
console.log("Short-circuit OR:", result2);



// 5. Logical Operators with Non-Boolean Values

// JS returns the actual value, not true/false


console.log("Hello" && "World"); // World
console.log("" && "World");      // ""
console.log(null && "Test");     // null

console.log("Hello" || "World"); // Hello
console.log("" || "World");      // World
console.log(null || "Default");  // Default



//  Practical Real-Life Examples


/* Login Example */
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login Successful");
} else {
  console.log("Invalid Credentials");
}

/* Discount Example */
let isMember = true;
let purchaseAmount = 600;

if (isMember || purchaseAmount > 500) {
  console.log("Discount Applied");
} else {
  console.log("No Discount");
}


// 7. Logical Operators with Ternary


let marks = 45;

let result = marks >= 40 ? "Pass" : "Fail";
console.log("Result:", result);



// 8. Truthy and Falsy Values


console.log(Boolean(0));        // false
console.log(Boolean(1));        // true
console.log(Boolean(""));       // false
console.log(Boolean("JS"));     // true
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false
console.log(Boolean([]));       // true
console.log(Boolean({}));       // true



