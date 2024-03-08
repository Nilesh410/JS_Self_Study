console.log("num from the outside the function but before the decleration and initialize:",num)
//output:-undefined
var num=10 //global scope

function f() //global scope
{
    console.log("num from inside the function but before redeclare and initialize:",num)
    //output: undefined due to hoisting of var variable 
    num=20 //functional scope
    //we can reinitalize the global var type of variable 
    console.log("num from inside the function:",num)//access the functional scope value
}
 
f()
console.log("num from the outside the function:",num)//access the global scope value
//but updated value is coming 
//num=20
//so var is mutable