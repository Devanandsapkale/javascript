const user = {
    username: "ram",
    price: 999,
    welcomeMsg: function(){
        console.log(`${this.username}, welcome to website`);   
            
    }

}
// user.welcomeMsg()
// user.username ="sam"
// user.welcomeMsg()
// console.log(this);

const fun1 = ()=>{
    let username ="sham"
    // console.log(this);   
}
fun1()

// const addTwo = (num1,num2) => {      //explicit return, 
//     return num1 + num2
// }

//const addTwo = (num1,num2) => num1 + num2 // implicit return

// const addTwo = (num1,num2) => (num1 + num2) // implicit return

const addTwo = (num1,num2) => ({username: "sham"}) // object return


console.log(addTwo(5,2));


// Immediately Invoked Function Expression (IIFE)-----------------------

(function chai(){                // named iife , fun have name 
    console.log(`DB CONNECTED`);
})();

(() =>{                         // unnemed iife , fun not have name
    console.log(`DB CONNECTED`);
})();

