// ====================== IF CONDITION ======================

// if → runs code ONLY when condition is TRUE
// Syntax:
// if (condition) {
//    code
// }

// Example 1:
if (12 > 10) console.log("greater");
// 12 > 10 → this is a condition
// > is a comparison operator
// It returns true because 12 is greater than 10
// Since condition is TRUE → console.log runs
// Output: greater

// Example 2: Block of code
if (12 > 10) {
  // Curly braces {} are used when we want to execute
  // multiple lines of code

  console.log("greater");
  console.log("Number is greater");
}
// Since condition is true,
// BOTH lines inside block will execute

// ====================== ELSE ======================

// else → runs only when the if condition is FALSE

if (1 > 10) console.log("greater");
// 1 > 10 → FALSE
// So this line will NOT run
else console.log("smaller or equals");
// Since above condition is false,
// else block executes
// Output: smaller or equals

// ====================== ELSE IF ======================

// else if → used when we want to check multiple conditions
// It works as a fallback condition

// Example: Check whether number is positive, negative or zero

var n = parseInt(prompt("Enter a number"));
// prompt() → takes input from user as STRING
// parseInt() → converts string into integer number
// Example: "25" → 25

if (n > 0) console.log(`${n} is positive`);
// If n is greater than 0 → positive number
else if (n < 0) console.log(`${n} is negative`);
// If above condition is false AND n < 0 → negative
else console.log("Zero");
// If both conditions above are false → number must be 0

// ====================== BMI CALCULATOR ======================

// BMI Formula:
// bmi = weight / height²
// height² means height * height
// ** is exponent operator in JavaScript

var weight = parseInt(prompt("Enter weight in kg's : "));
// User enters weight
// parseInt converts it into number

var height = parseFloat(prompt("Enter height in meters's : "));
// parseFloat is used because height can be decimal
// Example: 1.75

var bmi = weight / height ** 2;
// height ** 2 → height squared
// Example: 1.7 ** 2 = 2.89
// BMI formula applied

if (bmi < 18.5) console.log(`underweight as your bmi is ${bmi}`);
// If bmi less than 18.5 → Underweight
else if (bmi >= 18.5 && bmi < 25)
  console.log(`normal weight as your bmi is ${bmi}`);
// && → logical AND operator
// BOTH conditions must be true
// Between 18.5 and 24.9 → Normal weight
else if (bmi >= 25 && bmi < 30)
  console.log(`over weight as your bmi is ${bmi}`);
// Between 25 and 29.9 → Overweight
else console.log(`obese as your bmi is ${bmi}`);
// If none of the above → BMI 30 or more → Obese

// ====================== NESTED IF ======================

// Nested if → if inside another if

var mood = false;
// mood is boolean variable
// false means not in mood

var money = true;
// money is boolean
// true means money available

if (mood) {
  // if (mood) means:
  // if mood == true

  if (money) {
    // This will run only if:
    // mood is TRUE AND money is TRUE

    console.log("Trip On");
    // Both conditions satisfied
  } else console.log("Baad me jana");
  // If mood is TRUE but money is FALSE
  // then this else will execute
} else {
  // This else belongs to the outer if
  // It runs when mood is FALSE

  console.log("Baad me puchnge");
}
// Since mood = false,
// Outer if condition fails
// So final output:
// Baad me puchnge
