// boject singleton
const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "ram"
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "ram@gmail.com",
    fullName: {
        userFullName: {
            firstName: "ram",
            lastnNme: "sharma"
        }
    }
}
// console.log(regularUser.fullName.userFullName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

//const obj3 = {obj1, obj2} // in this case obj in obj, output { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
const obj3 = Object.assign({},obj1,obj2) // output---> concad a obj in one obj -------{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj4 = {...obj1, ...obj2}
// console.log(obj3);
// console.log(obj4);

const users = [
    {
        id:1,
        email:"ram@gmai.com"
    },
    {
        id:2,
        email:"ram@gmai.com"
    },
    {
        id:3,
        email:"ram@gmai.com"
    },
    {
        id:4,
        email:"ram@gmai.com"
    }
]

users[1].email;
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // data type is array
// console.log(Object.entries(tinderUser)); // array in array 
// console.log(Object.hasOwnProperty("name")); // to find property there or not

// destructuring

const course ={
    coursName:"javascript",
    price:"1000",
}

// course.coursName

const {coursName: cn} = course // object destructuring desstructure the key name as "cn"
console.log(cn);

//api

6