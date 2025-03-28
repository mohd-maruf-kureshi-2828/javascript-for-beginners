//singleton
let myDetail=new Object
// myDetail.name="mohamed maruf kuresh"
// myDetail.regNo="U19G022S0069"
// myDetail.graduate="BCA"
// console.log(myDetail.name);

const regularUser = {
   email: "some@gmail.com",
   fullname: {
       userfullname: {
           firstname: "hitesh",
           lastname: "choudhary"
       }
   }
}


   // console.log(regularUser.fullname);

   //object merge
   let emp1={name1:"maruf",course1:"Bca", work1:"developer"}
   let emp2={name2:"Arbaz",course2:"Bca", work2:"mechinical engg"}
   let emp3={name3:"umair",course3:"B.com", work3:"CA"}
   
   // we have two method to merge
   // let allEmp=Object.assign({},emp1,emp2,emp3)
   // console.log(allEmp);

   let spread={...emp1,...emp2,...emp3}
   // console.log(spread);



   let listInObbj=[
      {
         name:"maruf",
         work:"developer"
      },
      {
         name:"arbaz",
         work:"mechanical engg"
      }
   
   ]
// console.log(listInObbj[0]="umair");

let myCats={
   catName:"ruby",
   habbit:"playing",
   isSmart:true
}
let {isSmart}=myCats
let{catName}=myCats
let{habbit}=myCats
console.log(isSmart);
console.log(catName);
console.log(habbit);



   