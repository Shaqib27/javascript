const num=[1,2,3,4,5,6];

// const res=num.reduce(function(acc,curval) {
//     console.log(`acc: ${acc}  curval: ${curval}`)
//     return acc+curval;
// },0)
// console.log(res);

// const res1=num.reduce((acc,curval)=> curval+acc ,0)
// console.log(res1)

const course=[
    {
        coursename:"js course",
        price:2999

    },
    {
        coursename:"python course",
        price:3999

    },
    {
        coursename:"dsa course",
        price:5999

    },
    {
        coursename:"andoride course",
        price:12999

    }
]
const totalcost=course.reduce((acc,item)=>  acc + item.price ,0)
console.log(totalcost)