/*  JS function with differnt data types
    There are different way to define function in JS 
    1. Function Decleration/ function Definition / Function Constant
    Syntax:- function functionname(parameter name)
    {
        function definition
    }
 */

//demo1
// function calculateaddition(num1,num2)
// {
//    console.log("addition=",num1+num2);
// }
// calculateaddition(2,3)  //output:- 5 number
// calculateaddition(2,"abc") //output:- 2abc string 
// calculateaddition(2,'n') //output:- 2n string
// calculateaddition(2,12.5) //output:- 14.5 number
// calculateaddition(2,false) //output:- 2 number
// calculateaddition(2,undefined) //output:- Nan number
// calculateaddition(2,null) //output:- 2 number

// //demo2
// console.log(typeof(undefined)) //type of undefined -> undefined
// console.log(typeof(NaN)) //type of Nan -> number
// console.log(typeof(null)) //type of null-> object
// console.log(typeof(calculateaddition)) //type of function -> function 



//Demo 3
function calculateaddition1(num1,num2)
{
   let result=num1+num2;
   console.log(result)
   //return 
   //return result
}

// let result=calculateaddition1(2,3) 
// console.log(result)
//calculateaddition1(2,3)
console.log(calculateaddition1(2,3))

/* 
//Questions :-
1)what are the different data types in JS
2)what is the difference between Nan and null
3)what is difference between function calling using functionname() and console.log(functionname()) 
4)what are the different ways to define function in JS?
*/
