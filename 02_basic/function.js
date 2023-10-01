function myname()
{
    console.log("S")
    console.log("H")
    console.log("A")
    console.log("Q")
    console.log("I")
    console.log("B")
}
// myname()

function addtwonum(num1,num2)
{
    return num1+num2;
}
// console.log(addtwonum(3,4))

function loginusername(name)
{
    // if(name===null)
    if(undefined)
        return `${name} is login ` 
    else
        console.log("please enter your username");
    
}
// console.log(loginusername("shaqib"));
// console.log(loginusername());

function calculatecartprice(...num)
{
    return num
}
// console.log(calculatecartprice(200,300,400,500))



function calculatecartprice2(val1,val2,...num)
{
    return (num)      //val1=200 val2=300 and num=[400,500]
}
// console.log(calculatecartprice2(200,300,400,500))



function userdetails(anyobject)
{
    return `${anyobject.name} has total cost of course of ${anyobject.price}`
}

const user =
{
    name:"shaqib",
    price:199
}
// console.log(userdetails(user))


const myarr=[100,200,300,400]
function getsecondvalue(getarry)
{
    return getarry[1];
}
console.log(getsecondvalue(myarr))