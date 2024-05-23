/* Array :- Collection of elements of different data types 
Syntax :- let variable_name=[elements value]
       or let variable_name=new Array(array element with comma seperated) 

Array method:-
1.length
2.push 
3.pop
4.unshift
5.shift
6.join 
7.
*/

const arr1=[10,20,"ABC",true,23.2]
console.log("arr1=",arr1);

const arr2=new Array(25,12,"PQR",false);
console.log("arr2=",arr2);

arr1.push("LMN");
arr1.push(null);
console.log("arr1=",arr1);
arr1.pop();
console.log("arr1=",arr1);

arr2.unshift("DEF");
arr2.unshift(undefined);
console.log("arr2=",arr2);
arr2.shift();
console.log("arr2=",arr2);

console.log(arr1.length);
console.log(arr2.length);

