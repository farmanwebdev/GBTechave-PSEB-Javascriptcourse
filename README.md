JavaScript Fundamentals – Variables (var, let, const)

This repository contains introductory JavaScript practice code focused on understanding variables, scope, and console output.
It is designed for beginners who are starting JavaScript using Node.js.

📚 Lesson Information

Course: JavaScript Basics

Lesson Title: Variables & Scope

File Name: ClassOne.js

Level: Beginner

Environment: Node.js (Console-based)

🎯 Learning Objectives

After completing this lesson, students will be able to:

Use console.log() to display output

Understand JavaScript comments

Declare variables using var, let, and const

Identify differences between var, let, and const

Understand scope in JavaScript

Recognize bad practices (implicit global variables)

🧠 Topics Covered

Console output

Single-line & multi-line comments

Variable declaration

Variable redeclaration

Variable reassignment

Block scope vs function scope

Best practices in modern JavaScript

🧾 Code Explanation
✅ Hello World
console.log("Hello World");


Prints a message to the console.

⚠️ Variable Without Keyword (Not Recommended)
userName = "farman";
console.log(userName);


Creates a global variable

Bad practice

Can cause bugs

✅ Using let
let userEmail = "saqib@gmail.com";
console.log(userEmail);


Block scoped

Can be reassigned

Cannot be redeclared

✅ Using const
const userPass = "12345";
console.log(userPass);


Block scoped

Cannot be reassigned

Best choice for fixed values

⚠️ Using var
var Location = "Pakistan";
console.log(Location);

var PhoneNumber = "03001234567";
console.log(PhoneNumber);

var PhoneNumber = "03007654321";
console.log(PhoneNumber);


Function scoped

Allows redeclaration

Not recommended in modern JS

📌 Key Concept: Scope

Scope determines where a variable can be accessed.

Types of Scope:

Global Scope

Block Scope (let, const)

Function Scope (var)

❓ Why Avoid var?
Feature	var	let	const
Block Scoped	❌	✅	✅
Redeclaration	✅	❌	❌
Reassignment	✅	✅	❌
Modern Usage	❌	✅	✅

👉 Best Practice:

Use const by default

Use let when reassignment is needed

Avoid var

🧪 Practice & Experiments

The file includes commented-out code for:

Reassigning values

console.table() usage

Understanding undefined

Testing variable behavior

Students are encouraged to uncomment and test the code.

▶️ How to Run This Project
1️⃣ Install Node.js

Download from: https://nodejs.org

2️⃣ Run the File
node ClassOne.js

📤 Sample Output
Hello World
farman
saqib@gmail.com
12345
Pakistan
03001234567
03007654321

🧑‍🏫 Teaching Notes

Explain why implicit globals are dangerous

Show real bugs caused by var

Encourage students to use let & const

Ask students to predict output before running

👨‍💻 Author

Farman Saqib
Web Developer & JavaScript Instructor
GitHub: https://github.com/farmanwebdev

⭐ Next Lessons

Data Types

Operators

Conditions

Functions

Arrays & Objects
