// trim()
//toUpperCase()  its convert the string in upper case
// toLowerCase() convert  in lowercse
//slice()  start index to end index no incllude its give strin g in under the parameter exclude last parameter

/**
 * 🟢 1. slice(start, end)
Returns a portion of the string.
 */

let str = "JavaScript";

// From index 4 to end:
console.log(str.slice(4));      // "Script"

// From index 0 to 4 (not including 4):
console.log(str.slice(0, 4));   // "Java"

// 🟢 2. substring(start, end)
// Like slice, but doesn’t support negative indexes.

console.log(str.substring(4));     // "Script"
console.log(str.substring(0, 4));  // "Java"

// 🟢 4. charAt(index)
// Returns the character at a specific index.

console.log(str.charAt(2));    // "v"


// 🟢 5. charCodeAt(index)
// Returns the UTF - 16 code of the character at index.

console.log(str.charCodeAt(0)); // 74 (code for 'J')

// 🟢 6. indexOf(substring)
// Finds the first occurrence of a substring.

console.log(str.indexOf("S"));     // 4
console.log(str.indexOf("script")); // -1 (case-sensitive)

// 🟢 7. lastIndexOf(substring)
let str2 = "hello hello";
console.log(str2.lastIndexOf("l"));  // 9

//🟢 8. includes(substring)
//Returns true / false if string contains a substring.
console.log(str.includes("Script")); // true
console.log(str.includes("java"));   // false (case-sensitive)

//🟢 13. split(separator)
//Converts string to array.
let fruits = "apple,banana,mango";
console.log(fruits.split(",")); // ["apple", "banana", "mango"]

//🟢 14. concat()
//Merges strings.
let a = "Hello", b = "World";
console.log(a.concat(" ", b)); // "Hello World"

//🟢 15. repeat(n)
//Repeats the string n times.
console.log("ha".repeat(3)); // "hahaha"


// let first="        1arryfdfdfdfdvdv     ";
// // first[3]   its print the chracter of 3 index
// console.log(first[2]);
// first.length; // its define the length
// console.log(first.length);
// console.log(first[first.length-1]);  // its give last endex

// let newString=first.trim();  // trim is use for the deleting the space in a string
// console.log(newString);  // hhere we print the new string without space
// console.log(newString.length);// here the updated string length
//  newString=newString.toUpperCase(); // convedrting in uppercse
// console.log(newString);
// newString= newString.toLowerCase();  // convert in lower case
// console.log(newString);  
// console.log(newString.slice(4,10));
