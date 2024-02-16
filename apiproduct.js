async function getProduct(){
const response=await fetch('https://dummyjson.com/products');
const data=await response.json();
const products=data.products;
console.log(products)
const result=products.map(function(e){
    return`<h3>${e.title}</h3>
    <img src='${e.thumbnail}'>`
}).join('');
document.querySelector('div').innerHTML=result;
}
//getProduct();