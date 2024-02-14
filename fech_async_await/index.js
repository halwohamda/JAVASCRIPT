let p = document.querySelector('p');
let span = document.querySelector('p');
let pre = document.querySelector('pre');
let div = document.querySelector('div');

const getData = async()=>{
    const yes = await fetch('https://jsonplaceholder.typicode.com/posts/')
    .then((yes)=>yes.json());
    .then((no)=>{
        
    })
}