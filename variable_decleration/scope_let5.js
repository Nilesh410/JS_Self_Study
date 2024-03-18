let num=10

if(num>5)
{
    if(num>7)
    {
        let num=20
        let a=30;
        console.log("num value from inner if block:",num)
    }
    console.log("num value after inner if block:",num)
    console.log(a) //reference error:- a is not defined
}
else{
    console.log("num is less than 5 value")
}