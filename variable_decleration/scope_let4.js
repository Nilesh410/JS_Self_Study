let num=10

if(num>5)
{
    let num=20
    console.log("new value of num:",num)
    if(num>10){
        let num=30
        console.log("local num variable value:",num)
    }
    console.log("num value after inner if block:",num)
}
else {
    console.log("num is less than 5")
}

//scope of let is blocked scope 