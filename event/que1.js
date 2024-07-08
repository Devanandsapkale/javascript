//Que-1  toggling effect white to dark and dark to white;
let mode = document.querySelector("#mode");
let body=document.querySelector("*");
let badak=document.querySelector("#badak");

let light="white";
mode.addEventListener("click",()=>{
    if(light=="white"){
    body.style.backgroundColor="black";
    light="dark";
    console.log(light);
}else{
    body.style.backgroundColor="white";
    light="white";
    console.log(light);
}
})
//Que-2  pollendrom program


badak.addEventListener("click",() =>{
    let num = document.querySelector("#num").value;
    let num1=num.split("");
    let num2=num1.reverse();
    let ans=num2.join("");
    if(ans==num){
        console.log("This is 1");
    }else{
        console.log("This is 2");
    }
    
});

    
    





