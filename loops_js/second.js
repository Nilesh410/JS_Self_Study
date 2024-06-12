const arr=["Jaipur","Mumbai","Luknow","Baroda","Raipur"]
let index=0;
while(index<arr.length)
{
    console.log(`arr element at index ${index}= ${arr[index]}`)
    if(arr[index]==="Luknow")
    {  index++
       continue
    }
    index++
}