const income={
    value:108,
     monthly()
    {
       return this.value*108
    },
    yearly:()=>{
        return 108*this.value
    }
}
console.log(income.monthly())
console.log(income.yearly())