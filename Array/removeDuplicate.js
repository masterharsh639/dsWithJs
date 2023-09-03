/* Remove duplicates from an array. */

let arr=[9,6,1,1,3,4,5,6,7,7,8,9];
let duplicate=[];
function removeDupliacate(){
    arr.sort();
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==arr[i+1])
        duplicate.push(arr[i])
    }
    return duplicate;
}

console.log(removeDupliacate());
