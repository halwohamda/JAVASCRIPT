let start = document.getElementById('start');
let Timer  = document.getElementById("Timer");

let timer 

start.addEventListener('click',()=>{
    let seconds = 0
    timer = setInterval(()=>{
        // Timer.innerHTML = Math.random(+seconds)*1000
        Timer.innerHTML = +seconds
        seconds++
    },100)
})