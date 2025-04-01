// of off loop applying on array
// let student=["Maruf","Arbaz","Umair","Jeelan"]
// for (const std of student) {
//     // console.log(std);
    
// }

//off loop applying on string
// let myName="kureshi"
// for (const name of myName) {
//     console.log(name);    
// }


// total number of words find by using for of loop
// let str="Marufkureshi";
// let total=0; // total is start for the zero
// for(let count of str){
//     console.log("count=",count); //here we printed our count variable 
    //total++ //if the condition false update total by +1 
//}
// console.log("total words:",total);

// map 
//The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

let clgCourse=new Map()
clgCourse.set('maruf','BCA')
clgCourse.set('umair','B.Com')
clgCourse.set('jeelam','BBA')
// console.log(clgCourse);

//applying in map for of loop
for (const [key,value] of clgCourse) {
    console.log(`key of map ${key} value of map ${value}`);
}