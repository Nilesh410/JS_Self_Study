let A

function fitch()
{
    A=7
    console.log(A)
}
console.log(A)
fitch()

console.log(A)
//Unlike let, var declarations are hoisted to the top of their containing scope, 
//but the assignment is not hoisted. This means the declaration is moved to the top, 
//but the value assignment happens where it originally appears in the code.

