// Function...
function myfunction(){
    console.log("Welcome to my profile");
    console.log("We are learning js");
    console.log("Welcome to my profile");
    console.log("We are learning js");
}
myfunction();
myfunction();
//creat a function for sum of two number

function sum(a,b){
    console.log(a + b);
}
sum(5,5);
sum(450,550);

function num(a,b){
    console.log(a-b);
}
num(1505,554);
function divi(a,b){
    console.log(a/b);
}
num(50,2);
//return the value
function sum(x,y){
    s=x+y;
    return s;
}
let val =sum(5,40);
console.log(val);
//multiplication function
function mul(a,b){
    console.log(a*b);
}
mul(5,5);
mul(25,5);
mul(100,200);

//arrow functions is morden js function
const arrowSum = (a,b) => {
    console.log(a + b);
}
arrowSum(5,5);
const arrownum=(a,b) => {
    console.log(a+b);
}
arrownum(50,100);
// arrow multiplication function

const arrowMul =(a,b) => {
    console.log(a*b);
}
arrowMul(4,4);