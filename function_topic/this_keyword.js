const std_info={
    std_id:22101,
    std_name:"Nilesh Shirude",
    std_degree:"BE",
    std_data:function(){
        console.log(`Student id is ${this.std_id} and name is ${this.std_name}`)
        return this.std_id
    }
}

console.log(std_info)//show result as object element
// console.log(std_info.std_data)//hold function as a value
// console.log(std_info.std_data())
std_info.std_data()
std_info.std_name="Jyoti Yeola"
console.log(std_info)
std_info.std_data()