"use strict"; // treat all js as newr version of js its not required 

//alert(3 + 3)  // its not work becouse we using nodejs, not browser




//primitive data type

// number -------- range 2 to power 53
// string -------- " "
// boolean ------- true/false
// bigint -------- its use if you have big number
// null ---------- standalone value
// undefined ----- not defined
// symbol --------- unique


 let city = 'pune';
 let rollNum = 33;
 let present = true;
 let value = null;
 let pass;
 console.table(typeof(city));
 console.table(typeof(rollNum));
 console.table(typeof(present));
 console.table(typeof(value));
 console.table(typeof(pass));

 //Non primitive data type

//object array, object, function

// for creat a array we use []

const color = ["orange10", "green", "red","blue"]

// for creat a an object we use { key: value} and store the value is a key

let student1 = {
    Name : "Dev",
    Roll : 121,

}

// for creat a function we use---- function(){-------write a code----}

const myFunction = function(){
    console.log("hello from function");
}


console.table([color,student1]); 
