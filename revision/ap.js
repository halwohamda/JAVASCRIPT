let input = document.querySelector('input');
let btnSubmit = document.getElementById('Submit');
let btnDelete = document.getElementById('Delete')
let p = document.querySelector('p');


btnSubmit.addEventListener('click',()=>{
    const getData = input.value
    p.innerHTML=getData
    
})