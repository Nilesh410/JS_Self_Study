const arr=[0,1,2,3,4,5,6,7,8,9,10]
//addition of all array elements

let result=arr.reduce((acc,curr)=>acc+curr,0)
console.log(`input arr:=${arr}`)
console.log(`output array:=${result}`)

//addition of only even elements of array 
let result1=arr.filter((ele)=>ele%2===0).reduce((acc,curr)=>acc+curr,0)
console.log(`input arr:=${arr}`)
console.log(`output array:=${result1}`)