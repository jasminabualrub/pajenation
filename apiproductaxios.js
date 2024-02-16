async function getProduct(){
const response=await axios.get('https://dummyjson.com/products');
//console.log(response)
const data=await response.data;
const products=data.products;
//console.log(products);
const result=products.map(function(e){
    return `
    <div class="items">
    <h3>${e.title}</h3>
    <img src='${e.thumbnail}'>
    <p>${e.price}</p>
    <a href='productsdetailaxios.html?id=${e.id}'>details</a>
            
        </div>
    `
}).join('');
document.querySelector('.item').innerHTML=result;
}
getProduct();
async function getDetails(){
    const urlParams=new URLSearchParams(window.location.search);
    const id=urlParams.get('id');
    console.log(id);
    const response=await axios.get(`https://dummyjson.com/products/${id}`);
    console.log(response);
    const data=await response.data;
    console.log(data);
   const{title,thumbnail,price}=data;

   console.log(thumbnail);
   document.querySelector('h2').textContent=title;
   document.querySelector('img').src=thumbnail;
   document.querySelector('p').textContent=price;

    }
    getDetails();