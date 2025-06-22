// typeof operator : define the data type of variablle
// porimitive data types.
//string "aryan"
// number 1,2,3
// boolean & comaprison : its give true and false value
// undefined : jab kisi value ka data type ko value  define nhi krte hai tb  uska typeof undefine aata hai but in const me variable ko value bhi assign krna pdta
//null
//bigint
//symbol
// == its 
// string concatenatation : merging two string in one variable
// template string

let age = 22;
let firstname ="arrya";
console.log(typeof age);  // give the data type
console.log(typeof firstname);

// converting number to string 

age= age + "";  // "age" = string type
console.log(typeof age); // it in the string

// convert string to number.  : apply + sign before the string

let mystr = +"arrry";  // cnvertin str in number
console.log(typeof mystr); // its inthe number 

// 2 nd type string to number
let str1 ="arrry";
str1=Number(str1);
console.log(typeof str1);

// 2nd number to string
let ag1= 34;
ag1= String(ag1);
console.log(typeof ag1);

// str concatanatation
let a= "heloo";
let b="babu";
let newstr = a + " " + b;  // merging the string
console.log(newstr);

// conetry in number.
let newstr1 = a + " " + b;  // merging the string
console.log(typeof(+newstr1));  // its conert in number

// template string...
let agg1=19;
let name= "aryan chauhan";
// print " my name is aryan chauhan and age is 19"
// first rule.

// let aboutme= "My name is " + name + " and age is " + agg1;
// console.log(aboutme);

// second rule.
let aboutme= `my name is ${name} and my age is ${agg1} `;// tab ke upar button `` and $ {var} placeholdar
console.log(aboutme);

// undefine.
let name1;
console.log(typeof name1); // typof is ujndefine

// NULL.
let var1 =null;
console.log(typeof var1); // its give object , it is bug / error in js

// BigInt  : its store big value nubmber
let a1=BigInt(200); // first trule.
let a2= 300n;  // sec rule
console.log(a1);
console.log(a2);
console.log(a1+a2);  // add thge a1 and a2 in big

// boolean..
let num1="8";
let num2 = 8;
console.log( num2>=num1); // true

// == vs === for equality 
console.log(num1==num2); // == not check datatype its only check value if value is same then its give true otherwise false

// != vs !== // !== compore of the value and its data type and != compare on the value
console.log(num1!==num2);
