// ==============================
// ARITHMETIC OPERATORS
// ==============================

// Arithmetic operators are used to perform mathematical calculations

var a = 3; // variable a storing value 3
var b = 2; // variable b storing value 2

console.log(a + b);
// + → Addition operator
// 3 + 2 = 5
// Output: 5

console.log(a - b);
// - → Subtraction operator
// 3 - 2 = 1
// Output: 1

console.log(a * b);
// * → Multiplication operator
// 3 * 2 = 6
// Output: 6

console.log(a / b);
// / → Division operator
// 3 / 2 = 1.5
// Output: 1.5

console.log(a % b);
// % → Modulus operator (remainder)
// 3 % 2 = 1 (remainder after division)
// Output: 1

console.log(a ** b);
// ** → Exponent (power)
// 3 ** 2 = 3² = 9
// Output: 9

// ==============================
// ASSIGNMENT OPERATORS
// ==============================

var x = 23;
// = → Assignment operator
// Stores 23 inside x

console.log(x);
// Output: 23

// x = x + 10;
// Meaning: new value of x = old value of x + 10

x += 10;
// Shortcut form of x = x + 10
// 23 + 10 = 33

console.log(x);
// Output: 33

x -= 10;
// x = x - 10
// 33 - 10 = 23

console.log(x);
// Output: 23

x *= 10;
// x = x * 10
// 23 * 10 = 230

console.log(x);

x /= 10;
// x = x / 10
// 230 / 10 = 23

console.log(x);

x %= 10;
// x = x % 10
// 23 % 10 = 3 (remainder)

console.log(x);

x **= 10;
// x = x ** 10
// 3 power 10 = 59049

console.log(x);

// ==============================
// COMPARISON OPERATORS
// ==============================
// Comparison operators return TRUE or FALSE

console.log(a > b);
// > → Greater than
// 3 > 2 → true

console.log(a >= b);
// >= → Greater than or equal to
// 3 >= 2 → true

console.log(a < b);
// < → Less than
// 3 < 2 → false

console.log(a <= b);
// <= → Less than or equal
// 3 <= 2 → false

// ==============================
// EQUALITY OPERATORS
// ==============================

console.log("12" == 12);
// == → Loose equality
// Only compares VALUE
// JS converts "12" (string) to number 12
// 12 == 12 → true

console.log(1 == 12);
// 1 equals 12? → false

console.log("12" === 12);
// === → Strict equality
// Compares VALUE AND DATA TYPE
// "12" is string
// 12 is number
// Different types → false

console.log(13 === 12);
// Same type but different value → false

console.log(12 != 23);
// != → Not equal (value only)
// 12 not equal to 23 → true

console.log(12 != "12");
// Value is same → false (because loose comparison)

console.log(12 !== 23);
// !== → Strict not equal
// Different value → true

console.log(12 !== "12");
// Value same but type different
// So strict not equal → true

// ==============================
// LOGICAL OPERATORS
// ==============================

// AND (&&)
// All conditions must be TRUE

console.log(120 > 23 && 23 < 120);
// true && true → true

console.log(120 < 23 && 23 < 120);
// false && true → false

console.log(120 < 23 && 23 > 120);
// false && false → false

// OR (||)
// At least ONE condition must be TRUE

console.log(120 > 23 || 23 < 120);
// true || true → true

console.log(120 < 23 || 23 < 120);
// false || true → true

console.log(120 < 23 || 23 > 120);
// false || false → false

// NOT (!)
// Reverses boolean value

console.log(!true);
// true becomes false

console.log(!12 > 3);
// !12 → false (because 12 is truthy)
// false > 3 → false
// Important: operator precedence matters here

// ==============================
// TASK 1 – Basic Arithmetic
// ==============================

// Take two numbers from user
// Print sum, difference, product, quotient, remainder, power

// ==============================
// TASK 2 – Increment Practice
// ==============================

// Take a number
// Add 5 using +=
// Subtract 3 using -=
// Multiply by 2 using *=
// Print final result

// ==============================
// TASK 3 – Comparison Check
// ==============================

// Take two numbers
// Check:
// Greater than
// Less than
// Equal
// Print all results

// ==============================
// TASK 4 – Loose vs Strict Equality
// ==============================

// Take two inputs from user
// Compare using ==
// Compare using ===
// Print both results

// ==============================
// TASK 5 – Divisibility Check
// ==============================

// Take a number
// Check if divisible by 2 AND 3
// Print true or false

// ==============================
// TASK 6 – Logical OR Practice
// ==============================

// Take age and income
// If age > 18 OR income > 20000
// Print "Eligible"
// Else print "Not Eligible"

// ==============================
// TASK 7 – Power Calculator
// ==============================

// Take base and exponent
// Calculate using ** operator
// Print result

// ==============================
// TASK 8 – Remainder Logic
// ==============================

// Take a number
// If remainder when divided by 10 equals 0
// Print "Multiple of 10"

// ==============================
// TASK 9 – Truthy Falsy Practice
// ==============================

// Declare a variable with value 0
// Apply ! operator
// Print result
// Try same with 100

// ==============================
// TASK 10 – Operator Combination
// ==============================

// Take three numbers
// Check if first number is greater than second
// AND second greater than third
// Print true or false
