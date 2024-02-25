let arr=["pune","mumbai","delhi","nashik"];

arr.forEach(function printVal(val){ // value at each idx
    console.log(val);
});
//creat a foreach with arrow function

let num=[1,2,3,4,5];
num.forEach((val,idx) =>{
    console.log(val,idx);
});
//Que for a given array of number print the squre of each value using forEach loop.
let number=[1,2,3,4,5];
let sqr="";
number.forEach((num) =>{
        console.log(num*num);
})
    
 // map method

let nms = [5,10,15,20,25];
let newarr = nms.map((val) => {
    return val ;
})
console.log(newarr);

let calcSquare = (num) => {
    console.log(num * num);
};