// Playing with NaN data type 

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