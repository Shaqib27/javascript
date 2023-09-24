// console.log("2">1)
// console.log("2"<1)
// console.log("2">"1")
// console.log("2">=1)


// console.log(null==0)//1
// console.log("null">0)//2
// console.log("null">=0)//3

//the reson is that an equality chech (==) and comparisons (<,>)(<=,>=)work differently
//comparison checker convert null to number ,treating it as 0 
//that's why in frist(1) case the answer if false
//and in second(2) is also false (0>0)false
//and in thrid(3) is ture because 0>=0(0=0)



//strick check it check data type and data both  (===)

