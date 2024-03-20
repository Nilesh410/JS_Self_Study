/*  JS function with differnt data types
    There are different way to define function in JS 
    1. Function Decleration/ function Definition / Function Constant
    Syntax:- function functionname(parameter name)
    {
        function definition
    }
 */

//demo1
function calculateaddition(num1,num2)
{
   console.log("addition=",num1+num2);
}
calculateaddition(2,3)  //output:- 5
calculateaddition(2,"abc") //output:- 2abc
calculateaddition(2,'n') //output:- 2n
calculateaddition(2,12.5) //output:- 14.5
calculateaddition(2,false) //output:- 2
calculateaddition(2,undefined) //output:- Nan
calculateaddition(2,null) //output:- 2

//demo2
console.log(typeof(undefined)) //type of undefined -> undefined
console.log(typeof(NaN)) //type of Nan -> number
console.log(typeof(null)) //type of null-> object
console.log(typeof(calculateaddition)) //type of function -> function 




// function calculateaddition(num1,num2)
// {
//    console.log("addition=",num1+num2);
// }

// calculateaddition(2,3)
//output: addition=5

/* 
//Questions :-
1)what are the different data types in JS
2)what is the difference between Nan and null

*/
