/* Que:- What is the higher order function:- 
   Ans:-  A function that returns a function or 
          takes other functions as arguments is called a higher-order function.
  Que:- which are the inbuilt functions are higher order function in JS
  Ans:- map, filter, setTimeout

  Que :- what is call back function?
  Ans:- Function that pass to function as a argument then it is called as call back function 

  Que:- what is the first order function?
*/

// function salaryCal1(salary)
// {
//     return salary*0.7
// }

// // setTimeout(salaryCal(250000),1000)

// let salaryCal=(salary)=>
// {
//     return salary*0.7
// }

// //setTimeout(salaryCal,1000);
// setTimeout(()=>{console.log(salaryCal(250000))},1000)//175000
// setTimeout(()=>{console.log(salaryCal1(250000))},1000)//175000

// setTimeout(function(){
//     console.log(salaryCal1(270000))
// },1000)

//Second Example

let employeSalary=[50000,20000,25000,40000,70000]
console.log(employeSalary);
let result=employeSalary
            .filter((salary)=>{return salary>30000})
            .map((ele)=>{let finalsalary=(ele-(ele*0.10))
                         return finalsalary})


console.log(result);
let result1=employeSalary.map((ele)=>{
    let finalsalary
    if(ele>30000)
    {
       finalsalary=(ele-(ele*0.10))
    }
    else{
        finalsalary=ele
    }
    return finalsalary
})

console.log(result1)


