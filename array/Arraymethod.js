let arr=[123,"dev",562,"ad44"];
let arr2=["5dev",525,765]
console.log(arr);
console.log(arr.toString());
console.log(arr.push("dev",777));
console.log(arr.pop());
console.log(arr.shift());
console.log(arr.unshift(111,'YASH'));
console.log(arr.concat(arr2));
console.log(arr.join(""));
console.log(arr.splice(1,2));
console.log(arr.slice(1,3));
let arr1=[111,"phone",6546,'kotr77'];
// let arr3 =[];
// for(i=0;i<=arr.length;i++){
//     arr3.push(arr[i]);
// }
// console.log(arr3);
for(arr3 of arr){
    console.log(arr3);
}


// let ans=[];
function funAdd(){
    let num1=document.getElementById("num1").value;
let num2=document.getElementById("num2").value;
   let ans= parseInt(num1)+parseInt(num2);
   console.log(ans);
}
