/* Que 1) what is function hoising ? 
Ans:- calling the function before its declaration and definition and its execute the definition
Function hoisting is applicable only to function decleration not the function expression properties
*/

//1
/* sayMyname("Nilesh") //output :- function execution result My name is Nilesh
function sayMyname(name)
{
    console.log(`My name is ${name}`)
} */


//2
/* myname("Nilesh") //output: error-> can not access myname before initialization
let myname=function(name)
{
   console.log(`my name is ${name}`) 
} */

//3
/* myname("Nilesh") //output error same as above like anonymous function 
let myname=(name)=>{
    console.log(`my name is ${name}`)
} */

/* myname("NSS")  //same error
let myname=new Function('name','console.log(`my name is ${name}`)') */



