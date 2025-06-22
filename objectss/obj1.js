//🧱 What is an Object in JavaScript?
//An object is a collection of key - value pairs used to store and organize data.
let person = {
    name: "Aryan",
    age: 22,
    isStudent: true
};
//Each key (also called property) is a string, and each value can be:
//a string, number, boolean, array, function, object, etc.


let student = {
    name: "Aryan",
    age: 21,
    courses: ["JS", "Kotlin", "DSA"],
    isActive: true,
    greet: function () {
        return "Hello " + this.name;
    }
};

console.log(student.name);          // Aryan
console.log(student.courses[1]);    // Kotlin
console.log(student.greet());       // Hello Aryan

console.log(student["name"]); // Aryan

//🔁 Update or Add Properties
student.age = 22;         // Update
student.city = "Delhi";   // Add new property
//❌ Delete a Property
console.log(student);

delete student.isActive;

//📌 Looping Through an Object
for (let key in student) {
    console.log(key, ":", student[key]);
}

//🔐 this Keyword
//Inside a method, this refers to the current object:
let user = {
    name: "Aryan",
    sayHello: function () {
        console.log("Hi, I am " + this.name);
    }
};

user.sayHello(); // Hi, I am Aryan

//🧪 Nested Objects
let user2 = {
    name: "Aryan",
    address: {
        city: "Delhi",
        pin: 110001
    }
};

console.log(user2.address.city); // Delhi


// 🔎 Built -in Object Methods....

// | Method | Description |
// | ---------------------------- | ----------------------- |
// | `Object.keys(obj)` | Returns all keys |
// | `Object.values(obj)` | Returns all values |
// | `Object.entries(obj)` | Returns key - value pairs |
// | `Object.hasOwnProperty(key)` | Checks if key exists |

console.log(Object.keys(student));   // ["name", "age", "courses", ...]
console.log(Object.values(student)); // ["Aryan", 22, ["JS",...]]


  