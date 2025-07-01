// function addTwoNumber(num1,num2){
//     // console.log(num1+num2);
    
//     return num1+num2
    
// }
// let result=addTwoNumber(10,10)
// console.log(result);


//number na ho to
/*
function addTwoNumber(num1,num2){
    if(num1==="number" && num2 === "number"){
        return num1+num2
    
       
    } else {
        console.log("please enter the number");
        
    }
    
}
console.log(addTwoNumber(10,'b'))
*/

/* 
function loginUser(username){
    console.log(`${username} loggin`);
    
}
loginUser("maruf")
*/


//kya ak he user he iska name sirf maruf he
function loginUser(username){
    if(!username){
        console.log("please Enter Your NAme");
        return
    }
    else{
        return `${username} loggin`;
       
    }
}
// console.log(loginUser());


function myNums(n1, n2, ...n3) {
    return [n1, n2, ...n3];
}
// console.log(myNums(100, 222, 222, 22233, 222, 234, 1009));


let myobj={
    user:"maruf",
    email:"maruf@gmail.com"
}
function accesobj(anyobject){
    return `user name is ${anyobject.user} and user gmail is ${anyobject.email}`
}
// console.log(accesobj(myobj));


//second tarika
myobj.access=function(){
    return`your user name is ${this.user}`
}
// console.log(myobj.access());


//direct object bhi rikh sakte hai
let directAcc=accesobj({
    user:"kureshi",
    email:"amazon@gmail.com"
})

// console.log(directAcc);


//array ko bhi access kar sakte hai using funtion
let myArray=[1,2,,3,4,5,6]
function anyArray(array1){
    console.log(`Your Array Is ${array1}`)
    console.log(`First Index OF Your Array Is ${array1[0]}`)
}
// anyArray(myArray)

//direct Array bhi rikh sakte hai
anyArray([500,200,3000])