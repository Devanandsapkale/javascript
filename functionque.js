/*create a function using the "function" keyword that takes a string as an 
argument & return the number of vowels in the string*/
function countVowels(str){
    let count = 0;
    for(const char of str){
    if(char === "a" || char === "e"|| char === "i"||char === "o" ||char === "u"){
        count++;
    }

        
    }
    console.log(count); // after run the program in the console we call the function and give the string to the function
}
countVowels("aeiou");

//creat a arrow function for same task
const vowelCount = (str) =>{
    let count =0;
    for(const char of str){
        if(char==="a"|| char==="e"|| char==="i"|| char==="o"|| char==="u"){
            count++;
        }
    
    }
    console.log(count);
}
vowelCount("welcome");

// foreach loop in array ---> it is a function 
let arr = [1,2,3,4,5];

arr.forEach(function printVal(val){ //value at each idx
    console.log(val);
})

//make the for each loop with arrow function

let num = [1,2,3,4,5,6,7];


num.forEach((val) => {
    console.log(val);
})
let str =["red","green","pink","orange"]