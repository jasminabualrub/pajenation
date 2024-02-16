 async function  getData(){
    const response= await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
    const data= await response.json();
    const recipes=data.recipes;
    console.log(recipes);

}