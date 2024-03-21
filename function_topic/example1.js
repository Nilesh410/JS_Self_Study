/* Que 1):- what is the function ?
    Function :- performing the perticular task or operation and we can call multiple time without 
    writing reapeadly

    Que 2) what is the syntax of function // way to define function in JS 
    There are different way to define function in JS 
    1. Function Decleration/ function Definition / Function Constant
    Syntax:- function functionname(parameter name)
    {
        function definition
    }
    calling :- function name()

    2. Function expression 
    Syntax :- 
    let variablename= function functionname()
    {
        function defintion 
    }
    calling:- variablename()

    3. Anonymous Function:- those function has dont have any name 
    Syntax:
    let variabel name=function()
    {
        function definition 
    }
    calling variablename()
    
    4. IIFL :- Immediately Invoked Function Expression Function executes immediately after its decleration and used anonymous property
    syntax :- 
        (function () {
            console.log("Welcome to Javascript");
            })();
    5. Arrow Function 
    Syntax :- 
    let variable name=(arument list)=>{
        function definition }
    }
    6. Constructor Function 
    The concept of a function constructor is to create a function object which executes in the global scope. 
    It can be used to create multiple objects that are similar. 
    The function constructor has similar functionalities as the function expression.
     A constructor function is called with the new keyword to create an object. 
     The Function( ) is the constructor which houses the arguments:
     example1
        var F = new Function(arg1, functionBody)
        var F = new Function(arg1, arg2, functionBody)
        var F = new Function(arg1, arg2, .........., argN, functionBody)

      example 2
        / new Function creates a new function object 'multiply'
        const multiply = new Function('a', 'b', 'return a * b');

        console.log(multiply(2, 6));
        // expected output: 12

      example 3
        // constructor function
        function Person() {
            this.name = "Anita",
            this.age = 21
        }
        // create an object
        const person = new Person();

        //access properties
        console.log(person.name);
        console.log(person.age);

 */
//1
/* function sayMyNme(name)
{
   console.log(`my name is ${name}`) 
}

sayMyNme("Nilesh") */


//2
/* let myname=function(name)
{
   console.log(`my name is ${name}`) 
}

myname("Nilesh") */

//3
/* let myname=(name)=>{
    console.log(`my name is ${name}`)
}

myname("Nilesh") */

//4
/* (function(name){
    console.log(`my name is ${name}`)
})("Nilesh Shirude") */

//5 Constructor Function 

let myname=new Function('name','console.log(`my name is ${name}`)')
myname("NSS")