function show() {
    console.log("this is shw method")
}

function greet(name, showw) {
    console.log(`the name is : ${name}`)
    showw()
}

greet("aryan",show)