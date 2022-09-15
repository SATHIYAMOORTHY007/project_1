// qustion no:1

//for loop
array = ["join",42,78,"cat"];
for(var i=0;i<array.length;i++)
{
    console.log(array[i]);
}


//for in  loop using json print each element
employees_deatils=
{
    "person_1":{
        "Reg_no" :"1",
        "Name"    :"abc"
    },
    "person_2":{
        "Reg_no" :"2",
        "Name"    :"bcd"
    },
    "person_3":{
        "Reg_no" :"3",
        "Name"    :"bcf"
    }
}

for(let i in employees_deatils)
{
    console.log(i,employees_deatils[i]);
}
//for of loop 
var name="jon doe";
for(let x of name)
{
    console.log(x);
}

//foreach
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)

function myFunction(item)
{
  console.log(item);
}


// qustion no:2

"myresume" = {

    "name" :"sathiya moorthy",
    "age"   :"24",
    "skill"  :"full stack developer",
    "experance" : "3month"
}

