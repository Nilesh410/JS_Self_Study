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
const {fullname:s_name}=obj1
console.log(s_name);