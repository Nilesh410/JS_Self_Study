function display(marks)
{
    const result=marks ||false ? marks : false; //10 false 3
    //const result=marks ||"false" ? marks : false; //10 0 3
    console.log(`Marks:-${result}`)
}

display(10)
display(0)
display(3)