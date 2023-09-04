/*  Concatenate two strings without using the concatenation operator.  */

let str1="geeksforgeeks";
let str2="geeks"
function StringConcat(){
    let str3=str1.push(str2).join('');
    console.log(str3)
}

StringConcat()