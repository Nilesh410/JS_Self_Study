function display(marks)
{
    //const result=marks || false; //10 false 3
   // left hand side of or operator any falsy value is coming it just return the right hand side value
   //to avoid this bug we will use null coalescing operator ??

   //Null Coalescing Operator :-The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined,
   //and otherwise returns its left-hand side operand.
   //const result=marks ?? false;
   const result=marks ?? "Absent"; 
    console.log(`Marks:-${result}`)
}

display(10)
display(0)
display(3)