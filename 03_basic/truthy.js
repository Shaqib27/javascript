// const usermail="shaqib@gmail.com"

// if(usermail)
// {
//     console.log("user is login")
// }
// else
// {
//     console.log("please enter the correct email")
//}


//falsy value   false , 0 , -0 , null , undefined , BigInt 0n , "" NaN,


//truthy value  " " , "false" , [] , true , "0" ,function(){} , {}

// const myarray =[]
// if(myarray.length===0)
// {
//     console.log("array is empty")
// }


const obj={}
// if(Object.keys(obj).length===0)
// {
//     console.log("object is empty ")
// }

//nullish coalescing operator ?? null undefiend

let val1;
// val1= 5 ??10
// val1=null??10  //ye new operator hai isme agar frist value null ya undefinde hoga tab ye second value ko use karega 
// kuye is kabhi value null ya undefined hone ki wajh se dikkat hota hai isily ye function banaya gaya hai
// val1=undefined??20
val1=null??undefined??70

console.log(val1)