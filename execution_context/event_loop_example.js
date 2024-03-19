function square(num)
{
    console.log(`Sqaure of ${num}:${num*num}`)
}
console.log("Application Started")
square(4);
for(let i=0;i<3;i++)
{
    console.log("i=",i);
}
square(5);
console.log("Application ended")
//This program is example of synchronous JS, here sqaure of 5 is calculated after only the for loop 
//delay of 3 sec 
//JS is waiting to find out the square of 5 till the for loop execute completly - bcoz native code of JS synchronous in nature
