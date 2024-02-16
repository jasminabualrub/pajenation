
const links=document.querySelectorAll('a');//ترجع اريه من العناصر يلي بهاد النوع عشان امسكهن كلهن مش بس اول عنصر 
for(let i=0;i<links.length;i++){
    links[i].onclick=fetchData;
}
 /* async function fetchData(e){
    const recipe=e.target.textContent;
    console.log(recipe);
    const response=await fetch(`https://forkify-api.herokuapp.com/api/search?q=${recipe}`);
    const data = await response.json();
    const recipes=data.recipes;
    console.log(recipes);
    //console.log(links);
    const result=recipes.map(function(e){
        return`
        <h2>${e.title}</h2>
        <img src='${e.image_url}'>
        `

    }).join('');
    document.querySelector('.posts').innerHTML=result;
 }*/
 async function fetchData(){
   
    const response=await fetch(`https://forkify-api.herokuapp.com/api/search?q=${recipe}`);
    const data = await response.json();
    const recipes=data.recipes;
    console.log(recipes);
    //console.log(links);
    const result=recipes.map(function(e){
        
        return`
        <h2>${e.title}</h2>
        <img src='${e.image_url}'>
        `

    }).join('');
    document.querySelector('.posts').innerHTML=result;
    getData();
 }
 function getData(e){
    const recipe=e.target.textContent;
    console.log(recipe);
 }