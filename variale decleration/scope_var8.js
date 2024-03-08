var num=10
console.log("num from the outside the function:",num)//access the global scope value

let result=function ()
{
    console.log("num from inside the function but before redeclare and initialize:",num)
  //  var num
    console.log("num from inside the function:",num)
}

result() //function is execute
console.log("num from the outside the function:",num)//access the global scope value