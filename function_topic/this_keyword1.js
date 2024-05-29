//this=> this is hold the global execution context in node js engine and its value {}
//but in browser the global execution context is window
const std_info={
    std_id:22101,
    std_name:"Nilesh Shirude",
    std_degree:"BE",
    std_data:function(){
        console.log(this)
    }
}

std_info.std_data();//it shows previous object context
std_info.std_name="Jyoti Yeola"
std_info.std_data() //it shows the now new object context

console.log(this) //for node js engine global execution context is {}