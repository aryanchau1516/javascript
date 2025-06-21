// trim()
//toUpperCase()  its convert the string in upper case
// toLowerCase() convert  in lowercse
//slice()  start index to end index no incllude its give strin g in under the parameter exclude last parameter


let first="        1arryfdfdfdfdvdv     ";
// first[3]   its print the chracter of 3 index
console.log(first[2]);
first.length; // its define the length
console.log(first.length);
console.log(first[first.length-1]);  // its give last endex

let newString=first.trim();  // trim is use for the deleting the space in a string
console.log(newString);  // hhere we print the new string without space
console.log(newString.length);// here the updated string length
 newString=newString.toUpperCase(); // convedrting in uppercse
console.log(newString);
newString= newString.toLowerCase();  // convert in lower case
console.log(newString);  
console.log(newString.slice(4,10));
