let form = document.querySelector('form');
let InputValue = document.getElementById('InputValue');
let div = document.querySelector('div');

form.addEventListener('click',(e)=>{
     e.preventDefault();
     if(InputValue.value === ''){
        alert('Please Enter Information')
     }else{
        InputValue.value
        let p = document.createElement('p')
        p.innerHTML = InputValue.value
        div.appendChild(p)
        InputValue.value = '';
     };
 

});

