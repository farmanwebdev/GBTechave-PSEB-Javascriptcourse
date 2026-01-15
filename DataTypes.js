//  JavaScript Data Types – Complete Lecture File

//  Credit to the right full owner this code isn't written by me  (Ali Basit)

// 1. Primitive Data Types


/* 1. Number */
let age = 25;
let price = 99.99;
let infinityValue = Infinity;
let notANumber = NaN;

console.log("Number:", age, price, infinityValue, notANumber);
console.log("Type:", typeof age);

/* 2. String */
let firstName = "John";
let lastName = 'Doe';
let message = `Hello, ${firstName}!`; // Template literal

console.log("String:", firstName, lastName, message);
console.log("Type:", typeof firstName);

/* 3. Boolean */
let isLoggedIn = true;
let isAdmin = false;

console.log("Boolean:", isLoggedIn, isAdmin);
console.log("Type:", typeof isLoggedIn);

/* 4. Undefined */
let x;
console.log("Undefined:", x);
console.log("Type:", typeof x);

/* 5. Null */
let y = null;
console.log("Null:", y);
console.log("Type:", typeof y); // object (JavaScript bug)

/* 6. Symbol (ES6) */
let sym1 = Symbol("id");
let sym2 = Symbol("id");

console.log("Symbol:", sym1 === sym2); // false
console.log("Type:", typeof sym1);

/* 7. BigInt */
let bigNumber = 123456789012345678901234567890n;
console.log("BigInt:", bigNumber);
console.log("Type:", typeof bigNumber);



// 2. Non-Primitive (Reference) Data Types


/* 8. Object */
let person = {
    name: "Alice",
    age: 30,
    isStudent: false
};

console.log("Object:", person);
console.log("Type:", typeof person);

/* 9. Array */
let colors = ["Red", "Green", "Blue"];
console.log("Array:", colors);
console.log("Type:", typeof colors); // object

/* 10. Function */
function greet(name) {
    return "Hello " + name;
}

console.log("Function:", greet("Bob"));
console.log("Type:", typeof greet);

/* 11. Date */
let today = new Date();
console.log("Date:", today);
console.log("Type:", typeof today);


// 3. Type Conversion (Casting)

/* String to Number */
let strNum = "100";
let numValue = Number(strNum);

console.log("Converted Number:", numValue, typeof numValue);

/* Number to String */
let num = 200;
let strValue = String(num);

console.log("Converted String:", strValue, typeof strValue);

/* Boolean Conversion */
console.log("Boolean(1):", Boolean(1));
console.log("Boolean(0):", Boolean(0));
console.log("Boolean(''):", Boolean(""));


// 4. typeof Summary


console.log(typeof 10);          // number
console.log(typeof "Hello");     // string
console.log(typeof true);        // boolean
console.log(typeof undefined);   // undefined
console.log(typeof null);        // object (known JS issue)
console.log(typeof Symbol());    // symbol
console.log(typeof 10n);         // bigint
console.log(typeof {});          // object
console.log(typeof []);          // object
console.log(typeof function () { });// function