let arr=[1,2,3,4,5,6,7,8,9,10]
//1
arr.forEach((ele)=>{
    console.log(ele) //it shows the result vertically on terminal, we want horixonatlly then how
})

//2
let output=""
arr.forEach((ele)=>
{
    output+=ele+" "
})
console.log(output) //show the same result horizontally
console.log(output.trim())

//3
arr.forEach((ele)=>{
    process.stdout.write(ele+" ") //this works for only node js environment not for browser environment
})


