//How to pass object as an argument to the function 

function userDetails(userData)
{
    console.log(`usrname is ${userData.username} and password is ${userData.password}`)
}

userDetails({
    username:"Nilesh",
    password:"1233"
})