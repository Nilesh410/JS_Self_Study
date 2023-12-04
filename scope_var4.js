//console.log("num from the outside the function but before the decleration and initialize:",num)
//when line 4 is not there then shows a reference error num is not defined
//output:-undefined
//var num=10 //global scope

function f() //global scope
{
    console.log("num from inside the function but before redeclare and initialize:",num)
    //output: undefined due to hoisting of var variable 
    var num=20 //functional scope
    console.log("num from inside the function:",num)//access the functional scope value
}
 
f()
console.log("num from the outside the function:",num)//access the global scope value
//num is not a defined