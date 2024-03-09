
/*
    In this article, we explain what a prototype is, how prototype chains work, and how a prototype for an object can be set.

    Prototype:- Prototypes are the mechanism by which JavaScript objects inherit features from one another. 
    
    All primitive data types, except null and undefined, have their corresponding object wrapper types, which provide useful methods for working with the primitive values.
    null- indicates the absence of object
    undefined - indicates the absence of value

    Every object in JavaScript has a built-in property, which is called its prototype. 
    The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. 
    The chain ends when we reach a prototype that has null for its own prototype.

    The standard way to access an object's prototype is the Object.getPrototypeOf() method.

    When you try to access a property of an object: 
    if the property can't be found in the object itself, the prototype is searched for the property. 
    If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, 
    or the end of the chain is reached, in which case undefined is returned.


*/

// const myobject={
//     city:"Pune",
//     state:"Maharashtra",
// }
// console.log(myobject)
// console.log(Object.getPrototypeOf(myobject));

const myDate=new Date()
let object=myDate

do{
    object=Object.getPrototypeOf(object);
    console.log(object);
}while(object);