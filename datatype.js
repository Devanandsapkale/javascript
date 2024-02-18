let a =5;
let b =2;
const product ={
    title: "ball pen",
    rating: "4",
    offer: "5%",
    price: "200",
};
console.log(product);
const profile={
    username:"shradhakhapra",
    posr:195,
    followers:"569k",
    following:4,
};
console.log(profile);
// artimatic operator
let num1 = 5;
let num2 = 2;

console.log("a+b =",a + b);
console.log("num1+num2 =",num1+num2);
console.log("a+b =", a+b);
console.log("a-b =", a-b);
console.log("a*b =", a*b);
console.log("a/b =", a/b);
console.log("a%b =", a%b);
console.log("a**b =", a**b); //5^2 = 25

//Unary operator
console.log("a =",a,"& b =",b);
a =a + 1;
console.log("a =", a);
b++;
console.log("b =",b)
a=a - 1;
console.log("a =",a)
// asssingmment operator
let c = 5;
let d = 2;
c+=4;
console.log("c =",c);
c-=3;
c*=4;
c%=5;
console.log("c =",c);

// comparison operater
d=5;
b=2;
d==b;
// Conditional statements "if" statements
let age = 18;
if(age>=18){
    console.log("you can vote");
}
if(age<18){
    console.log("you cannot vote");
}

//conditional statments "if" and "else" statements
let mode ="dark"; 
// let color;
if(mode==="dark"){
    color="black";
}
else{
    color = "white";
}
console.log(color);

if(age >= 18 ){
    console.log("you can vote") 
}
else{
    console.log("you cannot vote")
}
// syntax --> rules

//"else-if" Statements
mode = "dark";
if(mode==="dark"){
    color="black";
}
else if(mode==="light"){
    color="white";
}
else{
    color="none";
}
 console.log(color); 

 //Ternary operator
let d1 = 10;
result = d1%2===0 ? "even" : "odd";
console.log("d1 =",result);

//prompt
let d2 = prompt("hello!");
console.log(d2);

// DAY Que 1 ASSINGMENT 
let d3 = prompt("Enter a number:")
if(d3%5===0){
    console.log(d3,"multiple of 5");
}
else{
    console.log(d3,"not multiple of 5");
}
//Que 2
let s1 = prompt("enter your score (0-100)");
let gread="";
if(s1 >= 90 && s1 <= 100){
    gread = "A";
}
else if(s1 >= 70 && s1 <=89){
    gread = "B";
}
else  if(s1 >= 60 && s1 <= 69){
    gread = "C"
}
else if (s1 >= 50 && s1 <= 59){
    gread = "D"
}
else if (s1 >= 0 && s1 <= 49){
    gread = "F"
}
console.log("according to s1 score =",gread ,"gread")