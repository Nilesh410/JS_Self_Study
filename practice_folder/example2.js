//Find out the how many vowels and their occurence from the given string 
//const str="Nilesh Suresh Shiurde"
let str="Aabb Eedd Iikk Oomm Uujj"
let count_vowel=0
let vowel_occur={}
for (let ele of str) {
    if(ele==='a'||ele==='e'||ele==='i'||ele==='o'||ele==='u'||
       ele==='A'||ele==='E'||ele==='I'||ele==='O'||ele==='U')
       {
          count_vowel+=1;
          if(ele.localeCompare(ele.toUpperCase())===0)
          {
             ele=ele.toLowerCase()
          }
                if(vowel_occur[ele])
                {
                  vowel_occur[ele]+=1
                }
                else
                vowel_occur[ele]=1
          
          
       }
}
console.log(`No of vowels from the given string is ${count_vowel} and occurence of each vowel is`,vowel_occur)