async function getPizza(){
    const response=await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
    const data= await response.json();
    const recipes=data.recipes;
    console.log(recipes);
    const result=recipes.map(function(e){
return `
<div >
<h3>${e.title}</h3>
<img src='${e.image_url}'>
<a href= 'apiPizzaRescipe.html?recipeid=${e.recipe_id}'>
</div>`;
    }).join('');
  document.querySelector('div') .innerHTML=result;
}
//getPizza();
async function getPizzaIngredient(){
    const urlParam= new URLSearchParams(window.location.search);
    const id=urlParam.get('recipeid');
const response= await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
const data=await response.json();
console.log(data);
const image=data.recipe.image_url;
const content= data.recipe.title;
const inger=data.recipe;
document.querySelector('h2').innerText=content;
document.querySelector('img').src=image;

const result=inger.map(function(e){
    
    return`
    
    <li>${e}</li>`
}).join('');
document.querySelector('ul').innerHTML=result;
}//getPizzaIngredient();
async function getpizzaswiper(){
    const response=await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
    const data=await response.json();
    const recipes=data.recipes;
    console.log(recipes)
    const result=recipes.map(function(e){
        return`
        <div class='swiper-slide'>
        <img src='${e.image_url}'>
        </div>
        `
    }).join('');
    document.querySelector('swiper-wrapper').innerHTML=result;
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
}
getpizzaswiper();