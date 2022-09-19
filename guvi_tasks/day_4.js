/*   question no:1 compare two json  object */
var obj1 ={
    "name" : "person 1",
    "age"   : "5"
}
var obj2 ={
    "age"   : "5",
    "name" : "person 1"
}

if(obj1.name == obj2.name)
{
    console.log("ture");
} 
 // Question No:2 & 4
 
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();

request.onload=function()
{
    var result=JSON.parse(request.response);
    console.log(result);
    for(i in result)
    {
        console.log(result[i].flags);
    }
    for(i in result)
    {
        console.log(result[i].name);
    }
    for(i in result)
    {
        console.log(result[i].region);
    }
}

 