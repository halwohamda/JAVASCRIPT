let Add = document.getElementById('Add');
let Eber = document.getElementById('Eber');

let eber


Add.addEventListener('click',()=>{
    let seconds = 0
    eber = setInterval(()=>{
        Eber.innerHTML = +seconds
        seconds++
    },1000)
})