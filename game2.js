// RPSLSp Game Code

/*
https://alvaromontoro.com/blog/68002/creating-a-firework-effect-with-css

NGUYEN APPROVED USING FIREWORKS BY THE WAY
YOU CAN COPY IT 
MAKE SURE TO UDNERSTAND TJE CODE THO

*/

// var rounds = parseInt(document.querySelector('#rounds').value);

/*function startGame() {
   var rounds = parseInt(document.querySelector('#rounds').value); //parseInt turns the forms drop down select number into a integer so that we will be able to use it for the number of roudnds conditonals only running once
  
  return rounds;
} */
/*
function startGame() {
  var rounds = parseInt(document.querySelector('#rounds').value);
  console.log(rounds);
}
*/

/*
console.log(document.querySelector("#game-toggle").value);

if (document.querySelector("#game-toggle").checked) {
  var rounds = parseInt(document.querySelector('#rounds').value);
  console.log(rounds);
}
*/
var rounds = 5;
 // using dropdown
var pScore = 0;
var cpuScore = 0;
var playerWin = null; // nothing stored inside global variable 'gameWinner'


function printPlayerChoice(choice) {
  if (document.getElementById("game-toggle").checked) { // This function will only run iff the box is started for begin game
    // very sad rounds :(
  	//var rounds = parseInt(document.querySelector('#rounds').value);
  
    document.getElementById("hideLineBreak").style.display = "none"; // hide an element
  	
    var choice = choice;
    var rock = document.getElementById("rockPICKG2");
    var paper = document.getElementById("paperPICKG2");
    var scissors = document.getElementById("scissorsPICKG2");
    var lizard = document.getElementById("lizardPICKG2");
    var spock = document.getElementById("spockPICKG2");
  
    if (choice === 'rock') { // with these conditionals, we will be displaying images based on the users click on the corresponding location of the image map
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
    /*
    // Disappear choices image after selecting R, P, S, L, or Sp.
    document.getElementById("meetStaff").style.display = "block"; // [...style.display = "block" keeps the image there. (https://www.w3schools.com/jsref/prop_style_display.asp#:~:text=Next%20%E2%9D%AF-,Example,-Set%20a%20%3Cdiv)
    
    // Disappear chioces image after [_] seconds.
    setTimeout(function() {document.getElementById("meetStaff").style.display = "none";}, 3000); // [...style.display = "none"] makes the image go away
  
    //https://www.w3schools.com/jsref/prop_style_display.asp
  
    // Disappear select image after _ seconds
    document.getElementById("printUserChoice").style.display = "block";
    setTimeout(function() {document.getElementById("printUserChoice").style.display = "none";}, 5000);
  
    // Disappear select text after _ seconds
    document.getElementById("printUserChoice2").style.display = "block";
    setTimeout(function() {document.getElementById("printUserChoice2").style.display = "none";}, 7000);
  
    */
  
  
    // GAME LOGIC START.
    const CHOICES = ['rock', 'paper', 'scissor', 'lizard', 'spock']; // const b/c we don't want to change it EVER
  
    var CPUchoice; // Asign value later | https://www.w3schools.com/js/js_variables.asp#:~:text=Declaring%20a%20JavaScript%20Variable
    var randomNum = Math.floor(Math.random() * 6);// Random number between 1-4, THEN plus 1 so 1-5 random number| https://www.w3schools.com/js/js_random.asp#:~:text=JavaScript%20Random%20Integers
  
    /*
    Switch() to take the random number and assign it to cases, which will declare the variable [CPUchoice].
  
    https://www.w3schools.com/js/js_switch.asp
    */
    switch (randomNum) { //switch start
      case 0:
        CPUchoice = CHOICES[0]; // if number is 0, assign first element CHOICES array/LIST to CPUchoice variable
        break;
      case 1:
        CPUchoice = CHOICES[1];
        break;
      case 2:
        CPUchoice = CHOICES[2];
        break;
      case 3:
        CPUchoice = CHOICES[3];
        break;
      case 4:
        CPUchoice = CHOICES[4];
        break;
      default: // if random number is anythjing else (like 13434), do nothing and exit switch 
        break;
    } //switch end
  
  
    /* On win, tie, loss, DISPLAY ANimation
    <img src = 'rock v. rock.gif'>
    */
    // Conditionals checks pChoice vs. CPU choice.

  
    
  
    if (choice === 'rock') { // checks if the user selected 'rock'
      if (CPUchoice === 'rock') { // if cpu generated pick is also rock, then...
        // tie
        document.getElementById("CPUmove").innerHTML = "The CPU selected rock."; // print this text at the id element [CPUmove]
        document.getElementById("RvR-text").innerHTML = "It's a tie!"; // on mext line on ID = RvR-text print this text
      }
  
      else if (CPUchoice === 'paper') { // else if statemet for checking if cpu generated pick is something other than rock
        // loss
        document.getElementById("CPUmove").innerHTML = "The CPU selected paper.";
        document.getElementById("RvR-text").innerHTML = "You lose";
        document.getElementById("reasonforwinloss").innerHTML = "Paper covers rock";
        cpuScore++;
      }
      else if (CPUchoice === 'scissor') {
        // win
        document.getElementById("CPUmove").innerHTML = "The CPU selected scissors.";
        document.getElementById("RvR-text").innerHTML = "You win!";
        document.getElementById("reasonforwinloss").innerHTML = "Rock smashes scissor";
        pScore++;
      }
      else if (CPUchoice === 'lizard') {
        // win
        document.getElementById("CPUmove").innerHTML = "The CPU selected lizard.";
        document.getElementById("RvR-text").innerHTML = "You win!";
        document.getElementById("reasonforwinloss").innerHTML = "Rock crushes lizard";
        pScore++;
      }
      else if (CPUchoice === 'spock') {
        // loss
        document.getElementById("CPUmove").innerHTML = "The CPU selected spock.";
        document.getElementById("RvR-text").innerHTML = "You lose.";
        document.getElementById("reasonforwinloss").innerHTML = "Spock vaporizes rock";
        cpuScore++;
      }
    }
    else if (choice === 'paper') {
      if (CPUchoice === 'rock') {
        // win
        document.getElementById("CPUmove").innerHTML = "The CPU selected rock.";
        document.getElementById("RvR-text").innerHTML = "You win!";
        document.getElementById("reasonforwinloss").innerHTML = "Paper covers rock";
        pScore++;
      }
      else if (CPUchoice === 'paper') {
        // tie
        document.getElementById("CPUmove").innerHTML = "The CPU selected paper.";
        document.getElementById("RvR-text").innerHTML = "It's a tie!";
      }
      else if (CPUchoice === 'scissor') {
        // loss
        document.getElementById("CPUmove").innerHTML = "The CPU selected scissors.";
        document.getElementById("RvR-text").innerHTML = "You lose.";
        document.getElementById("reasonforwinloss").innerHTML = "Scissor cuts paper";
        cpuScore++;
      }
      else if (CPUchoice === 'lizard') {
        // loss
        document.getElementById("CPUmove").innerHTML = "The CPU selected lizard.";
        document.getElementById("RvR-text").innerHTML = "You lose.";
        document.getElementById("reasonforwinloss").innerHTML = "Lizard eats paper";
        cpuScore++;
      }
      else if (CPUchoice === 'spock') {
        // win
        document.getElementById("CPUmove").innerHTML = "The CPU selected spock.";
        document.getElementById("RvR-text").innerHTML = "You win!";
        document.getElementById("reasonforwinloss").innerHTML = "Paper disproves spock";
        pScore++;
      }
    }
    else if (choice === 'scissor') {
      if (CPUchoice === 'rock') {
        // loss
        document.getElementById("CPUmove").innerHTML = "The CPU selected rock.";
        document.getElementById("RvR-text").innerHTML = "You lose.";
        document.getElementById("reasonforwinloss").innerHTML = "Rock smashes scissor";
        cpuScore++;
      }
      else if (CPUchoice === 'paper') {
        // win
        document.getElementById("CPUmove").innerHTML = "The CPU selected paper.";
        document.getElementById("RvR-text").innerHTML = "You win!";
        document.getElementById("reasonforwinloss").innerHTML = "Scissor cuts paper";
        pScore++;
      }
      else if (CPUchoice === 'scissor') {
        // tie
        document.getElementById("CPUmove").innerHTML = "The CPU selected scissors.";
        document.getElementById("RvR-text").innerHTML = "It's a tie!";
      }
      else if (CPUchoice === 'lizard') {
        // win
        document.getElementById("CPUmove").innerHTML = "The CPU selected lizard.";
        document.getElementById("RvR-text").innerHTML = "You win!";
        document.getElementById("reasonforwinloss").innerHTML = "Scissor decapitates lizard";
        pScore++;
      }
      else if (CPUchoice === 'spock') {
        // loss
        document.getElementById("CPUmove").innerHTML = "The CPU selected spock.";
        document.getElementById("RvR-text").innerHTML = "You lose.";
        document.getElementById("reasonforwinloss").innerHTML = "Spock smashes scissors";
        cpuScore++;
      }
    }
    else if (choice === 'lizard') {
      if (CPUchoice === 'rock') {
        // loss
        document.getElementById("CPUmove").innerHTML = "The CPU selected rock.";
        document.getElementById("RvR-text").innerHTML = "You lose";
        document.getElementById("reasonforwinloss").innerHTML = "Rock crushes lizard";
        cpuScore++;
      }
      else if (CPUchoice === 'paper') {
        // win
        document.getElementById("CPUmove").innerHTML = "The CPU selected paper.";
        document.getElementById("RvR-text").innerHTML = "You win!";
        document.getElementById("reasonforwinloss").innerHTML = "Lizard eats paper";
        pScore++;
      }
      else if (CPUchoice === 'scissor') {
        // loss
        document.getElementById("CPUmove").innerHTML = "The CPU selected scissors.";
        document.getElementById("RvR-text").innerHTML = "You lose.";
        document.getElementById("reasonforwinloss").innerHTML = "Scissors decapitates lizard";
        cpuScore++;
      }
      else if (CPUchoice === 'lizard') {
        // tie
        document.getElementById("CPUmove").innerHTML = "The CPU selected lizard.";
        document.getElementById("RvR-text").innerHTML = "It's a tie!";
        
      }
      else if (CPUchoice === 'spock') {
        // win
        document.getElementById("CPUmove").innerHTML = "The CPU selected spock.";
        document.getElementById("RvR-text").innerHTML = "You win!";
        document.getElementById("reasonforwinloss").innerHTML = "Lizard poisons spock";
        pScore++;
      }
    }
    else if (choice === 'spock') {
      if (CPUchoice === 'rock') {
        // win
        document.getElementById("CPUmove").innerHTML = "The CPU selected rock.";
        document.getElementById("RvR-text").innerHTML = "You win!";
        document.getElementById("reasonforwinloss").innerHTML = "Spock vaporizes rock";
        pScore++;
      }
      else if (CPUchoice === 'paper') {
        // loss
        document.getElementById("CPUmove").innerHTML = "The CPU selected paper.";
        document.getElementById("RvR-text").innerHTML = "You lose.";
        document.getElementById("reasonforwinloss").innerHTML = "Paper disproves spock";
        cpuScore++;
      }
      else if (CPUchoice === 'scissor') {
        // win
        document.getElementById("CPUmove").innerHTML = "The CPU selected scissors.";
        document.getElementById("RvR-text").innerHTML = "You win!";
        document.getElementById("reasonforwinloss").innerHTML = "Spock smashes scissors";
        pScore++;
      }
      else if (CPUchoice === 'lizard') {
        // loss
        document.getElementById("CPUmove").innerHTML = "The CPU selected lizard.";
        document.getElementById("RvR-text").innerHTML = "You lose!";
        document.getElementById("reasonforwinloss").innerHTML = "Lizard poisons spock";
        cpuScore++;
      }
      else if (CPUchoice === 'spock') {
        // tie
        document.getElementById("CPUmove").innerHTML = "The CPU selected spock.";
        document.getElementById("RvR-text").innerHTML = "It's a tie!";
      }
    } // CONDITIONAL END
    rounds--; // subtract 1 from rounds each time
    //console.log(rounds);
    document.getElementById("round").innerHTML = "Round: " + rounds; // print rounds number at id = "rounds"
    //console.log(score);
    document.getElementById("score").innerHTML = "CPU: " + cpuScore + " | You: " + pScore; // print current score
  
    if (rounds === 0 || rounds < 0) { // if rounds = 0, then... game over code begins
      document.getElementById("gameOver").innerHTML = "No more rounds left to play! Game over";
      document.getElementById("gameOverPic").innerHTML = "<img src = 'Multimedia/Images/gameOver.png' class = 'yourChoiceRock-pic'>"; // adds this image
      document.getElementById("meetStaff").style.display = "none"; // takes away this text/image
      document.getElementById("printUserChoice").style.display = "none"; // takes away this text/image
      document.getElementById("printUserChoice2").style.display = "none"; // takes away this text/image
      document.getElementById("game-status").style.display = "none"; // takes away this text/image
      document.getElementById("game-toggle").style.display = "none"; // takes away this text/image
      document.querySelector("#game-toggle").value === "0"; // reset the game start box back to 0 to not start game again
      //https://www.w3schools.com/jsref/met_win_settimeout.asp
      // use setTimeout() method to delay removing/adding something onto screen
      setTimeout(function() {document.getElementById('CPUmove').style.display = 'none';}, 2000);
        setTimeout(function() {document.getElementById('RvR-text').style.display = 'none';}, 2500);
        setTimeout(function() {document.getElementById('reasonforwinloss').style.display = 'none';}, 3000);
        document.getElementById("html2noise").innerHTML = '<source src="Multimedia/Audio/mixkit-funny-game-over-2878.wav">';

         //https://www.w3schools.com/jsref/met_loc_replace.aspdocument.getElementById("html2noise").innerHTML = '<source src="Multimedia/Audio/mixkit-funny-game-over-2878.wav">';

  
      document.getElementById("winLoseb4Line").innerHTML = "---------------";
      // who won / loss specific outputs
      if (pScore > cpuScore) {
        //var playerWin = true;
    document.getElementById("winLose").innerHTML = "You WIN the entire GAME!";
        setTimeout(function() {location.replace(href = "win.html")}, 10000);
    }
      else if (pScore === cpuScore) {
        document.getElementById("winLose").innerHTML = "Overall tie! Click reset to play again :)";
    }
      else {
        //var playerWin = false;
    document.getElementById("winLose").innerHTML = "You lost this entire game :(";
        setTimeout(function() {location.replace(href = "awards.html")}, 10000);
    }
  
  
  
      return playerWin;
      
    }
  }
} // Function end




// reset score function
/*
reset all variables to 0 /// rounds to 5
*/

function reset() {
  location.reload(); //https://www.w3schools.com/jsref/met_loc_reload.asp
  /*
  var pScore = 0;
  var cpuScore = 0;
  var rounds = 5;
  var choice = null;
  var CPUchoice = null;
 document.getElementById("gameOver").innerHTML = "No more rounds left to play! Game over";
    
    document.getElementById("meetStaff").style.display = "block";
    document.getElementById("printUserChoice").style.display = "block";
    document.getElementById("printUserChoice2").style.display = "block";
    document.getElementById("game-status").style.display = "block";
    document.getElementById("game-toggle").style.display = "block";
    document.querySelector("#game-toggle").value === "1";
    */
}


// AWARDS
/*
function awards() {
  if (playerWin == true) {
  document.getElementById("yourAward").innerHTML = "PARTYYYY PEOPLE 🎉🥳🎈 | YOU WON !!!!!";
  }

  else {
    document.getElementById("yourAward").innerHTML = "No reward for you bozo"
  }
}
*/






// DARK MODE ON RPSLSp HTML Page
// just changing some CSS around
function toggleDarkMode() {
  var everything = document.getElementById("RPSLSpmargin"); // less typing nothing else
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