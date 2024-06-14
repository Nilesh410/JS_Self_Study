const arr=[0,1,2,3,4,5,6,7,8,9,10]

//Find out the numbers those square is even value
let result=arr.map((ele)=>ele*ele).filter((ele)=>ele%2===0).map((ele)=>Math.sqrt(ele))
console.log(`input array:=${arr}`)
console.log(`output array:=${result}`)

/* Out put 
input array:=0,1,2,3,4,5,6,7,8,9,10
output array:=0,2,4,6,8,10
 */