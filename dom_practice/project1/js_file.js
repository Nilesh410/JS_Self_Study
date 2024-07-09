//DOM :- DOM is the data representation of the object 
//that are the content of the document on the web
// It is a programming interface for the web document
// So the program can change the document strcture,style and content

//How to access the element/object of document

let data=document.getElementById("title");

//How to show the data of object 
console.log(data.innerText);
//innerText
//innerHTML
//textContent

//apply style for the content
data.style.borderRadius="20px";
data.style.backgroundColor="#529"

//access the all attribute value specific value, setAttribute
console.log("id=",data.id)
console.log("classname=",data.className)
console.log("id_attribute=",data.getAttribute('id'))
console.log("class_attribute=",data.getAttribute('class'))
data.setAttribute('class','title_info title_text');

//content
console.log(data.innerText) //Do not show hidden part of element
console.log(data.textContent)//show all content of html
console.log(data.innerHTML)//it return the all contnent as well as html tag also


//access element by querySelector
let data1=document.querySelector("h2")
console.log(data1)
let data2=document.querySelectorAll("h2")
console.log(data2)