/**
 * 🔷 1. reduce() in JavaScript
✅ What is reduce()?
reduce() is used to reduce the array to a single value (sum, product, max, min, etc.)
It processes the array from left to right, accumulating the result.
 */

//✅ Example 1: Sum of all numbers
let nums = [1, 2, 3, 4, 5];

let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15


//✅ Example 2: Find the maximum value
let nums2 = [10, 45, 3, 99, 1];

let max = nums2.reduce((acc, curr) => (curr > acc ? curr : acc));
console.log(max); // Output: 99


/**
 * 🔷 2. sort() in JavaScript
✅ What is sort()?
sort() rearranges the elements of an array in ascending or descending order.

By default, sort() converts elements to strings and sorts lexicographically.

🧠 Syntax:
array.sort((a, b) => a - b); // Ascending
array.sort((a, b) => b - a); // Descending

 */
//✅ Example 1: Sort numbers ascending
let nums3 = [5, 1, 3, 8, 2];
nums3.sort((a, b) => a - b);
console.log(nums); // [1, 2, 3, 5, 8]


let students = [
    { name: "Aryan", marks: 90 },
    { name: "Priya", marks: 75 },
    { name: "Rahul", marks: 85 }
];

students.sort((a, b) => b.marks - a.marks); // Descending
console.log(students);
  