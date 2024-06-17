for(let i=0;i<5;i++)
{
    setTimeout(()=>{
        console.log(i)
    },5)
}
/* 
for(var i=0;i<5;i++)
{
        setTimeout(()=>{
            console.log(i)
        },5)
   
} */
for(var i=0;i<5;i++)
{
    function number(i)
    {
        setTimeout(()=>{
            console.log(i)
        },5)
    }
   number(i)
}