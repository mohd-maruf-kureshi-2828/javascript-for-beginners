// singleton
// Object.create


//object literals


let mySym=Symbol("mysymbol") 

let student={
    name:"mohamed maruf kureshi",
    Regno:"U19G02S0069",
    Aress:"Chickbalapur",
    pno:68899988777,
    [mySym]:"mysymbol12",
    email:"marufgoogle@gmail.com"

}
// Object.freeze(student)
// student.name="arbaz"
// Object.freeze(student)
// console.log(student["name"]);
// console.log(student.Regno);
// console.log(student);


/*
 access the symbol
 symbol syntax
 console.log(student[mySym]);
*/


/*
student.myfun= function(){
    console.log(`hello ${this.name},Your Register No ${this.Regno} `);
}
 console.log(student.myfun);
 console.log(student);
 console.log(student.myfun());
*/

//arrow funtion
// student.myfun=function(){
//     let s=this
//     let myFun22=()=>{
//         console.log(`hello ${s.name},Your Register No ${s.Regno} `);
//     }
//     myFun22()
// } 
// console.log(student.myfun());
