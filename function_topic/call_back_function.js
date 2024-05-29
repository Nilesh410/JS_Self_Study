const func=(a,b)=>{
    let number=a+b;
    console.log(number);
    console.log(this);
}
func(2,3)

const func1=(a,b)=>(a+b)
let result=func1(2,3)
console.log(result)

const func2=(a,b)=>a+b
let result1=func2(2,3)
console.log(result1)

const func3=(a,b)=>({num1:a,num2:b})
let result2=func3(2,3)
console.log(result2)