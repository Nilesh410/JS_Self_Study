console.log("Study the scope of var variable");
let a=20
if(a>10)
{
    let num=10;
    console.log("value of num:",num);
}
else
{
    console.log("value of num:",num);
}

console.log("value of num:",num);