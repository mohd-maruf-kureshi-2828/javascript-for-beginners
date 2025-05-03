// function myName(){
//     console.log('maruf');
    
// }
// myName()

//setTimeout method
// setTimeout(myName,2000)

/*
setTimeout(function name() {
    console.log('maruf');
    
},2000)
*/

// arrow funtion
/*
setTimeout(() => {
    console.log('maruf kureshi')
}, 2000);
*/

function myPassWorldUpdates(oldpass,newpass){
    setTimeout(()=>{
        console.log(oldpass);
        if(newpass){
            newpass()
        }
     },2000)
}

myPassWorldUpdates('Your Old Pass Is 299002',()=>{
    myPassWorldUpdates('Your Old Pass 218356')
    
},
)
