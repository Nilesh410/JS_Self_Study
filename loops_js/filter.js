const arr=[0,1,2,3,4,5,6,7,8,9,10]

let new_arr=arr.filter((ele)=>{
    return (ele%2===0 && ele>5)
})
console.log(`input arr:=${arr}`)
console.log(`even arr:=${new_arr}`)