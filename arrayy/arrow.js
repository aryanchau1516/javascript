// using arrow functon
let sum = (a,b) => {
    return a*b
}
console.log(sum(10,3))

// usng normal functon

const d = function (a,b){
    return a*b
}
console.log(d(12,3))  // normal way 

// count a vowel in a string
let str = "aryanchau"
function countVowel(str){
let count =0
for(const char of str){
    if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'){
        count++
    }
}
return count
}
console.log("vowel in "+str +" :"+countVowel(str)) //vowel in aryanchau :4