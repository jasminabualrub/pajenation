let formreg=document.querySelector('.formreg');
let table=document.querySelector('tbody')
console.log(formreg);
let users=[];

formreg.onsubmit=function(e){
    e.preventDefault();
    
    let user={
        name:e.target.elements[0].value,
        email:e.target.elements[1].value,
        password:e.target.elements[2].value,
        age:e.target.elements[3].value

    }

users.push(user);
printTable();
}
function printTable(){
    let data='';
for(let i=0;i<users.length;i++){
    data+=`<tr><td>${users[i].name}</td>
    <td>${users[i].email}</td>
    <td>${users[i].password}</td>
    <td>${users[i].age}</td></tr>`
}
table.innerHTML=data;
}