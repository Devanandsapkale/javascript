//Que-1  toggling effect white to dark and dark to white;
let mode = document.querySelector("#mode");
let body=document.querySelector("*");

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
//Que-2  pollendram program


mode.addEventListener("mouseover",pollendram);
function pollendram(str){
    let num = document.querySelector("#num").value;
    let num1=num.split("");
    num1+=num1.reverse().join("");
    console.log(num1==num);

}


//Que-3 make changes by using mouseover and mouseout
let div1=document.querySelector("#d1");
let div2=document.querySelector("#d2");
div1.addEventListener("mouseover",()=>{
    div1.classList.add(body);
    console.log("we in");
})
