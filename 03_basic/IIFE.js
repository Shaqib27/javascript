//Immediately Invoked Function Expression(IIFE)

//their are two main reasion why we 
//1.to excute as the program start  (immdiately excute)
//2.we don't want to polute our variable with the golbal variable 

//kai bar global scope ke polution se problem hotii hai of is se bachne ke liye hm log (IIFE) ka use karten hain

(function chai()
{
    console.log("hello user")
})();  //here use ; to stop the excution or end the funtion


((name)=>{
    console.log(`DB connected is ${name}`)
})("shaqib")
