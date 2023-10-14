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
// console.log(user["email"])
// user.email="mdhsaqibhussain5@gmail.com"
// console.log(user["email"])
// Object.freeze(user) //this will freez the value of user and not allow to change 
// user.email="jsjahs@google.com"
// console.log(user["email"])

// user.greeting=function(){
//     console.log("hello js user");
// }
// user.greetingtwo=function(){
//     console.log(`hello js user,${this.name}`);
// }

// console.log(user.greeting());
// console.log(user.greetingtwo());


// const tinderuser=new Object() //ye singleton object hai
// const tinderuser={}non singleton object
// console.log(tinderuser);

const regularuser ={
    email:"shaqib246@gmail.com",
    name:{
        firstname:{
            fname:"shqib",
            lastname:{
                lname:"hussain"
            }
        }
    }
}
// console.log(regularuser.email)
// console.log(regularuser.name.firstname.fname)
// console.log(regularuser.name.firstname.lastname.lname);


//addition of objects

const obj1={
    1:"a",2:"b",3:"c",4:"d"
}
const obj2={
    5:"e",6:"f",7:"g"
}
const obj5={
    9:"e",6:"f",90:"g"
}
const obj3={
    obj1,obj2
}


// console.log(obj3)
const obj4=Object.assign(obj1,obj2)
// const obj6=Object.assign({}(target),obj1,obj2,obj3(all are acts a source ))
const obj6=Object.assign({},obj1,obj2,obj5)


const obj7={...obj1,...obj2,...obj5}
/*This code creates a new object obj7 that contains all the properties from obj1, obj2, and obj5.
If there are overlapping properties, the last one encountered will overwrite any previous ones with the same name.*/
// console.log(obj7)


// console.log(Object.keys(obj7)) //it will in the array formate 
// console.log(Object.values(obj7))//same array formate 
// console.log(obj7.hasOwnProperty('90')) //to check wheter it has 90 or not



const course={
    coursename:"javascript",
    price:999,
    time:"400min",
    cousreinstructor:"hitesh"
}
// console.log(course.time)
// console.log(typeof course.time)

const {cousreinstructor}=course //you simply use couresinstructor get the value hites
console.log(cousreinstructor)
const {cousreinstructor : teacher}=course //it will also remane if you want
console.log(teacher)


