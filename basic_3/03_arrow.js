// let user={
//     username:"maruf kureshi",
//     myarrow:function(){
//         console.log(`${this.username}`);
//         console.log(this);
        
//     }
// }
// // console.log(this);
// user.myarrow()
// console.log(this);


// function maruf(){
//     userName="maruf"
//     console.log(this.userName);
    
// }
// maruf()

//arrow funtion
//syntax
// ()=>{}

//simple
// const name=(name)=>{
//     console.log(`your name is ${name}`);
// }
// name("maruf")

//second method
const name=(name)=>`your name is ${name}`
// console.log(name("kureshi"))

const addTwoNumber=(num1,num2)=> num1+num2
// console.log(addTwoNumber(10,10));

const objFun=()=>({username:"maruf kureshi"})
console.log(objFun());
