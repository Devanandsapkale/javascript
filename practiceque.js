// Que 1, print all even numbers from 0 to 100

for(let i=1;i<=20;i++){
    if(i%2===0){
        document.write("even num = ",i +"<br>");
    }
    
}

//Que 2, print all odd number from 0 to 100

for(let num=0; num<=20;num++){
    if(num%2!==0){
        document.write("odd num= ",num+"<br>");
    }
}
// Que 2 guess game number
let gameNum =25;
let userNum = prompt("Guess the game number :");
   while(userNum != gameNum){
    userNum = prompt("you chose wrong number,Guess the game number :");
   }
   console.log("Congratulation you select right number");