//Find out the char occurance from the given string
const str="Nilesh Suresh Shirude"
const occur_char={}
for (const char of str ){
    if(occur_char[char])
    {
        occur_char[char]+=1
    }
    else
      occur_char[char]=1
}
console.log(occur_char)