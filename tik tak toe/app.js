let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#esetBtn");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")


let trunX = true; // playerX, playerO
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]
boxes.forEach((box)=>{
    box.addEventListener("click", () => {
        box.innetText = "abc";
    })
})