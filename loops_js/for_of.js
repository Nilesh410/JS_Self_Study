/* for of use for the display the array elements without condition 
for of also use for the string 
But for of can not use for the iteration of the object elements 

for of use or not 
1) array =>yes
2) array of object=>yes
3) string => yes
4) object => no 
5) map => yes
*/
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

const company=new Map();
company.set("IT","Infosys");
company.set("Auto","Tata Motor")
company.set("Pharma","Sunpharma")
//console.log(company); 
/* Output:- Map(3) {
    'IT' => 'Infosys',
    'Auto' => 'Tata Motor',
    'Pharma' => 'Sunpharma'
  } */
for (const key of company) {
    console.log(key);    //result in the form of array, each element of map conver into array
}
for (const [key,value] of company) { //destructure of array
   // console.log(key) //result in the form of array, each element of map conver into array
    console.log(key,":-",value);
}