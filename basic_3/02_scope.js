// let num1=3000

if(true){
    let num1=10
    const num2=29
    var num3=20
}
 
// console.log(num1);
// console.log(num2);
// console.log(num3);

function one(){
    let name="maruf"

    function two(){
      let lastName=name
      console.log(lastName);
      
    }
  //  two()
//    console.log(lastName);
   
}
// one()

/*
if(true){
  let username="maruf"
  if(username === "maruf"){
    let last="kureshi"
    console.log(username+last);
    }
    // console.log(last);
    
}
// console.log(username);
*/


//idhar ham dikhati he ke agar hamne function ko variable me liye to ham usko uske upper acces nhi kar sakte
add(6)
function add(num1){
  return num1++
}

console.log(addNum(6))
const addNum=function(num1){
  return num1+1
}
// console.log(addNum(6))
