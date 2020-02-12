'use strict';

var Jacob = {
  name: "jaocb",
  fullname: this.name + " Knaack",
}

var table = document.getElementById('sales-data');
var totalStores = [];

// Constructor function for Cookie Stores
function CookieStand(name, min, max, avg) {
  this.name = name;
  this.minCust = min;
  this.maxCust = max;
  this.avgCookiePerCust = avg;
  this.cookiesByHour = [];
  this.totalCookiesPerDay = 0;
  totalStores.push(this);
}

CookieStand.prototype.hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

// Getting cookies per hour.
CookieStand.prototype.generateCookiesPerHour = function () {
  for (var i = 0; i < this.hours.length; i++) {
    this.cookiesByHour.push(Math.floor(randomNumberOfCustomers(this.minCust, this.maxCust) * this.avgCookiePerCust));
  }
}

CookieStand.prototype.generateDailyTotals = function () {
  for (var i = 0; i < this.cookiesByHour.length; i++) {
    this.totalCookiesPerDay = this.totalCookiesPerDay + this.cookiesByHour[i];
  }
}

// to render a single row of data for a store
function render(store) {
  // create one tr
  var row = document.createElement('tr');
  var name = document.createElement('td');
  name.textContent = store.name;
  row.appendChild(name);

  // create as many <td>s as there are values in cookiesByHour
  for (var i = 0; i < store.cookiesByHour.length; i++) {
    var data = document.createElement('td');
    data.textContent = store.cookiesByHour[i];
    row.appendChild(data);
  }
  var total = document.createElement('td');
  total.textContent = store.totalCookiesPerDay;
  row.appendChild(total);
  // add one more <td> for the store name, and another for daily total

  table.appendChild(row);
}

var seattle = new CookieStand('Seattle', 6, 44, 1.2);
// seattle.generateCookiesPerHour();
// seattle.generateDailyTotals();
// render(seattle);
var paris = new CookieStand('Paris', 11, 38, 1.9);
var london = new CookieStand('London', 20, 48, 3.3);
var newYork = new CookieStand('New York', 3, 24, 2.6);

function randomNumberOfCustomers(min, max) {
  return (Math.random() * (max - min) + min);
}


for (var i = 0; i < totalStores.length; i++) {
  totalStores[i].generateCookiesPerHour();
  totalStores[i].generateDailyTotals();
  render(totalStores[i]);
}


// Render a table
  // head with some static header
  // body of all the stores sales per hour, and the total for day
  // bottom row, with total cookies for all stores per hour, and the total daily sum of all stores sales