/* const func=new Function('value','return value*value');
console.log(func(2)); //4
console.log(typeof(func)) //function 
console.log(typeof(func())) //number */

console.log(func(2)); //can not access func before initialization 
var func=new Function('value','return value*value');
