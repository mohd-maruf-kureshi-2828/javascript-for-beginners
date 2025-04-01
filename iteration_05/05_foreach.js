let programmingLanguage=["js","python","c++","c","java","ruby"]
// programmingLanguage.forEach(function(lan){
//     console.log(lan);
// })

//by using arrow function
// programmingLanguage.forEach((lan)=>{ 
     // console.log(lan);
// })

let studentDetails=[
    {
        name:"maruf kureshi",
        course:"BCA"
    },
    {
        name:"umair",
        course:"CA"
    },
    {
        name:"jayashwanth",
        course:"cyber security"
    },
    {
        name:"vijay",
        course:"Dev"
    },
    
]
studentDetails.forEach((accThename)=>{
  console.log(accThename.name);
  
})