// Playing with NaN data type 
// 0/0=>NaN
//isfinite(NaN)=>false
//isNaN(NaN)=>true

function func()
{
    return NaN;
}

const result=func()
console.log(result)

//How to check any variable holds the NaN value bcoz we check the below operation then we got false 
if(NaN==NaN){console.log("true")} else{ console.log("false")}
console.log(NaN===NaN) 

//then check with this solution 
if(isNaN(result)) 
{ console.log("true result")}
else{
    console.log("false result")
}

// 0/0 => what is the result in JS
function zerodividebyzero()
{
    return(0/0)
}

const result1=zerodividebyzero()
console.log("zero divide by zero in js=",result1)

if(isFinite(result1))
{
    console.log("zero divide by zerod in js is Nan but its finite")
}
else{
    console.log("zero divide by zero in js is NaN but also its not finite")
}
