//var can redelcare with same name and initalize withinn the same scope 
console.log("num from the outside the function but before the decleration and initialize:",num)
//output:-undefined
var num=10 //global scope
var num=40 //global scope
function f() //global scope
{
    console.log("num from inside the function but before redeclare and initialize:",num)
    //output: undefined due to hoisting of var variable 
    var num=20 //functional scope
    console.log("num from inside the function:",num)//access the functional scope value
    var num=30 //again u can redeclare and assign new value within the same scope
    console.log("num from inside the function:",num)
}
 
f()
console.log("num from the outside the function:",num)//access the global scope value
//but updated value is coming 
//num=40
//so var is mutable