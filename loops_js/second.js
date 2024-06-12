const arr=["Jaipur","Mumbai","Luknow","Baroda","Raipur"]
let index=0;
while(index<arr.length)
{
    if(arr[index]==="Luknow")
    {  index++
       continue
    }
    console.log(`arr element at index ${index}= ${arr[index]}`)
    index++
}