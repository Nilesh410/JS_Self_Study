/* For in loop is used for the iteration of object
Also used for the array but it shows keys value of key means index 


for in loop applicable to 
array => yes 
object=>yes 
string => yes 
array of object => yes 
map=> no
*/

//1) object
/* const prog_lang={
    JS:"JAVA Scipt",
    C :"C language",
    CPP :"C++",
    SQL:"Scripted Query Language"
}

for (const key in prog_lang) {
    console.log(key) //shows only key elements 
    console.log(prog_lang[key]) //shows value of key 
    console.log(`value for the key ${key} is :=${prog_lang[key]}`)
} */

//2)Array of Object
/* const obj_arr=[{MH:"Maharashtra"},{DL:"Delhi"},{KA:"Karnataka"}]
for (const key in obj_arr) {
    console.log(key) //it shows indexing 
    console.log(obj_arr[key])//it iterate every element value as per the indexing 
    } */

//3) String
/* const str="Nilesh Suresh Shirude"
for (const key in str) {
    console.log(key) //staring from 0 index 
    //console.log(str[key]) //show the char value at every index
} */

//4) Map

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

  for (const key in company) {
    console.log(key) // does not show anything because map is not iterable 
  }