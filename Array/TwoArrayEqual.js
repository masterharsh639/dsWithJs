/*  Check if two arrays are equal */
function checkArrayAreEqual(){
    let n1=arr1.length;
    let n2=arr2.length;

    if(n1!==n2)
        return false;

    arr1.sort();
    arr2.sort();

    for(let i=0;i<n1;i++){
        if(arr1[i]!==arr2[i])
                return false;
  
    }
    return true;
}

let arr1=[9,8,7,6,5,4,3,2,1];
let arr2=[1,2,3,4,5,6,7,8,9];

if(checkArrayAreEqual(arr1,arr2))
    console.log("arrays are same");
else
    console.log("arrays are not same")