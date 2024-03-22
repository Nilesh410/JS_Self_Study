//How the function has return a other function
//Higher Order Function 
function reutrnfunc(message){
    console.log(message)
    return function(){
        return message+"Developer"
    }
}
reutrnfunc("NSS") //NSS 
reutrnfunc("NSS")()//NSS 
console.log(reutrnfunc("NSS")())//NSS NSSDeveloper
let result=reutrnfunc("NSS")
console.log(result)//NSS function 
console.log(result()) //NSSDeveloper
