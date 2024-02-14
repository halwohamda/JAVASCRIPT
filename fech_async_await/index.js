let p = document.querySelector('p');
let pre = document.querySelector('pre');
let span = document.querySelector('span');
let div = document.querySelector('div');

const getJson = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response)=>response.json())
    .then((haa)=>{
        haa.forEach((maya)=>{
            const moyi = `<p>userId:${user.id}</p> <span>userTitle:${user.title}</span> <pre>userBody:${user.body}</pre>`
           div.insertAdjacentHTML('beforeend', moyi)    
      
        })
    })
}
getJson();