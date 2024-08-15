
function loginUserMsg(username){
    if(username===undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMsg("dev"))
console.log(loginUserMsg("Dev"))

function calculateCarrPrice(...num1){
    return num1
}
// console.log(calculateCarrPrice(200, 400, 600));
const user ={
    userName:"hitesh",
    price:999
}
function handleObject(anuobject){
    console.log(`Username is ${anuobject.userName} and price is ${anuobject.price}`);
}
// handleObject(user)
handleObject({
    userName:"sam",
    price:499
})

const myNewArray = [100,200,300,400]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
