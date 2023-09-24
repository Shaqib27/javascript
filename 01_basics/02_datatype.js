// "use strict";//treat all js code as newer version
//javascript remove the extra spaces


//Data type 
//nn ss bb u
    // number
    // null(null means not 0 it means completely null )
    // symbol
    // string=""
    // boolean=true/false
    // bigint(for very lager value)
    // undefined 


// console.log(typeof "shaqib")//string
// console.log(typeof(null))//object
// console.log(typeof undefined);//undefined



// data type 

//  the basic data type is only two type 

//  1.premitive(7 type nn ss bb u)
//  it is call by value when you call it .it copy then it give you not it give the refernce



//  2.non premitive(reference type)(Array , objec ,functions)(generaly the data type is function and for function ka object function type)
//  when you use it it simple give you the refe rence not data 


//  it devide on the basis of that how the  data is fetch(access) and how the data is store



//********************************************************** */
// Stack(primitive ) ,Heap(non primitive)


let myname="shaqib"

let secondname=myname

// console.log(secondname)
secondname=" hussain"
// console.log(secondname)
// console.log(myname)

//note
//stack(copy of value not address)
/* as this is stack memroy formate in this only the copy of the value is assign to secondname(here) not the reference 
so the value inside he myname is not change.
*/


   // (heap)(reference)
let userone={
    email:"user@gmail.com",
    upi:"user@ybl"
}

let usertwo=userone
usertwo.email="shaqib@gmail.com"
// console.log(userone)
// console.log(usertwo)

//note 
/* in this case as the heap memory formate is  use so in this formate the reference is use 
so when you change the the value is change in both
here when usertwo = userone this means the address of userone is given to usertwo so when the 
user one change any this both will access the same address the fot both the value is change
*/


