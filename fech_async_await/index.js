let p = document.querySelector('p');
let span = document.querySelector('p');
let pre = document.querySelector('pre');
let div = document.querySelector('div');

const getData = async()=>{
    const yes = await fetch('https://jsonplaceholder.typicode.com/posts/')
    .then((yes)=>yes.json())
    .then((no)=>{
        no.forEach((user)=>{
           const display = `<p>userId:${user.Id}</p> <span>userName:${user.Name}</span> <pre>userTitle:${user.title}</pre>`
           div.insertAdjacentHTML('beforeend', display);
        })
        
    })
}
getData();