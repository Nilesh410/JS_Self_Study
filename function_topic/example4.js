//How to pass object and array as an argument to the function 

function userDetails(userData)
{
    console.log(`usrname is ${userData.username} and password is ${userData.password}`)
}

userDetails({
    username:"Nilesh",
    password:"1233"
})

function arrayElements(arrayData)
{
    console.log(arrayData)
}

arrayElements([12,23,45,24,6,9]) //[12,23,45,24,6,9]