//Example of function with default parameter and does not pass any value to the parameter then what happend
/* Function with rest operator 
If function dont know how many parameter they have to take then they used rest operator 
or we dont know exactly how many argument will be passing to the function definition then in the function 
definition we used the rest operator.
syntax :- ...variable name 

*/

function showCartItemValues(item1,item2,...items)
{
    console.log(items)//they convert rest values in array
}

showCartItemValues(100,200,300,400,500)