//Asynchronoous Code

function square(num)
{
    console.log(`Sqaure of ${num}:${num*num}`)
}
console.log("Application Started")
square(4);
// for(let i=0;i<3;i++)
// {
//     console.log("i=",i);
// }

setTimeout(()=>{console.log("3 sec Timer Completed")},3000);
square(5);
console.log("Application ended")

/*
 =>This time JS engine does not wait for the execution of sqaure of 5, 
 =>whenever JS encounter the setTimeOut or browser runtime features then its trigger the request to runtime environment
    and do not wait fot the exection of run time features. 
 =>run time environment complete the execution of setTimeOut function then call back function will be coming in event queue or call stack queue
 => event loop they keep contieously check the main thread is free or not as well as anything is pending to execute in call stack queue.
For More Details:- https://www.jsv9000.app/
*/
