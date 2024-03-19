let num1=10,num2=5;

function addition(value1,value2)
{
    let result=value1+value2;
    return result;
}

let result1=addition(num1,num2);
console.log(result1);

/*
   Any JS code : create two execution context 
   1) Global Execution context -> represented by this 
   2) Functional Execution Context

   JS-> run in two phases 
   A) Memory Creation Phase
      -> allocates the memory for variable and function 
   B) Execution Phase-> execute the statements
      -> assign the value to the variable and perform the expresstion 
      -> as well as for function calling statement for that create new exection context and 
         its consist of new variale environment and execution thread

    call stack :- In memory process we have structure to manage function whatever we called 
    whenever we called the function, that function JS pushed into the call stack and finished its execution then 
    its pop from the call stack 
  */