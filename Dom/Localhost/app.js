const inputTask = document.getElementById("inputTask");
const btnAdd = document.getElementById("btnAdd");
const dataList = document.getElementById("dataList");
const btnDeleted = document.getElementById("btnDeleted");



btnAdd.addEventListener('click',()=>{
    const data = inputTask.value
    localStorage.setItem("data",data)
    const p = document.createElement("p")
    p.innerHTML = data;
    dataList.appendChild(p)
    inputTask.value = '';

})
btnDeleted.addEventListener('click',()=>{
    dataList.remove();
})


const savedData = localStorage.getItem("data");
if(savedData){
    const p = document.createElement("p");
    p.innerHTML = savedData;
    dataList.appendChild(p);
};