var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var Seattle = {
  name: 'Seattle',
  mincust: 23,
  maxcust: 65,
  avgcookie: 6.3,
  cookiesPerHours: {
    byHour: [],
    totalCookies: 0,
  },
  render: function () { // render a list of hours and cookies sold for that hour!
    var listEl = document.getElementById('locations');
    // add heading
    var heading = document.createElement('h2');
    heading.textContent = this.name;
    listEl.appendChild(heading);

    for (var i = 0; i < this.cookiesPerHour.byHour.length; i++) {
      var itemEl = document.createElement('li');
      itemEl.textContent = hours[i] + ' ' + this.cookiesPerHour.byHour[i];
      listEl.appendChild(itemEl);
    }
  }
}
var Tokyo = {
  name: 'tokyo',
  mincust: 3,
  maxcust: 24,
  avgcookie: 1.2
}
var Dubai = {
  name: 'Dubai',
  mincust: 11,
  maxcust: 38,
  avgcookie: 3.7
}
var Paris = {
  name: 'Paris',
  mincust: 20,
  maxcust: 38,
  avgcookie: 2.3,
}
var Lima = {
  name: 'Lima',
  mincust: 2,
  maxcust: 16,
  avgcookie: 4.6
}

// Calculates a random number between max, and min
function getrandomcust(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
}
// function seattle
var stores = [Seattle, Lima, Paris, Dubai, Tokyo];

// Calculating the number of cookies sold per hour.
function calculateCookies(store) {
  var cookiesPerHour = [];
  var totalCookies = 0;
  for (var i = 0; i < hours.length; i++) {
    var testNumber = getrandomcust(store.mincust, store.maxcust);
    var answ = Math.floor(testNumber * store.avgcookie);
    console.log(hours[i], " o'clock: ", answ, "cookies sold");
    cookiesPerHour.push(answ);
    totalCookies = answ + totalCookies;
  }

  // store.cookiesPerHour = cookiesPerHour;
  // return [cookiesPerHour, totalCookies];
  return {
    byHour: cookiesPerHour,
    totalCookies: totalCookies,
  }
}

// Setting store property from returned cookies per hour function.
Seattle.cookiesPerHour = calculateCookies(Seattle);
console.log(Seattle);
Seattle.render();
calculateCookies(Dubai);
calculateCookies(Lima);
calculateCookies(Paris);
calculateCookies(Tokyo);
