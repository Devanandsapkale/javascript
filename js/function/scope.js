 let a = 10;
 const b = 20;
 var c = 30;
 console.log(a);
 console.log(b);
 console.log(c);
 
function one(){
    const username = "Deva"
    
    function two(){
        const website = "youtube"
        console.log(username);        
    }
    // console.log(website);
    two()
}
one()

//+++++++++++++++++++++interesting+++++++++++++++++++++++++++++

console.log(addone(4)) // Before declaration allow
function addone(num){
    return num + 1;
}


const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5)); // Before declaration not allow
 