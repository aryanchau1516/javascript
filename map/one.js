/**
 * 🔷 What is map() in JavaScript?
map() is a higher-order array method that creates a new array by applying a function to each element of the original array.

✅ Why use map()?
To transform each element in an array

Returns a new array (does not modify original)

Cleaner and shorter than using a for loop
 */


let arr = [1, 2, 3, 4]

// approach 1
function square(ele) {
    return ele * ele
}


// let brr = arr.map(square)
// console.log(arr)
// console.log(brr)

// approach 2
//✅ Approach Type:
//🔸 Arrow Function
//🔸 Inside a Higher - Order Function(map())
let brr = arr.map(ele => ele * ele)
console.log(arr)
console.log(brr)


// apporch 3
let brr3 = arr.map(function (ele) {
    return ele * ele;
});
console.log(arr)
console.log(brr3)
