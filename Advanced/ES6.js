const numbers = [1,3,4,5,];
const filternumbers = numbers.filter(numbers =>{
    const natijo = numbers <=1? "haa":"maya";
    console.log(natijo)
});




// map
const names = ["ISRA","HAMDA"]
const mapnames = names.map(names=>{
    return names.toLowerCase();
})
console.log(mapnames);


// Reduce
const reducenumber = numbers.reduce((total,Number)=>{
    return total+Number;
})
console.log(reducenumber)


// ForEach
const persons = [
    {
       
        id:2,name:"hamda",address:"jamacada"
    },{
        id:1,name:"isra",address:"saylad", 
    }
]
persons.forEach(person=>{
    console.log(person)
})