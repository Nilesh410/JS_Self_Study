var num=10 //global scope

function f() //global scope
{
    var num=20 //functional scope
    console.log(num)
}

f()