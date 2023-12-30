// Fix JS CODE LATER

function toggleDarkMode() {
  var everything = document.getElementById("everything"); // less typing nothing els
  var servicesPicture = document.getElementById("servicesPicture");
  var pickUs = document.getElementById("pickUs");
  var ultimateGame = document.getElementById("ultimateGame");
  var homeImageCaption = document.getElementById("homeImageCaption");
  
  

  if (everything.style.backgroundColor === "black") {
    everything.style.backgroundColor = "white";
    everything.style.color = "black";
    ultimateGame.style.color = "black";
    homeImageCaption.style.color = "black";
    servicesPicture.style.backgroundColor = "black";
    pickUs.style.color = "#333333";
  }

  else {
    everything.style.backgroundColor = "black";
    everything.style.color = "#EEEEEE";
    ultimateGame.style.color = "#EEEEEE";
    homeImageCaption.style.color = "#EEEEEE";
    servicesPicture.style.backgroundColor = "white";
    pickUs.style.color = "#EEEEEE";
  }
}

