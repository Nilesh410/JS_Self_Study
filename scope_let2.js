let num=10

function f()
{
    let num=20
    console.log("num value within function but after redclare:",num)
}
f()
console.log("num value from ouside the function:",num)