// When button pressed
function draw() {

  // Getting the elements and giving them variables to simplfy reading
  var text = document.getElementById('id');
  var button = document.getElementById('button');
  // Note that img and img2
  // The other draw call will have them switched
  var img = document.getElementById('img');
  var img2 = document.getElementById('img2');

  // Randomize the card
  random(img);

  // Play audio
  var audio = new Audio('assets/vo.mp3');
  audio.play();

  // Changing the button onclick to draw2()
  button.onclick = draw2;

  // Moving the cards
  action(img, img2);
}

// When button pressed again
function draw2() {
  // Getting the elements and giving them variables to simplfy reading
  var text = document.getElementById('id');
  var button = document.getElementById('button');
  // Note taht img and img2
  // It is switched around
  var img = document.getElementById('img2');
  var img2 = document.getElementById('img');

  // Randomize the card
  random(img);

  // Play audio
  var audio = new Audio('assets/vo.mp3');
  audio.play();

  // Chaning the button onclick back to draw()
  button.onclick = draw;

  // Moving the cards
  action(img, img2);
}

// Randomizes the image
function random(img) {
  // Generates a random number between 0 and 1 but then we * 10 and + 1 to make it inbetween 1 - 10
  var number = Math.floor((Math.random() * 10) + 1);
  console.log(number);
  addDamage(1500);

  // Depending on the value display an image related to that
  switch (number) {
    case 1:
      img.src = "assets/image.jpg";
      break;
    case 2:
      img.src = "assets/image10.jpg";
      break;
    case 3:
      img.src = "assets/image2.jpg";
      break;
    case 4:
      img.src = "assets/image3.jpg";
      break;
    case 5:
      img.src = "assets/image4.jpg";
      break;
    case 6:
      img.src = "assets/image5.jpg";
      break;
    case 7:
      img.src = "assets/image6.jpg";
      break;
    case 8:
      img.src = "assets/image7.jpg";
      break;
    case 9:
      img.src = "assets/image8.jpg";
      break;
    case 10:
      img.src = "assets/image9.jpg";
      break;
    default: img.src = "assets/image.jpg";


  }
}

// This is the action where the incoming card goes ontop of the other
function action(img, img2) {
  img.className = "top";
  img2.className = "bot";

  // Image 1 getting set into action
  img.style.transition = "top 200ms ease-out 120ms";
  img.style.top = "80px";

  // Image 2 getting put pack
  img2.style.transition = "top 0ms ease-out 320ms";
  img2.style.top = "-450px";

  location.href ='Connect.php';
}

// Calculating the damage taken
// Variables
var totalDamage = 0;
var drawn = 0;

function addDamage(int) {
  var text1 = document.getElementById('text1');
  var text2 = document.getElementById('text2');
  totalDamage = totalDamage + int;
  ++drawn;
  // Posts the amount into the console
  console.log("You Duro'd " + drawn + " times");
  console.log("Weevil has so far lost a total of " + totalDamage + " life points");
  // Also changes the text on the site
  text1.innerHTML = "You Duro'd " + drawn + " times";
  text2.innerHTML = "Weevil has so far lost a total of " + totalDamage + " life points";


}
