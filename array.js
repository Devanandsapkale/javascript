//Array
let marks=[97,85,89,85,78,95,77,];
marks[3]=73; // array is a mutable we can update the value of arry 
console.log(marks);
// console.log(marks.length);//length is a propery it's give only value; its not perform any task
//for loop for printing array
for( let i=0;i<marks.length;i++){
    console.log(marks[i]);
}
let heroes=["ironman","thor","hulk","spiderman"];
console.log(heroes);
//for of loop

for(let hero of heroes){
    console.log(hero);
}
let cities=["delhi","mumbai","pune","hydrabad","jalgaon"];
    console.log(cities);
for(let city of cities){
    console.log(city.toUpperCase());
}