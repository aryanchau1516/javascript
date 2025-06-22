let arr = ["mau","baliya","luckno"]

//1 using call back function
arr.forEach(function printVal(value){
    console.log(value)// value store each data of the arr array
})
//2 using arraow function
arr.forEach((value,idx,arr)=>{
    console.log(value.toUpperCase() ,idx,arr)
})

let arr1 = [1,2,3,4,5]
arr1.forEach((value)=>{
   console.log(value*value)
})