function person(firstname,lastname,age,gender)
{
    this.p_name=firstname;
    this.p_lastname=lastname;
    this.p_age=age;
    this.p_gender=gender;
}

const emp1=new person('Nilesh','Shirude',34,'Male');
console.log(emp1);
console.log(typeof(emp1));
console.log(`First employe name ${emp1.p_name}`);

