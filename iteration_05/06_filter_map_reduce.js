let programmingLanguage=["js","python","c++","c","java","ruby"]
// programmingLanguage.forEach(function(lan){
//     console.log(lan);
// })

let collect=programmingLanguage.forEach((lan)=>{
    // console.log(lan);
    return lan;    
})
// console.log(collect); forEach not give a return value


// let studentDetails=[
//     {
//         name:"maruf kureshi",
//         course:"BCA",
//         percentage:50
//     },
//     {
//         name:"umair",
//         course:"CA",
//         percentage:90
//     },
//     {
//         name:"jayashwanth",
//         course:"cyber security",
//         percentage:90
//     },
//     {
//         name:"vijay",
//         course:"Dev",
//         percentage:50
//     },
    
// ]
 
// let checking=studentDetails.filter((check)=> check.percentage >= 90)
// console.log(checking);


let myPercentage=[50,66,80,40,99,100,35,45]

// let numCh=myPercentage.filter((num)=>num <=50)
//let numCh=myPercentage=myPercentage.filter((num)=>{
    //return num <= 50
//})
// console.log(numCh);


//using forEach method
let newNum=[]
myPercentage.forEach((num)=>{
    if(num<=50){
       return newNum.push(num)
    }
})
// console.log(newNum);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Maps<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

let myNum=[1,2,3,4,5,6,7,8,9]
let subMyNum=myNum.map((num)=>num * 10)
// console.log(subMyNum);


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Chaining<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

let myNo=[1,2,3,4,5,6,7,8,9]
let Chain=myNo
          .map((num)=>num*10)
          .map((num)=>num+1)
          .filter((num)=> num>=50)

// console.log(Chain);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Reduce<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

let reduceNo=[1,2,3,4]

let add=reduceNo.reduce(function(accumulator, currentValue){
    // console.log(`accumulator = ${accumulator} and currentValue = ${currentValue}`);
    return accumulator + currentValue
},0)

console.log(add);


//second method
// let add2=reduceNo.reduce((acc,curVal)=>acc + curVal,0)
// console.log(add2);


//total exam fees of the student

let gfgcStdFees=[
    {
       nameOfTheFess:"collegeFees",
       fees:3000
    },
    {
        nameOfTheFess:"tax",
        fees:2000
     },
     {
        nameOfTheFess:"Events",
        fees:5000
     },
]
let total=gfgcStdFees.reduce((acc,items)=>acc+items.fees,0)
console.log(total);
