/* for of use for the display the array elements without condition 
for of also use for the string 
But for of can not use for the iteration of the object elements  */
//1) Array 
const arr=["MH","DL","KA","TN","KL","MP","GJ"]
/* for (const ele of arr) {
    console.log(ele)   //MH GJ .......
} */

//2) Array of object
/* const obj_arr=[{MH:"Maharashtra"},{DL:"Delhi"},{KA:"Karnataka"}]
for (const iterator of obj_arr) {
    console.log(iterator) //show the array elements as an object
} */

//3) String 
/* const str="Nilesh Suresh Shirude"
for (const iterator of str) {
    console.log(iterator);//Nilesh Suresh Shirude
} */

//4) Object 
/* const obj={
    MH:"Maharashtra",
    DL:"Delhi",
    KA:"Karnataka"
}
for (const iterator of obj) {
    console.log(iterator) //object is not iterable 
} */