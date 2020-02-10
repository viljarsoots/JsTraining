// function random(){
//     randomNum =  Math.floor(Math.random() * 100 +1);
//     return randomNum;
// }
// let randomNum;
// let myResult = [];
// function createList(){
//     for(let i = 0; i < 10; i++){
//         random();
// if (randomNum < 21){
//     myResult.push("A");
// }else if(randomNum < 41){
//     myResult.push("B");
// }else if(randomNum < 61){
//     myResult.push("C");
// }else if( randomNum < 81){
//     myResult.push("D");
// }else{
//     myResult.push("E");
// }
//     }
//     return myResult;
// }
// function printOut(){
//     createList();
//     console.log(myResult);
// }

var rand = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
 
var generateWeighedList = function(list, weight) {
    var weighed_list = [];
     
    // Loop over weights
    for (var i = 0; i < weight.length; i++) {
        var multiples = weight[i] * 100;
         
        // Loop over the list of items
        for (var j = 0; j < multiples; j++) {
            weighed_list.push(list[i]);
        }
    }
     
    return weighed_list;
};
 
var list = ['a', 'b', 'c', 'd', 'e' ];
var weight = [0.2, 0.2, 0.2, 0.2, 0.2 ];
var weighed_list = generateWeighedList(list, weight); 
var random_num = rand(0, weighed_list.length-1);

let result = [];

function addItemsRandomly(){
    generateWeighedList(list, weight);
    
}
 
console.log(weighed_list[random_num]);