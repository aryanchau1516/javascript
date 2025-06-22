const a = [1, 2, 3, 4]
console.log(a)
a[1] = 5
console.log(a)
a[2] = 6
console.log(a)


/*
⚠️ Special Case: const with objects and arrays
const means the reference (address) can’t change — but contents can.

*/
//🔸 For Objects:
const person = { name: "Aryan" };
person.name = "Chauhan"; // ✅ OK
// person = { age: 22 }; ❌ Error
console.log(person)

//🔸 For Arrays:
const nums = [1, 2, 3];
nums.push(4); // ✅ OK
//nums = [5, 6]; // ❌ Error
console.log(nums)
