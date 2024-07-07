let newHeading = document.createElement("h1");
newHeading.innerHTML="<i>Hi I Am New</i>";

document.querySelector("body").prepend(newHeading);
let para = document.querySelector("P");
para.remove();

newHeading.style.fontSize= "30px";
newHeading.style.color="red";
newHeading.style.border="2px solid black"