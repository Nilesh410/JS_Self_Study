// function can return the function definition 

function fun_returnfun()
{
    console.log("This is from the function definition that return as function");
    return function return_fun(){
        console.log("Message from the returned function");
    }
}

let result= fun_returnfun();
console.log(result); //they hold the complete function as value 
