/*Que1
creat a new button element by dom give it a text "click Me", 
background color of read & text color of white

Insert the button as the first element inside the body tag*/

let newElement = document.createElement("button");

newElement.innerText="Click Me";
newElement.style.backgroundColor="red";
newElement.style.color="white";
document.querySelector("body").prepend(newElement);


/*Que2
create a <P> tag in html give it a class & some styling now create a new class
in css and try to append this class to the <p> element

did you notice how you overwrite the class name when you add a new one?
solve this problem using classList. 
*/

let p1 = document.querySelector("p");
p1.classList.add("newClass");

/*creat div and give some text to is and give some design by using 
script */
let newDiv= document.createElement("div");
newDiv.innerText="this is div";
newDiv.style.border="1px solid black";
newDiv.style.width="200px"
document.querySelector("body").append(newDiv);


