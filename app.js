 var playerHolderScore = 0;
 var computerHolderScore = 0;
 var player;

 function playerChoice(choice) {
     if (choice === 'rock') {
         document.getElementById("player-hand-image").src = "images/rockleft.png";
     } else if (choice === 'paper') {
         document.getElementById("player-hand-image").src = "images/paperleft.png";
     } else {
         document.getElementById("player-hand-image").src = "images/scissorsleft.png";       
     }

     player = choice;
     console.log(player)
 }


 function play() {
     document.getElementById('computer-hand-image').classList.add("spinner");
     var timeOut = setTimeout(function () {
         computerChoice();
         document.getElementById('computer-hand-image').classList.remove("spinner");
     }, 1000)

 }

 function computerChoice() {
     let generateComputerHand = Math.floor(Math.random() * 3) + 1;
     let finalComputerHand;

     switch (generateComputerHand) {
         case 1:
             finalComputerHand = "rock"
             break;
         case 2:
             finalComputerHand = "paper"
             break;
         case 3:
             finalComputerHand = "scissors"
             break;
     }

     document.getElementById("computer-hand-image").src = "images/" + finalComputerHand + "right.png";
     whowon(player, finalComputerHand);


 }


 function whowon(player, computer) {
     console.log(player, "player", computer, "computer")
     let playerScore = document.getElementById("player-score").value;
     let computerScore = document.getElementById("computer-score").value;
     

     if (player === computer) {
         document.getElementById("gameResult").innerHTML = "Boring... you tied.";
         console.log("tie")
     } else if (player === 'rock' && computer === 'scissors') {
         console.log("player won")
         document.getElementById("gameResult").innerHTML = "Woohooo, you won";
         playerHolderScore += 1;
     } else if (player === 'scissors' && computer === 'paper') {
         console.log("player won")
         document.getElementById("gameResult").innerHTML = "Woohooo, you won";
         playerHolderScore += 1;
     } else if (player === 'paper' && computer === 'rock') {
         console.log("player won")
         document.getElementById("gameResult").innerHTML = "Woohooo, you won";
         playerHolderScore += 1;
     } else {
         console.log("player lost")
         document.getElementById("gameResult").innerHTML = "Boooo, you lost";
         computerHolderScore += 1;
     }

     playerScore = document.getElementById("player-score").value = playerScore;
     computerScore = document.getElementById("computer-score").value = computerScore;

     document.getElementById("pScore").innerHTML = playerHolderScore;
     document.getElementById("cScore").innerHTML = computerHolderScore;
 }