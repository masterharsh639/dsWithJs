/* 3. Find the sum of all elements in an array. */
const arr=[1,2,3,4,5,6,7,8,9];

function findSum(){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}

console.log(findSum(arr));