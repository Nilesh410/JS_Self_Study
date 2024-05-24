const obj1={
    name:"NSS",
    id:559,
    emailid:"shirudenileshs@gmail.com",
    mobileno_active:true,
    address:"Flat No 505,Atharva, Mohan Nagar Cooperative Housign Society",
    fullname:{
        firstname:"Nilesh",
        lastname:"Shirude"
    },
    info:function(){
       console.log(`candidate first name=${this.fullname.firstname} and last name=${this.fullname.lastname}`)
    }
}
const obj2={name:"Nilesh Shirude"}

//1st way to add two objects
//const obj3={obj1,obj2}
//const obj3=Object.assign(obj1,obj2);//previous name key value replace by new one 
const obj3={...obj1,...obj2}
console.log(obj3)

console.log(obj3.hasOwnProperty("name"));