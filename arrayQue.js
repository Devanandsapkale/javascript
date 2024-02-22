//Que 1:- for a given array with marks of student->[85.97.44.37.76.60]
//find the avetage marks of the entire class.

let marks=[85,97,44,37,76,60];
let sum=0;
for(let val of marks){
    sum=sum+val;//easy way to write it is = sum+= val;
}
let avg = sum/marks.length;
console.log(marks);
console.log(sum);
console.log(avg);

/* Que2 :- for a given array with of 5 item->[250,645,300,900,50]
all items have an offer of 10% off on them changes the array to store
final price after applying offer*/

let item = [250,645,300,900,50]; 
let i=0;
for(let val of item){
    let offer =val/10;
    item[i] = item[i]- offer;
    console.log(`value at offer = ${item[i]}`);
    i++;
}
console.log(i);

//use  for loop
let items=[200,300,400,500,600,700,]
for(let i=0; i<items.length;i++){
    let offer = items[i]/10;
    items[i]-=offer;

}
console.log(items);

/*create an array to store companies-->bloomberg,microsoft,uber,google,ibm,netfilix
a. romove the first company from the array
b. remove uber and add ola in its place 
c. add amazon at the end*/

let companies =["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.shift();
companies.splice(1,1,"ola");
companies.push("Amazon");
console.log(companies);

    