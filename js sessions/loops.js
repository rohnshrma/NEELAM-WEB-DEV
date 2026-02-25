// ===============================================
// 🔁 LOOPS IN JAVASCRIPT - FULL EXPLANATION
// ===============================================

// =====================================================
// 1️⃣ FOR LOOP
// =====================================================

// Syntax:
// for (initialization; condition; update) {
//     code to be executed
// }

// initialization → runs only once at the beginning
// condition → checked before every iteration
// update → runs after every loop cycle

// -----------------------------------------------------
// Example 1: Print from 1 to 10
// -----------------------------------------------------

for (var i = 1; i <= 10; i += 1) {
  // var i = 1  → start counting from 1
  // i <= 10    → loop runs until i becomes 11
  // i += 1     → increase i by 1 after each iteration

  console.log("hello world", i);

  // This prints:
  // hello world 1
  // hello world 2
  // ...
  // hello world 10
}

// -----------------------------------------------------
// Example 2: Reverse Loop (10 to 1)
// -----------------------------------------------------

for (var i = 10; i >= 1; i -= 1) {
  // start from 10
  // run while i is greater than or equal to 1
  // decrease i by 1 each time

  console.log("john doe", i);
}

// -----------------------------------------------------
// Example 3: Print Even Numbers (Efficient Way)
// -----------------------------------------------------

for (var i = 2; i <= 50; i += 2) {
  // start from 2
  // increase by 2 every time
  // so values become 2, 4, 6, 8, 10 ...

  console.log(`${i} is an even number`);
}

// -----------------------------------------------------
// Example 4: Print Even Numbers (Using Condition)
// -----------------------------------------------------

for (var i = 1; i <= 50; i += 1) {
  // % → modulus operator
  // i % 2 gives remainder
  // if remainder is 0 → number is even

  if (i % 2 === 0) {
    console.log(`${i} is an even number`);
  }
}

// =====================================================
// 2️⃣ MULTIPLICATION TABLE
// =====================================================

// prompt() returns string
// Number() converts string into number

var num = Number(prompt("Enter a number"));

for (var i = 1; i <= 10; i += 1) {
  // i goes from 1 to 10
  // num * i calculates multiplication

  console.log(`${num} * ${i} = ${num * i}`);
}

// =====================================================
// 3️⃣ LOOP THROUGH STRING
// =====================================================

var txt = "hello world";

// String index starts from 0
// Last index is txt.length - 1

for (var i = 0; i < txt.length; i += 1) {
  // txt[i] gives each character
  // i < txt.length prevents index error

  console.log(txt[i]);
}

// -----------------------------------------------------
// Count Vowels in String
// -----------------------------------------------------

var count = 0; // counter variable

for (var i = 0; i < txt.length; i += 1) {
  // toLowerCase() converts uppercase to lowercase
  // includes() checks if character exists inside string

  if ("aeiou".includes(txt[i].toLowerCase())) {
    count += 1; // increase count
  }
}

console.log(count);

// =====================================================
// 4️⃣ WHILE LOOP
// =====================================================

// Syntax:
// while (condition) {
//    code
// }

// Condition is checked BEFORE execution
// If condition is false → loop never runs

// -----------------------------------------------------
// Example: Count Vowels using While
// -----------------------------------------------------

var count = 0;
var i = 0; // initialization must be outside

while (i < txt.length) {
  if ("aeiou".includes(txt[i].toLowerCase())) {
    count += 1;
  }

  i += 1; // IMPORTANT: update required
  // If we forget this → infinite loop
}

console.log(count);

// -----------------------------------------------------
// Example: Age Validation
// -----------------------------------------------------

var age = Number(prompt("Enter age :"));

// Loop keeps running until user enters age >= 18

while (age < 18) {
  age = Number(prompt("Enter eligible age :"));
}

console.log("eligible", age);

// -----------------------------------------------------
// Example: Email Validation
// -----------------------------------------------------

var email = prompt("Enter email ");

// ||  → OR operator
// !   → NOT operator

// Conditions:
// 1. length must be at least 8
// 2. must include "@"
// 3. must end with ".com"

while (email.length < 8 || !email.includes("@") || !email.endsWith(".com")) {
  email = prompt("Enter valid email ");
}

console.log(email);

// =====================================================
// 5️⃣ DO WHILE LOOP
// =====================================================

// Syntax:
// do {
//    code
// } while(condition);

// Runs at least once
// Condition checked AFTER execution

var i = 1;

do {
  console.log(i);
  i += 1;
} while (i <= 5);

// =====================================================
// 6️⃣ FOR IN LOOP
// =====================================================

// Used to loop through object properties

var obj = {
  name: "Rohan",
  age: 26,
};

for (var key in obj) {
  // key gives property name
  // obj[key] gives property value

  console.log(key, obj[key]);
}

// =====================================================
// 7️⃣ FOR OF LOOP
// =====================================================

// Used for arrays and strings (iterables)

var arr = [10, 20, 30];

for (var value of arr) {
  // value gives actual element

  console.log(value);
}

// =====================================================
// 🔥 SUMMARY
// =====================================================

// for → best when number of iterations is known
// while → best when condition-based repetition
// do-while → must run at least once
// for-in → loop through object keys
// for-of → loop through array/string values

// ===========================

// =======================================================
// 🔥 LOOP PRACTICE SET (30 TASKS)
// =======================================================

// =======================================================
// 🟢 PART 1 — FOR LOOP (FIXED ITERATION)
// =======================================================

// 1️⃣ Print numbers from 3 to 60 with a gap of 3.

// 2️⃣ Print numbers from 200 down to 150.

// 3️⃣ Print the sum of cubes from 1 to 5.

// 4️⃣ Print all numbers between 1 and 100 that are divisible by 4.

// 5️⃣ Print the product of numbers from 2 to 6.

// 6️⃣ Print all numbers between 1 and 100 divisible by 6 but not divisible by 8.

// 7️⃣ Print first 20 natural numbers and also print their total sum.

// 8️⃣ Take a number from user.
//     Print all even numbers less than that number.

// 9️⃣ Print total count of numbers between 1 and 500 divisible by 25.

// 🔟 Print pattern:
// 10
// 20
// 30
// ...
// 100

// =======================================================
// 🟢 PART 2 — WHILE LOOP (FIXED ITERATION)
// =======================================================

// 1️⃣1️⃣ Print numbers from 1 to 25 using while loop.

// 1️⃣2️⃣ Print numbers from 50 down to 30 using while loop.

// 1️⃣3️⃣ Print first 12 multiples of 5 using while loop.

// 1️⃣4️⃣ Print sum of numbers from 1 to 50 using while loop.

// 1️⃣5️⃣ Print first 15 odd numbers using while loop.

// 1️⃣6️⃣ Take a number.
//      Count total digits using while loop.

// 1️⃣7️⃣ Take a number.
//      Find sum of its digits using while loop.

// 1️⃣8️⃣ Take a number.
//      Reverse the number using while loop.

// 1️⃣9️⃣ Print square numbers from 1 to 10 using while loop.

// 2️⃣0️⃣ Print multiplication table of 15 using while loop.

// =======================================================
// 🟢 PART 3 — WHILE LOOP (NON-FIXED ITERATION)
// =======================================================

// 2️⃣1️⃣ Keep asking user to enter a number.
//      Stop when user enters 0.

// 2️⃣2️⃣ Keep asking user to enter numbers.
//      Add them continuously.
//      Stop when total becomes greater than 200.

// 2️⃣3️⃣ Keep asking user to enter a number.
//      Stop only when user enters a negative number.

// 2️⃣4️⃣ Keep asking user to enter a password.
//      Stop only when user enters "welcome123".

// 2️⃣5️⃣ Ask user to enter age.
//      Keep asking until age is between 18 and 60.

// 2️⃣6️⃣ Ask user to guess a secret number (9).
//      Keep asking until correct guess.

// 2️⃣7️⃣ Ask user to enter marks.
//      Keep asking until marks are between 0 and 100.

// 2️⃣8️⃣ Ask user to enter a number.
//      Keep asking until number is divisible by 7.

// 2️⃣9️⃣ Ask user to enter a number.
//      Keep asking until it is a 4-digit number.

// 3️⃣0️⃣ Ask user to enter a number.
//      Keep asking until number is a prime number.

// =======================================================
// 🚀 END OF PRACTICE SET
// =======================================================
