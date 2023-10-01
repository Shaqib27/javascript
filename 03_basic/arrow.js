const user=
{
    username : "shaqib",
    price : 1999,

    welcomemsg:function()
    {
        console.log(`${this.username},welcoe to webiste`)
        // console.log(this) //this will give all the user object details
    }
}
// user.welcomemsg()
// user.username="hussain"
// user.welcomemsg();
// console.log(this) //it will only give the {} as now the global function has nothig

// function chai()
// {
//     let user="dsa"
//     console.log(this.user)
// }
// chai()    //we can't use this key word in function

// const chai=function()
// {
//     let user="dsa"
//     console.log(this.user)
// }
// chai()

// const chai =() =>
// {
//     let user="dsa"
//     console.log(this.user)
// }
// chai()

// const addtwo=(num1,num2)=>
// {
//     return num1+num2
// }
// console.log(addtwo(3,4))

// const addtwo=(num1,num2)=> num1+num2
// console.log(addtwo(3,4))

const addtwo=(num1,num2)=>({name:"shqib"})
console.log(addtwo())