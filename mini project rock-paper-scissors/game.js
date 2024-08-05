let userScore =0;
let compScore =0;
const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options =["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
    //rock, paper, scissors
}

const playGame =(userChoice)=>{
    console.log("user choice",userChoice);    
    //Generate computer choice --> moduler way of programming
    const compChoice =genCompChoice();
    console.log("comp choice",compChoice);   
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})