'use strict';

// What needs to happen?
// A list of goat images.
//  constructor to track properties of our images, as they get rendered:
// How many times the images was rendered.
// How many times the image was clicked.

// Randomly select images to be rendered.
// Don't want to show duplicate images, immediately after a render.

// global variables?
// Storage of images
// Page Element we need to reference?

var firstGoat = document.getElementById('first-goat');
var renderedGoat1 = null;
var goatIndex1 = null;
var secondGoat = document.getElementById('second-goat');
var renderedGoat2 = null;
var goatIndex2 = null;
var allGoatImages = [];
var totalClicks = 0;

// constructor for our goat images
function GoatImage(name, imagePath) {
  this.name = name;
  this.image = imagePath;
  this.timesClicked = 0;
  this.timesRendered = 0;
  allGoatImages.push(this);
}

new GoatImage('Sassy Goat', './assets/sassy-goat.jpg');
new GoatImage('Smiling Goat', './assets/smiling-goat.jpg');
new GoatImage('Goat Away', './assets/goat-away.jpg');
new GoatImage('Float Your Goat', './assets/float-your-goat.jpg');
new GoatImage('Sweater Goat', './assets/sweater-goat.jpg');


function getRandomGoatImage() {
  var randomIndex = Math.floor(Math.random() * allGoatImages.length);

  // check if index is already being rendered?
  while (
    renderedGoat1 === allGoatImages[randomIndex].name ||
    renderedGoat2 === allGoatImages[randomIndex].name
  ) {
    randomIndex = Math.floor(Math.random() * allGoatImages.length)
  }

  return randomIndex;
}

function handleGoatClick(event) {
  var goatId = event.target.getAttribute('alt');
  console.log(goatId);

  for (var i = 0; i < allGoatImages.length; i++) {
    if (goatId === allGoatImages[i].name) {
      allGoatImages[i].timesClicked++;
    }
  }
  if (totalClicks < 5) {
    totalClicks++;
    goatIndex1 = getRandomGoatImage();
    renderedGoat1 = allGoatImages[goatIndex1].name;
    goatIndex2 = getRandomGoatImage();
    renderGoats();
  } else {
    alert('youve clicked enough');
  }

  console.log(allGoatImages);
}

function renderGoats() {
  firstGoat.setAttribute('src', allGoatImages[goatIndex1].image);
  firstGoat.setAttribute('alt', allGoatImages[goatIndex1].name);
  allGoatImages[goatIndex1].timesRendered++;
  secondGoat.setAttribute('src', allGoatImages[goatIndex2].image);
  secondGoat.setAttribute('alt', allGoatImages[goatIndex2].name);
  allGoatImages[goatIndex2].timesRendered++;
}

firstGoat.addEventListener('click', handleGoatClick);
secondGoat.addEventListener('click', handleGoatClick);

goatIndex1 = getRandomGoatImage();
renderedGoat1 = allGoatImages[goatIndex1].name;
goatIndex2 = getRandomGoatImage();
renderedGoat2 = allGoatImages[goatIndex2].name;

renderGoats();
