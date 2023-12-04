var num=10

let result=function f()
{
    console.log("num from inside the function but before redeclare and initialize:",num)
    var num=20
    console.log("num from inside the function:",num)
}

result()
console.log(result)