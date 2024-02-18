// loops in js
//print 1 to 5
for(let count = 1; count<=20; count++){
    console.log("Count =",count);
}
console.log("loop is end");

// to calcutate sum of "1 to n" number
let sum=0;
let n = 100;
for(let i = 1;i <= n; i++){
    sum = sum + i; //sum = 0 + 1  -----> = 1
}
console.log("sum =",sum);
console.log("loop has end");

// while loop
let i = 1;
while(i <=10){
    console.log("i =",i);
    i++;
}
console.log("loop end")

//do while
let j = 20;
do{
    console.log("hello dev")
    j++;
}while(i<=10);

//for-of loop
let str ="Devanand";
for(let i of str){  // i = iterator ----> charector
    console.log("i=",i);
}
console.log(str);

//for in loop

let student ={
    name: "Rahul Kumar",
    age: 20,
    cgpa: 7.5,
    isPass: true
}
for(let i in student){
    console.log("i =", i,"value",student[i]); //for get the i value use "value",student[i]
}