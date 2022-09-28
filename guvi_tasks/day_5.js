/* Do the below programs in anonymous function & IIFE







Rotate an array by k times
 */
//Print odd numbers in an array
/* arr=[12,11,63,72,46,47];
let result=function(){
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2!=0)
        {
            console.log(arr[i]);
        }
    }
}
result(); */

//Sum of all numbers in an array
/* arr=[12,11,63,72,46,47];
sum=0;
(function(){

    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
   console.log(sum); 

})(arr) */

//Return all the palindromes in an array
/* let arr=[121,231,131,232,123,212];
let arr1=[]
result=function(){

    for(let i=0;i<arr.length;i++)
    { 
        let final=0;
        let temp = arr[i];
		while(arr[i]>0)
		{
			let rem = arr[i]%10;
			arr[i] = parseInt(arr[i]/10);
			final = final*10+rem;
        }
        if(temp==final)
        {
            arr1.push(final)
        }
    }
    console.log(arr1);
}
result(arr);
 */

//Convert all the strings to title caps in a string array
/* let string="e-book user frendly";
let ab=[];
function titleCase(string) {
   let a=string.split(" ");
  for(let i=0;i<a.length;i++)
  {
    ab+=a[i].toUpperCase();
    
  }
  return ab;
}
console.log(titleCase(string)); */

//Remove duplicates from an array
let arr=[1,2,3,55,566,3,2,4.3,23]
function removeDuplicates(arr) {
   
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));

//Rotate an array by k times
(function(){
let Array = [1, 2, 3, 4, 5];
k=2;
let res=[];
arr=Array.slice(k);
for(let i=0;i<k;i++)
{
    res.push(Array[i]);
}
console.log([...arr,...res]);
})();
