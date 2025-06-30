/*  1 what is array
   array is a collection of data or item
*/ 
//simple array
myHabbiest=["gym","coding","learning","sleeping"]
// myHabbiest[3]="eating"
// console.log(myHabbiest[3]);


// method in array
// 1.push()
/*
let names = ["maruf", "arbaz", "adil", "umail"];
names.push("vijay");
console.log(names);

// 2.pop() delete karne ke liye use hota Hota;
names = ["maruf", "arbaz", "adil", "umail"];
names.pop();
console.log(names);

// 3.unshift() data add first
names = ["maruf", "arbaz", "adil", "umail"];
names.unshift("hacker");
console.log(names);

// 4.shift() first ka data remove karta hai
names = ["maruf", "arbaz", "adil", "umail"];
names.shift();
console.log(names);
*/
// 5 reverse()
let numbers=[1,2,3,4,5,6,7,8,9,10]
// console.log(numbers.reverse()); reverse karta hai sab items ko array ke

//6 sorting()
let sot=[9,8,2,11,20,3,7,4,5]
// console.log(sot.sort()); sorting karke dira hai sab numbers ko

//7 slice()
let sli=[1,2,3,4,5]
// console.log(sli.slice(0,4)) a method o index se 3 index ke item ko print karne ke liye use hota hai 


// for(i=0;i<=myHabbiest.length;i++){
//    console.log(i);
// }


let studentName=["maruf","faiz","arshad"]
let myMarks=["umair","jeelan","ajay"]

//add array
// studentName.push(myMarks)
// console.log(studentName);

// let finalResult=studentName.concat(myMarks)
// console.log(finalResult);

let spreadMethod=[...studentName,...myMarks]
// console.log(spreadMethod);


let problemArray=[1,2,3,4,[5,6,7],[8,9,[10,11,12]]]
let solutionArray=problemArray.flat(Infinity)
// console.log(solutionArray);

// console.log(Array.isArray("maruf"))
// console.log(Array.from("maruf"));

let n1=100
let n2=200
let n3=300
// console.log(Array.isArray(n1,n2,n3));
// console.log(Array.of(n1,n2,n3));
