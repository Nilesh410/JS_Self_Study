//Drawback of forEach

let arr=[1,2,3,4,5,6,7,8,9,10]

let elements="";
let out=arr.forEach((ele)=>{
    console.log(ele)
    elements+=ele+" ";
    return elements;
})

console.log(out) //forEach never returns anything, if still u write down the return statement