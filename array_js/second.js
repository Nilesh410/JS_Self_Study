//check the declaration of array varible with var, let and const and observed the different properties
//var :- redeclare, reassign and manipulate the array
//let :- reassign and manipulate the array elements 
//const :- only manipulation is possible, reassign its not possible

const arr1=new Array("Nilesh","Jyoti","Ridant");
console.log("arr1=",arr1);
arr1.push("Shirude");
console.log("arr1=",arr1);
arr1=["Shirude","Ajay","Soni"];
console.log("arr1=",arr1);
