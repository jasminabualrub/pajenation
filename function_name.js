let name='huda';
function printName(){
    name='sondos';
    console.log(name);//sondos
}
//printName()
console.log(name);//sondos
let nums=[10,20,30,40,50,60,70];
let newNums=[];
newNums=nums.filter(function(e){

return e>30;

})
//console.log(newNums);
let numbs=[1,2,3,4,5,6,7,8,9,10];
let evenNums=[];
evenNums=numbs.filter(function(e){
    return (e%2==0 && e>=4);
})
//console.log(evenNums);7
let find_9='';
 find_9=numbs.find(function(e){
    return e==9;
});
console.log(find_9);