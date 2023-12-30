// RPS Game Code
var rounds = 5;
var pScore = 0;
var cpuScore = 0;
var playerWin = null;


function printPlayerChoice(choice) {
  if (document.getElementById("game-toggle").checked) {
  
    document.getElementById("hideLineBreak").style.display = "none";
  	
    var choice = choice;
    var rock = document.getElementById("rockPICKG2");
    var paper = document.getElementById("paperPICKG2");
    var scissors = document.getElementById("scissorsPICKG2");
    var lizard = document.getElementById("lizardPICKG2");
    var spock = document.getElementById("spockPICKG2");
  
    if (choice === 'rock') {
      document.getElementById("printUserChoice").innerHTML = "<img src = 'Multimedia/Images/yourChoiceRock.png' class = 'yourChoiceRock-pic'>";
      document.getElementById("printUserChoice2").innerHTML = "Excellent choice!";
    }
  
    else if (choice === 'paper') {
      document.getElementById("printUserChoice").innerHTML = "<img src = 'Multimedia/Images/yourChoicePaper.png' class = 'yourChoiceRock-pic'>";
      document.getElementById("printUserChoice2").innerHTML = "Solid pick!";
    }
  
    else if (choice === 'scissor') {
      document.getElementById("printUserChoice").innerHTML = "<img src = 'Multimedia/Images/yourChoiceScissor.png' class = 'yourChoiceRock-pic'>";
      document.getElementById("printUserChoice2").innerHTML = "I smell a dub!";
    }
  
    else if (choice === 'lizard') {
      document.getElementById("printUserChoice").innerHTML = "<img src = 'Multimedia/Images/yourChoiceLizard.png' class = 'yourChoiceRock-pic'>";
      document.getElementById("printUserChoice2").innerHTML = "Guaranteed win!";
    }
  
    else if (choice === 'spock') {
      document.getElementById("printUserChoice").innerHTML = "<img src = 'Multimedia/Images/yourChoiceSpock.png' class = 'yourChoiceRock-pic'>";
      document.getElementById("printUserChoice2").innerHTML = "Nice chances!";
  
    }
  
    document.getElementById("hr").innerHTML = "-----------------";
    
    const CHOICES = ['rock', 'paper', 'scissor'];
  
    var CPUchoice;
    var randomNum = Math.floor(Math.random() * 4);
  
  
    switch (randomNum) {
      case 0:
        CPUchoice = CHOICES[0];
        break;
      case 1:
        CPUchoice = CHOICES[1];
        break;
      case 2:
        CPUchoice = CHOICES[2];
        break;
      default:
        break;
    } 
    
    if (choice === 'rock') {
      if (CPUchoice === 'rock') {
        
        document.getElementById("CPUmove").innerHTML = "The CPU selected rock.";
        document.getElementById("RvR-text").innerHTML = "It's a tie!";
      }
  
      else if (CPUchoice === 'paper') {
        
        document.getElementById("CPUmove").innerHTML = "The CPU selected paper.";
        document.getElementById("RvR-text").innerHTML = "You lose";
        document.getElementById("reasonforwinloss").innerHTML = "Paper covers rock";
        cpuScore++;
      }
      else if (CPUchoice === 'scissor') {
        
        document.getElementById("CPUmove").innerHTML = "The CPU selected scissors.";
        document.getElementById("RvR-text").innerHTML = "You win!";
        document.getElementById("reasonforwinloss").innerHTML = "Rock smashes scissor";
        pScore++;
      }
    }
    else if (choice === 'paper') {
      if (CPUchoice === 'rock') {
        
        document.getElementById("CPUmove").innerHTML = "The CPU selected rock.";
        document.getElementById("RvR-text").innerHTML = "You win!";
        document.getElementById("reasonforwinloss").innerHTML = "Paper covers rock";
        pScore++;
      }
      else if (CPUchoice === 'paper') {
        
        document.getElementById("CPUmove").innerHTML = "The CPU selected paper.";
        document.getElementById("RvR-text").innerHTML = "It's a tie!";
      }
      else if (CPUchoice === 'scissor') {
        
        document.getElementById("CPUmove").innerHTML = "The CPU selected scissors.";
        document.getElementById("RvR-text").innerHTML = "You lose.";
        document.getElementById("reasonforwinloss").innerHTML = "Scissor cuts paper";
        cpuScore++;
      }
    }
    else if (choice === 'scissor') {
      if (CPUchoice === 'rock') {
        
        document.getElementById("CPUmove").innerHTML = "The CPU selected rock.";
        document.getElementById("RvR-text").innerHTML = "You lose.";
        document.getElementById("reasonforwinloss").innerHTML = "Rock smashes scissor";
        cpuScore++;
      }
      else if (CPUchoice === 'paper') {
        
        document.getElementById("CPUmove").innerHTML = "The CPU selected paper.";
        document.getElementById("RvR-text").innerHTML = "You win!";
        document.getElementById("reasonforwinloss").innerHTML = "Scissor cuts paper";
        pScore++;
      }
      else if (CPUchoice === 'scissor') {
        
        document.getElementById("CPUmove").innerHTML = "The CPU selected scissors.";
        document.getElementById("RvR-text").innerHTML = "It's a tie!";
      }
    }
    else if (choice === 'lizard') {
      if (CPUchoice === 'rock') {
        
        document.getElementById("CPUmove").innerHTML = "The CPU selected rock.";
        document.getElementById("RvR-text").innerHTML = "You lose";
        document.getElementById("reasonforwinloss").innerHTML = "Rock crushes lizard";
        cpuScore++;
      }
      else if (CPUchoice === 'paper') {
        
        document.getElementById("CPUmove").innerHTML = "The CPU selected paper.";
        document.getElementById("RvR-text").innerHTML = "You win!";
        document.getElementById("reasonforwinloss").innerHTML = "Lizard eats paper";
        pScore++;
      }
      else if (CPUchoice === 'scissor') {
        
        document.getElementById("CPUmove").innerHTML = "The CPU selected scissors.";
        document.getElementById("RvR-text").innerHTML = "You lose.";
        document.getElementById("reasonforwinloss").innerHTML = "Scissors decapitates lizard";
        cpuScore++;
      }
    }
    else if (choice === 'spock') {
      if (CPUchoice === 'rock') {
        
        document.getElementById("CPUmove").innerHTML = "The CPU selected rock.";
        document.getElementById("RvR-text").innerHTML = "You win!";
        document.getElementById("reasonforwinloss").innerHTML = "Spock vaporizes rock";
        pScore++;
      }
      else if (CPUchoice === 'paper') {
        
        document.getElementById("CPUmove").innerHTML = "The CPU selected paper.";
        document.getElementById("RvR-text").innerHTML = "You lose.";
        document.getElementById("reasonforwinloss").innerHTML = "Paper disproves spock";
        cpuScore++;
      }
      else if (CPUchoice === 'scissor') {
        
        document.getElementById("CPUmove").innerHTML = "The CPU selected scissors.";
        document.getElementById("RvR-text").innerHTML = "You win!";
        document.getElementById("reasonforwinloss").innerHTML = "Spock smashes scissors";
        pScore++;
      }
    } 

    
    rounds--;
    console.log(rounds);
    document.getElementById("round").innerHTML = "Round: " + rounds;
    
    document.getElementById("score").innerHTML = "CPU: " + cpuScore + " | You: " + pScore;
  
    if (rounds === 0 || rounds < 0) {
      document.getElementById("gameOver").innerHTML = "No more rounds left to play! Game over";
      document.getElementById("gameOverPic").innerHTML = "<img src = 'Multimedia/Images/gameOver.png' class = 'yourChoiceRock-pic'>";
      document.getElementById("meetStaff").style.display = "none";
      document.getElementById("printUserChoice").style.display = "none";
      document.getElementById("printUserChoice2").style.display = "none";
      document.getElementById("game-status").style.display = "none";
      document.getElementById("game-toggle").style.display = "none";
      document.querySelector("#game-toggle").value === "0";
      setTimeout(function() {document.getElementById('CPUmove').style.display = 'none';}, 2000);
        setTimeout(function() {document.getElementById('RvR-text').style.display = 'none';}, 2500);
        setTimeout(function() {document.getElementById('reasonforwinloss').style.display = 'none';}, 3000);
        setTimeout(function() {location.replace(href = "awards.html")}, 10000);
  
      document.getElementById("winLoseb4Line").innerHTML = "---------------";
  
      if (pScore > cpuScore) {
    var playerWin = true;
    document.getElementById("winLose").innerHTML = "You WIN the entire GAME!";
    }
      else if (pScore === cpuScore) {
    document.getElementById("winLose").innerHTML = "Overall tie! Click reset to play again :)";
    }
      else {
    var playerWin = false;
    document.getElementById("winLose").innerHTML = "You lost this entire game :(";
    }
  
  
  
      return playerWin;
      
    }
  }
} 




function reset() {
  location.reload(); 
}


function awards() {
  if (playerWin == true) {
  document.getElementById("yourAward").innerHTML = "PARTYYYY PEOPLE 🎉🥳🎈 | YOU WON !!!!!";
  }

  else {
    document.getElementById("yourAward").innerHTML = "No reward for you bozo"
  }
}

function toggleDarkMode() {
  var everything = document.getElementById("RPSLSpmargin"); 
  var servicesPicture = document.getElementById("servicesPicture");
  var pickUs = document.getElementById("pickUs");

  if (everything.style.backgroundColor === "black") {
    everything.style.backgroundColor = "white";
    everything.style.color = "black";

  }

  else {
    everything.style.backgroundColor = "black";
    everything.style.color = "white";
  }
}