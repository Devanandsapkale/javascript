let div1 = document.getElementById("div1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");


div1.onmouseover=()=>{
    alert("MouseOvered");
}

btn2.ondblclick=() => {
    console.log("Clicked 2x times");
    let a=20;
    a++;
    console.log(a);
}

const handler3 =()=>{  // save the function in a variable for the same location
    console.log("button was Clicked4");
};
btn3.addEventListener("click", ()=>{
    console.log("button was Clicked1");
});
btn3.addEventListener("click", (handler3)); //pass here the variable for print function work

btn3.addEventListener("click",()=>{
    console.log("button was Clicked2");
});
btn3.addEventListener("click",()=>{
    console.log("button was Clicked3");
});
btn3.removeEventListener("click", ()=>{   //its not work for remove the function colled back fun should be same in this case function 2 defrent place in memory
    console.log("button was Clicked4");
});

btn3.removeEventListener("click", (handler3));