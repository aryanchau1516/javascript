function add(a, b, c) {
    return a+b+c
}

function show(name, callback) {
    console.log(`sum of  ${name} is : ${callback}`)
}

show("aryan",add(2,3,4))