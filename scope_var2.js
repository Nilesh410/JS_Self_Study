var num=10 //global scope

function f() //global scope
{
    console.log("num from inside the function but before redeclare and initialize:",num)
    //output: undefined due to hoisting of var variable 
    var num=20 //functional scope
    console.log("num from inside the function:",num)//access the functional scope value
}
 
f()
console.log("num from the ouside the function:",num)//access the global scope value