// // strings
// // a sequence of character (alphabtes, numbers, special symbols and whitespace) enclosed
// // in single (' '), double quotes (" ") or backticks (` `)

// // get the length of string (numbe of characters encluding space)

// // .length property is used to get the number of characters in a string

// // console.log("hello world".length);

// // how to know if something is a string
// // "typeof" keyword returns the data of the given value / variable

// // var myName = "john doe";
// // console.log(typeof myName);
// // console.log(typeof "john doe");

// // Note:  the value taken as input using the prompt function
// // is always of type "String" by default, but can be converted into
// // supported data type

// // var myName = prompt("enter your name : ");
// // console.log(myName, typeof myName);

// // var myAge = Number(prompt("enter your age : "));
// // console.log(myAge, typeof myAge);

// // var salary = parseInt(prompt("enter your salary : "));
// // console.log(salary, typeof salary);

// // var height = parseFloat(prompt("enter your height : "));
// // console.log(height, typeof height);

// // concatenation :
// // adding two or more strings together, using the "+" operator

// // var first_name = prompt("Enter first name :");
// // var last_name = prompt("Enter last name :");
// // var age = Number(prompt("Enter age : "));

// // console.log(
// //   "hello world my name is " +
// //     first_name +
// //     " " +
// //     last_name +
// //     " and i am " +
// //     age +
// //     " years old."
// // );

// // console.log(3 + 3);
// // console.log("3" + "3");
// // console.log("3" + 3);
// // console.log(+"3" + 3);
// // console.log(-"3" + 3);

// // // unary + and -
// // console.log(+"3");
// // console.log(-"3");
// // console.log(-"3" - 3);

// // template / string literal
// // string is created using ` ` backticks and values / variables / expression are inserted in ${ }

// // console.log(
// //   `Hello world my name is ${first_name} ${last_name} and i am ${
// //     age * 2
// //   } years old.`
// // );

// // not recommended
// // console.log(
// //   "Hello world my name is",
// //   first_name,
// //   last_name,
// //   "and i am ",
// //   age,
// //   "years old."
// // );

// // indexing
// // counting starting from 0 used to access character of a string

// // str[index]

// // - first character is always on the 0th position
// // - last character is always on str.length - 1 = th position

// // h e l l o
// // 1 2 3 4 5 : normal counting (used to count length)
// // 0 1 2 3 4 : positive indexing (l -> r) (used to access characters)
// //-5-4-3-2-1 : negative  indexing (r -> l)

var text = "hello world";
// // console.log(text[0]);

// // console.log(text[-1]);

// // methods

// // access character  of string using both positive and negative indexing
// console.log(text.at(0));
// console.log(text.at(-1));

// // access character  of string using only positive  indexing
// console.log(text.charAt(0));
// console.log(text.charAt(-1));

// // return a new string after concatenation
// console.log(text.concat(" my name is john ", "doe"));

// // return a new string with all letters in lowercase
// // console.log(text.toLowerCase());

// return a new string with all letters in uppercase
// console.log(text.toUpperCase());

// return slice of string (supports both + , -  )
// console.log(text.slice(0, 5)); // 0-4  start (inclusive) , stop (exclusive);
// return slice of string (supports only +  )
// console.log(text.substring(0, 5)); // 0-4  start (inclusive) , stop (exclusive);

// console.log(text.slice(-5)); // start -5 , end
// console.log(text.substring(-5)); //

// replace first occurance of substring with the new string
// console.log(text.replace("l", "x"));
// console.log(text.replace(/l/g, "x"));

// replace all occurances of substring with the new string
// console.log(text.replaceAll("l", "x"));

// take a brand name as input and output it as
// first and 3rd character in uppercase and rest in lowercase

// mcdonalds => McDonalds
// var brand = prompt("Enter brand name : ");
// console.log(
//   `${brand[0].toUpperCase()}${brand[1].toLowerCase()}${brand[2].toUpperCase()}${brand
//     .slice(3)
//     .toLowerCase()}`
// );
// console.log(
//   `${brand[0].toUpperCase()}${brand
//     .slice(1, brand.length - 1)
//     .toLowerCase()}${brand.at(-1).toUpperCase()}`
// );

// split string into an array

console.log(text.split()); // entire string as a single item
console.log(text.split("")); // each character as a single item
console.log(text.split(" ")); // each word as a single item
console.log(text.split("o"));
console.log(text.split("o", 2));

// return index of first occurance of the substring
console.log(text.indexOf("o")); // subtring
console.log(text.indexOf("o", 5)); // substring , start index

// return index of last occurance of the substring
console.log(text.lastIndexOf("o")); // subtring
console.log(text.lastIndexOf("o", 5)); // substring , end index (exclusive)

console.log("hello@email.com".includes("@"));
console.log("hello@email.com".includes(".com"));
console.log("hello@email.com".includes("gmail"));

console.log("hello@email.com".includes("@", 6)); // search string, start position (inclusive)

console.log("apple".localeCompare("cherry"));
console.log("cherry".localeCompare("apple"));
console.log("apple".localeCompare("apple"));

var chars = "rat cat mat bat pop";
console.log(chars.match(/at/g));

console.log(text.endsWith("d"));
console.log(text.endsWith("o", 5)); // search string ,  end position (exclusive)

console.log(text.startsWith("d"));
console.log(text.startsWith("h")); // search string
console.log(text.startsWith("w", 6)); // search string ,  start position (inclusive)

console.log(text.padStart(15)); // new length (more than the actual length)
console.log(text.padStart(15, "*/")); // new length (more than the actual length) , fill string

console.log(text.padEnd(15)); // new length (more than the actual length)
console.log(text.padEnd(15, "*/")); // new length (more than the actual length) , fill string

console.log(text.padStart(15, "*$").padEnd(19, "ab"));

var x = 234;
console.log(x.toString());

// console.log(text.search(/o/g));
