//for in loop applying on object

const selected = {
    Arbaz:"BCA",
    Umair:"B.com",
    Jeelan:"BBA"
}

for (const key in selected) {
    // console.log(`${key} Select A Course ${selected[key]}`);
}


let myDetail={
    name:"mohammedmaruf",
    age:22,
    cgp:85,
    course:"BCA"
}
for(let key in myDetail){
    // console.log("key =",key,"value=",myDetail[key]);
}

// for in loop also work on array

let favFood=["chicken","fish","Biryani","ice-cream"]
for(let key in favFood){
    // console.log(key); its work only in iterators 
    console.log(favFood[key]);
    
    
}