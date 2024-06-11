const arr=["MAHARASHTRA","KERLA","GOA","PUNJAB","J&K"]

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    
    if(element==="GOA")
    {
        //break
        continue
    }
    console.log(`array element at index ${index}=${element}`)
}
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    
    if(element==="GOA")
    {
        break
       
    }
    console.log(`array element at index ${index}=${element}`)
}