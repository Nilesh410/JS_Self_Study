var num=10

let result=function f()
{
    console.log("num from inside the function but before redeclare and initialize:",num)
    var num=20
    console.log("num from inside the function:",num)
}
//f()//error f is not defined 
result() //function is execute
console.log(result()) //show function :f()