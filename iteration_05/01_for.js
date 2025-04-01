// for (let index = 0; index < 10; index++) {
//     // const element = index;
//     console.log(index);
// }

for(let i=1;i<=10;i++){
    // console.log(`${i} outer loop`);
    // console.log(`${i} table`);
    
    for (let j = 1; j <=10; j++) {
    //iner loop
    //   console.log(i+'*'+j+'='+i*j);
    // console.log(`${i}*${j}=${i*j}`);
  }
}


//apply in array
let nonVegFood=['chicken','mutton','fish','cramps']
for(let i=0;i<=nonVegFood.length;i++){
    // let element=nonVegFood[i]
    // console.log(element);
    // console.log(nonVegFood);
}


//loop in conditional statement

for(i=1;i<=10;i++){
    // console.log(i);
   if(i==5){
    // console.log(`${i}  Is My Favourite Number`);
     }
}

//break and continue
for(i=1;i<=50;i++){
    if(i==35){
        // console.log(`${i} is dectected`);
        break;
    }
    // console.log(`value is ${i}`);
}

for(i=1;i<=50;i++){
    if(i==35){
        console.log(`${i} is dectected`);
        continue;
    }
    console.log(`value of i is ${i}`);
}