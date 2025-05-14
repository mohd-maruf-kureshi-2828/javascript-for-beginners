function randomColorGenerate(){
    let hex='0123456789ABCDEF'
    let color='#'
    for (let i = 0; i < 6 ; i++) {
        color += hex[Math.floor(Math.random()*16)]
     }
    return color

}
let intervalId
// let changeBgColor=()=>{
//     intervalId=setInterval(()=>{
//     document.body.style.backgroundColor=randomColorGenerate()
//     },1000)
// }
// let stopBgColor=()=>{
//     clearInterval(intervalId)
// }

// second method
let changeBgColor=()=>{
    if(!intervalId){
        intervalId=setInterval(startChanging,1000)
    }
    function startChanging(){
        document.body.style.backgroundColor=randomColorGenerate()
    }
}
let stopBgColor=()=>{
    clearInterval(intervalId)
    intervalId=null
}

document.querySelector('#start').addEventListener('click',changeBgColor)
document.querySelector('#stop').addEventListener('click',stopBgColor)