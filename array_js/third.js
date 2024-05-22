/* 1) Join Method :- convert array elements into string format 

2) slice method:- Returns a copy of a section of an array. 
For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

@param start
The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.

@param end
The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array. 

Splice Method:-
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

@param start — The zero-based location in the array from which to start removing elements.

@param deleteCount — The number of elements to remove.

@returns — An array containing the elements that were deleted.*/


let arr1=new Array("ABC","PQR")
let newString=arr1.join()
console.log("arr1=",arr1)
console.log("join output=",newString)

let arr2=new Array(10,20,"ABC",true,23.2)
console.log("arr2=",arr2);
//let arr2_slice=arr2.slice(-1,-3);//[]->empty array
//let arr2_slice=arr2.slice(0,-2);//[ 10, 20, 'ABC' ]
//let arr2_slice=arr2.slice(-2,0);//[ ]
//let arr2_slice=arr2.slice(0,undefined);//[ 10, 20, 'ABC', true, 23.2 ]
let arr2_slice=arr2.slice(undefined,3)//[ 10, 20, 'ABC' ]
console.log("arr2_slice=",arr2_slice);
console.log("arr2=",arr2);

//let arr2_splice=arr2.splice(2,4);
//let arr2_splice=arr2.splice(undefined,4);
//let arr2_splice=arr2.splice(undefined,undefined);
//let arr2_splice=arr2.splice(undefined,-1);
let arr2_splice=arr2.splice(2,-1); //no of elements to delete should not be negative
console.log("arr2_splice=",arr2_splice);
console.log("arr2=",arr2);