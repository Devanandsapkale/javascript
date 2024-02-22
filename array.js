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

let food=["apple","banana","mango","litchi"];
food.push("orange");
food.pop();
console.log(food);

let marvel=["thor","spiderman","ironman"];
marvel.unshift("antman"); //umshipt method use to add the element at the starting.
marvel.shift(); // shift method use to delete value of the starting
let dc=["superman","mbatman"];
let marvel_dc = marvel.concat(dc);
console.log(marvel_dc);

//slice method of array
let color=["blue","orange","pink","yellow","red","black"];
console.log(color);
console.log(color.slice(2,4));

//splice methd "array"
let arr =[1,2,3,4,5,6,7,8,];
arr.splice(2,2,101,102);
//add element by using splice
arr.splice(5,0,103); 
//delete element by using splice
arr.splice(4,1);
//Replace element by using splice
arr.splice(5,1,104);
console.log(arr);

