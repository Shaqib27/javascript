const heros=["spiderman","superman","batman","flash"]
//______________for each item value return nahi karta hai_________

// heros.forEach(function (a){
//     console.log(a)
// })

// heros.forEach( (item) => {
//     console.log(item)
// });

// function printme(item)
// {
//     console.log(item)
// }
// heros.forEach(printme)

// heros.forEach((item,index,arr)=>
// {
//     console.log(item,index,arr)
// })

// const mycoding=[
//     {
//         languagename:"javascript",
//         filename:"js"
//     },
//     {
//         languagename:"java",
//         filename:"ja"
//     },
//     {
//         languagename:"python",
//         filename:"py"
//     }
// ]

// mycoding.forEach( (item)=>
// {
//     console.log(item.filename)
// })


// const newhero=heros.forEach( (item)=>
// {
//     // console.log(item)
//     return item
// })
// console.log(newhero)


//________________________filter________________
//ye return value karta hai

const num=[1,2,3,4,5,6,7,8,9,10]

// const new1=num.filter( (item)=>{
//     // console.log(item)
//     return item
// })
// console.log(new1)

// const new2=num.filter( (num1)=> num1>4)
// console.log(new2)


// const new3=num.filter( (num1)=> {
//     return num>4   //yahan pe return key word important hain kuye ki ye scope ke andar likha hua hai //ya scope open kiya hua hai
// })
// console.log(new3)



// const newnum=[]
// num.forEach( (item)=>
// {
//     if(item>4)
//     {
//         newnum.push(item)
//     }
// })
// console.log(newnum)



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


//   const userbooks1=books.filter( (bk)=> bk.genre==="History")
//   console.log(userbooks1)

//    const userbooks2=books.filter( (bk)=> {
//     return bk.title==="Book One"}
//     )
//      console.log(userbooks2)

  const userbooks3=books.filter( (bk)=>
  {
    return bk.edition>=1995 && bk.genre==='History'
  } )
  console.log(userbooks3)