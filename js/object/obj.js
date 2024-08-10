// singleton --- if obj created by constructer then its singleton

// object literals


const mySym = Symbol("key1") // declare symbol

const jsUser = {
    name : "ram",
    [mySym]: "mykey1", // add symbol in key
    age : 20,
    emai : "ram@gmail.com",
    isLogin: false,
    lastLoginDay: ["monday","saturday"]
}
// console.log(jsUser.emai);
// console.log(jsUser["emai"]);false
// console.log(jsUser[mySym]);

jsUser.emai = "dev@chargpt.com"; // change the key value
//Object.freeze(jsUser); // object.freeze(value of obj) to freeze no one con che value after that
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`hello js user1, ${this.name}`); // by using this we can refre same object
}
console.log(jsUser.greeting); // function not be run function return back
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

// object singletun  ----------> how to declar with cunstructer

//const tinderUser = new Object(); //single tun object
const tinderUser = {} //non single tun object / literals object
console.log(tinderUser);









