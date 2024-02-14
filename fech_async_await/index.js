let p = document.querySelector('p');
let pre = document.querySelector('pre');
let span = document.querySelector('span');
let div = document.querySelector('div');

const getData = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>response.json())
    .then((data)=>{
        data.forEach((user)=>{
            const display = `<p>userId:${user.id}</p>  <pre> Title: ${user.title}</pre> <span>Body:${user.body} </span> `
            div.insertAdjacentHTML('beforeend', display)
        })
    })
}
getData();