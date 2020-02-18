'use strict';

var allBusMallProduct = [];
var one = document.getElementById('1');
var two = document.getElementById('2');
var three = document.getElementById('3');
var totalClicks = 0;
var chart = null;

// constructor for products
function Product(name, imagePath) {
  this.name = name;
  this.image = imagePath;
  this.timesClicked = 0;
  this.timesRendered = 0;
  allBusMallProduct.push(this);
}

var image1 = [];
var image2 = [];
var image3 = [];

var bag = new Product('Bag', './assets/bag.jpg');
var banana = new Product('Banana', './assets/banana.jpg');
var bathroom = new Product('Bathroom', './assets/bathroom.jpg');
var breakfast = new Product('Breakfast', './assets/breakfast.jpg');
var bubblegum = new Product('Bubblegum', './assets/bubblegum.jpg');
var chair = new Product('Chair', './assets/chair.jpg');
console.log(allBusMallProduct);

// image1 = [bag, banana];
// image2 = [breakfast, bubblegum];
// image3 = [bathroom, chair];

// randomly generate images and display them on the page
function getRandom(image) {
  var randomIndex = Math.floor(Math.random() * image.length);
  var randomImage = image[randomIndex];

  // conditional logic here to make sure rendered images are different than random
  while (
    // we don't want duplicates
    randomImage.name === one.alt ||
    randomImage.name === two.alt ||
    randomImage.name === three.alt
  ) {
    randomIndex = Math.floor(Math.random() * image.length);
    randomImage = image[randomIndex];
  }

  return randomImage;
}

function onClick(event) {
  var imageName = event.target.getAttribute('alt');

  if (totalClicks < 5) {
    totalClicks++;
    // what do we want to do here?
    for (var i = 0; i < allBusMallProduct.length; i++) {
      if (imageName === allBusMallProduct[i].name) {
        allBusMallProduct[i].timesClicked++
        console.log(allBusMallProduct[i]);
      }
    }

    // Get new images after we update products
    render();
    chart.data.datasets[0].data[0] = 20;
  } else {
    alert('Youve done all the clicks');
    one.removeEventListener('click', onClick);
    two.removeEventListener('click', onClick);
    three.removeEventListener('click', onClick);
    console.log(allBusMallProduct);
  }
}

function render() {
  var randomImage1 = getRandom(allBusMallProduct);
  one.setAttribute('src', randomImage1.image);
  one.setAttribute('alt', randomImage1.name);
  randomImage1.timesRendered++;
  var randomImage2 = getRandom(allBusMallProduct);
  two.setAttribute('src', randomImage2.image);
  two.setAttribute('alt', randomImage2.name);
  randomImage2.timesRendered++;
  var randomImage3 = getRandom(allBusMallProduct);
  three.setAttribute('src', randomImage3.image);
  three.setAttribute('alt', randomImage3.name);
  randomImage3.timesRendered++;
}
render();

one.addEventListener('click', onClick);
two.addEventListener('click', onClick);
three.addEventListener('click', onClick);

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// shaping our own data to ma

function formatChartLabels(arr) {
  console.log(arr);
  var labels = [];

  for (var i = 0; i < arr.length; i++) {
    labels.push(arr[i].name);
  }

  return labels;
}

chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
