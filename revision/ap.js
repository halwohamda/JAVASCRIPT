let input = document.querySelector('input');
let btnSubmit = document.getElementById('Submit');
let btnDelete = document.getElementById('Delete')
let p = document.querySelector('p');


btnSubmit.addEventListener('click',()=>{
    const data = input.value
    localStorage.setItem('data',data);
    let li = document.createElement('li')
    li.innerHTML = data;
    p.appendChild(li)
    input.value ='';


})

btnDelete.addEventListener('click',()=>{
      p.remove();
})


const Saved = localStorage.getItem('data')
if(Saved){
    const data = input.value
    let li = document
}
