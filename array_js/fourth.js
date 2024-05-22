/* 
includes:- Determines whether an array includes a certain element, returning true or false as appropriate.

@param searchElement — The element to search for.

@param fromIndex — The position in this array at which to begin searching for searchElement.

2.indexOf:- 
Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

@param searchElement — The value to locate in the array.

@param fromIndex — The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
 */
let arr1=new Array(10,20,"ABC",true,23.2)
console.log("arr1=",arr1)
console.log(arr1.includes("ABC"));
console.log(arr1.includes("ABC",3));//second parameter for searching from which index of array

console.log(arr1.indexOf("NSS"));//-1 if ele is not present 

