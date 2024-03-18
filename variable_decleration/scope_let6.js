let num=10

let result=function f()
{
    //console.log(num)//error :- can not access before initialization
    let num=20
    console.log("num from name function expression:",num)
}

console.log("num from the global scope:",num)
result()


//same scope for function name expression

let result1=function()
{
   //console.log("num from the ananymous function expression:",num) //reference error:- can not access before initialization
   let num=30
   console.log("after value change in ananymus function:",num)
}
result1()
console.log("num from the global scope:",num);

// // same behaviour for ananymous function expression

(function f3(){
    //console.log("num value from IIFE:",num) //reference error:- can not access before initialization
    let num=40
    console.log("num value from IIFE:",num)
})()
console.log("num from the global scope:",num)
