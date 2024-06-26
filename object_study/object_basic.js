
/*
     Object Definition:- An object is a collection of properties and has a single prototype object. 
                         The prototype may be null.
    Object is created by using two ways:- Literal and Constructor (singleton)
    Object.create();
    
*/
const address=Symbol("add")
const obj={
    name:"NSS",
    id:559,
    emailid:"shirudenileshs@gmail.com",
    mobileno_active:true,
    "address":"Flat No 505,Atharva, Mohan Nagar Cooperative Housign Society",
    fullname:{
        firstname:"Nilesh",
        lastname:"Shirude"
    },
    info:function(){
       console.log(`candidate first name=${this.fullname.firstname} and last name=${this.fullname.lastname}`)
    }
}
console.log(obj);
// console.log(obj.emailid);
// console.log(obj["name"]);
// console.log(obj["address"]);
// console.log(obj.fullname);
// console.log(obj.info())

// obj.gender="Male";
// console.log(obj);
// obj={
//     country:"india",
//     state:"maharashtra"

// } //shows error due to reassign the constant variable 
// console.log(obj)

//Object creation using constructor
//const obj1=Object();
const obj1=new Object();
console.log(obj1)//show empty object 
obj1.name="Nilesh Shirude"
console.log(obj1)