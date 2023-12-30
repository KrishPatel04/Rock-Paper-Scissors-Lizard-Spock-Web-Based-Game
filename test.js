/* NOT USED JS CODE FILE
Line 104-122 depict how we were originally going to do an animation.
We later abandon this as it was taking wayyy tooo long :(
*/

// CURRENTLY NOT BE USED AT ALL FOR ANYTHING


// RPSLSp Game Code

function printPlayerChoice(choice) {
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




  // GAME LOGIC START.
  const CHOICES = ['rock', 'paper', 'scissor', 'lizard', 'spock'];
  
  var CPUchoice; // Asign value later | https://www.w3schools.com/js/js_variables.asp#:~:text=Declaring%20a%20JavaScript%20Variable
  var randomNum = Math.floor(Math.random() *5) + 1;// Random number between 1-4, THEN plus 1 so 1-5 random number| https://www.w3schools.com/js/js_random.asp#:~:text=JavaScript%20Random%20Integers

  /*
  Switch() to take the random number and assign it to cases, which will declare the variable [CPUchoice].

  https://www.w3schools.com/js/js_switch.asp
  */
  switch(randomNum) { //switch start
    case 0:
      CPUchioce = CHOICES[0];
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
    default:
      break;
  } //switch end

  var CPUchoice = 'rock';

  /* On win, tie, loss, DISPLAY ANimation
  <img src = 'rock v. rock.gif'>
  */
  // Conditionals checks pChioce vs. CPU chioce.
  if (choice === 'rock') {
    if (CPUchoice === 'rock') {
      // tie

      // DO NOT CHANGE.
      document.getElementById("RvR-animation").innerHTML = "<img src='Multimedia/Images/white.png'>";
      setTimeout(function() {
        document.getElementById("RvR-animation").style.display = 'none';
      
      // wait for 5 seconds
      setTimeout(function() {
        document.getElementById("RvR-animation").innerHTML = "<img src='Multimedia/Images/RvR.png'>";
        document.getElementById("RvR-animation").style.display = 'block';

        // wait for 2 seconds and then hide the image
        setTimeout(function() {
          document.getElementById("RvR-animation").style.display = 'none';
        }, 2000);
        
        }, 2000);
      
      }, 9000);
      // DO NOT CHANGE.

      
      
    }

    else if (CPUchoice === 'paper') {
      // loss
    }
    else if (CPUchoice === 'scissor') {
      // win
    }
    else if (CPUchoice === 'lizard') {
      // win
    }
    else if (CPUchoice === 'spock') {
      // loss
    }
  }
  else if (choice === 'paper') {
    if (CPUchoice === 'rock') {
      // win
    }
    else if (CPUchoice === 'paper') {
      // tie
    }
    else if (CPUchoice === 'scissor') {
      // loss
    }
    else if (CPUchioce === 'lizard') {
      // loss
    }
    else if (CPUchoice === 'spock') {
      // win
    }
  }
  else if (choice === 'scissor') {
    if (CPUchoice === 'rock') {
      // loss
    }
    else if (CPUchoice === 'paper') {
      // win
    }
    else if (CPUchoice === 'scissor') {
      // tie
    }
    else if (CPUchioce === 'lizard') {
      // win
    }
    else if (CPUchoice === 'spock') {
      // loss
    }
  }
  else if (choice === 'lizard') {
    if (CPUchoice === 'rock') {
      // loss
    }
    else if (CPUchoice === 'paper') {
      // win
    }
    else if (CPUchoice === 'scissor') {
      // loss
    }
    else if (CPUchioce === 'lizard') {
      // tie
    }
    else if (CPUchoice === 'spock') {
      // win
    }
  }
  else if (choice === 'spock') {
    if (CPUchoice === 'rock') {
      // win
    }
    else if (CPUchoice === 'paper') {
      // loss
    }
    else if (CPUchoice === 'scissor') {
      // win
    }
    else if (CPUchioce === 'lizard') {
      // loss
    }
    else if (CPUchoice === 'spock') {
      // tie
    }
  } // CONDITIONAL END
} // Function end