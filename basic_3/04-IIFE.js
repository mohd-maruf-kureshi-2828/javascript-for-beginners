//immeditery invoke function expression
//globar scope ke pollusion se bachany ke liye use hota he

//syntax
//(funtion(){})()

(function addTwon(n1,n2){
    console.log(n1+n2);
    
})(10,10);

((num1,num2)=>console.log(num1+num2)
)(10,20)