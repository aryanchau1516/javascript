// while loop : same as c language
let data = [
    123,                            // number
    "Aryan",                        // string
    true,                           // boolean
    null,                           // null
    undefined,                      // undefined
    { id: 1, name: "Item" },        // object
    [4, 5, 6],                      // nested array
    function () { return "Hi"; }    // function
];


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
let n1=0;
while (n1<90) {
    console.log(n1)
    n1++
    
}
