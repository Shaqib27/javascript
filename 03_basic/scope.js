const a=1;
let b=2;
var c=3;

if(true)
{
    const a=10;
    let b=20;
    var c=30;
}
// console.log(a)
// console.log(b)
// console.log(c)


function fullname()
{
    username="shaqib hussain"
    function firstname()
    {
        fname='shaqib'
        console.log(username)
        function lastname()
        {
            lname="hussain"
        }
    }
    firstname()
}
// fullname()



console.log(addone(4)) 
function addone(num)
{
    return num +1;
}


// console.log(addtwo(5))  //here you can't access the function in this case. it is not allow
const addtwo=function(num2)
{
    return num2+1;
}
console.log(addtwo(5))