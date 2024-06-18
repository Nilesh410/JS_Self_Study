function argument(...arg) //this is spread operator
{
    console.log(arg) // they a take multiple value in array format
    console.log(typeof arg) //object => because in JS they does not have any datatype as an array  
    console.log(Array.isArray(arg))//true
}
argument(108)