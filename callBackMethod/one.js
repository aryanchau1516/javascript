/*
🔷 What is a Callback Function?
A callback function is a function passed as an argument to another function, and called inside that function.

It's used for delayed execution, especially in:

1..Async tasks
2..Events
3..Array methods like forEach(), map(), etc.
*/

function show() {
    console.log("this is shw method")
}

function greet(name, showw) {
    console.log(`the name is : ${name}`)
    showw()
}

greet("aryan",show)