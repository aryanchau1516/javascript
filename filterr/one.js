/**
 * 🔷 What is filter()?
The filter() method in JavaScript creates a new array by keeping only the elements that pass a certain condition.

✅ It's a higher-order function (like map())
✅ It does not modify the original array

array.filter((element, index, array) => {
  // return true to keep the element
});


🔁 Difference between filter() vs map()
| Feature    | `filter()`                  | `map()`                    |
| ---------- | --------------------------- | -------------------------- |
| Purpose    | Select some elements        | Transform all elements     |
| Return     | Filtered array              | Transformed array          |
| Condition? | Yes, must return true/false | No, returns modified value |
| Skip items | Yes                         | No                         |



 */

// exaple

let nums = [1, 2, 3, 3, 4, 5, 6, 7, 8]
let even = nums.filter(n => n % 2 == 0)
console.log(nums)
console.log(even)

// ✅ Example 2: Filter names with length > 4

let name = ["aryan", "chauhan", "abhishek", "uman", "bhishek"]
let len = name.filter(ele => ele.length > 7)
console.log(name)
console.log(len)


//✅ Example 3: Filter objects (students with marks > 80)

let students = [
    { name: "aryan ", marks: 90 },
    { name: "shivam", marks: 20 },
    { name: "ss", marks: 41 },
    {name:"dd",marks :45}
]
let topStudent = students.filter(stu => stu.marks > 41)
console.log(topStudent.name)

//🔹 Task 4: Extract strings only from a mixed array
let mixedData = [1, "apple", true, "banana", 12, "mango"];

let strings = mixedData.filter(item => typeof item === "string");
console.log(strings); // ["apple", "banana", "mango"]


//🔹 Task 5: Filter users with verified status
let users = [
    { name: "Aryan", verified: true },
    { name: "Priya", verified: false },
    { name: "Raj", verified: true }
];

let verifiedUsers = users.filter(user => user.verified);
console.log(verifiedUsers);


//🔹 Task 7: Filter names that start with 'A'
let names = ["Aryan", "Ajay", "Priya", "Amit", "Neha"];

let aNames = names.filter(name => name.startsWith("A"));
console.log(aNames); // ["Aryan", "Ajay", "Amit"]
