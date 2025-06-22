/*
🔷 Arrays in JS are:
Dynamically typed (can hold anything)

Resizable (you don’t need to define size)

Index-based (starts at 0)
typeof [1, 2, 3]; // Output: "object"

✅ JavaScript arrays can contain any type of data — even mixed
let myArray = [42, "Hello", true, null, undefined, {name: "Aryan"}, [1, 2, 3], () => console.log("Hi")];

*/
// let ar = [12, 13, 13, 13, 345, 2]
// console.log(ar)
// console.log(ar.lastIndexOf(2))
// arr2 = [4, 2, 4]
// console.log(arr2)

let data = [
    123,                            // number
    "Aryan",                        // string
    true,                           // boolean
    null,                           // null
    undefined,                      // undefined
    { id: 1, name: "Item" },        // object
    [4, 5, 6],                      // nested array
    function () { return "Hi"; }     // function
];

console.log(data[3]); // Output: null


// for (let i = 0; i < data.length; i++) {
//     console.log("the data" +i +":"+ data[i])
// }

// for (let i = 0; i < data.length; i++) {
//     console.log(`the data ${i} : ${data[i]}`);
// }

for (let value of data) {
    console.log(`the value is ${value}`)
}

/*
✅ 1. Classic for loop

for (let i = 0; i < data.length; i++) {
    console.log("Classic For:", data[i]);
}
✅ 2. for...of loop (ES6+)

for (let value of data) {
    console.log("For...of:", value);
}
✅ 3. for...in loop (for index-based iteration)

for (let index in data) {
    console.log("For...in:", data[index]);
}
✅ 4. forEach() method

data.forEach((item, index) => {
    console.log("forEach:", item);
});
🧠 Notes:
Loop Type	Use Case
for	Traditional, full control (index, step, etc.)
for...of	Best for reading values
for...in	Best for object keys or array indexes (use with caution on arrays)
forEach()	Clean and readable functional approach
*/
  