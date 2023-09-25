const mysym=Symbol("key")


const user={
    name:"shaqib",
    "full name":"shaqib hussain", //use [] to ge the key/values
    age:21,
    [mysym]:"mykey",  //symbol are represented like this
    location:"kolkata",
    email:"shaqib246@gmail.com",
    islogin:false,
    lastloginday:["moday","satuarday","friday"]
}



// console.log(user.name)
// console.log(user["name"])
// console.log(user["full name"])
// console.log(user[mysym])
// console.log(typeof mysym);
console.log(user["email"])
user.email="mdhsaqibhussain5@gmail.com"
console.log(user["email"])
Object.freeze(user) //this will freez the value of user and not allow to change 
user.email="jsjahs@google.com"
console.log(user["email"])

