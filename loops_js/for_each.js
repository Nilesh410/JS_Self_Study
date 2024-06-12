//for each is inbuilt for loop as function for the array 
//By using we can iterate in the loop and access indvidual ele
//For each not only access the value also access the index and complete array

const coding_lang=["C","C++","JAVA","JS","Pyhong","Ruby"]

/* coding_lang.forEach(element => {
    console.log(element) //call back function and arrow function also
}); */

/* coding_lang.forEach((element,index,array)=>{
    console.log(`From array [${array}] at index ${index} element is :-${element}`)
}) */

const lang_file=[
    {
        language_name:"JAVA",
        file_extension:".java",
     },
     {
        language_name:"JAVA Script",
        file_extension:".js",
     },
     {
        language_name:"Python",
        file_extension:".py",
     }
]
lang_file.forEach((element)=>{
    console.log(`for ${element.language_name} language,file extension is=>${element.file_extension}`)
})
