let start = document.getElementById('start')
let Timer = document.getElementById("Timer")

let timer

start.addEventListener('click',()=>{
    let seconds = 0
    timer = setInterval(()=>{
        Timer.innerHTML = +seconds
        seconds++
    },100)
});