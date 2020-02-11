'use strict';

function CookieStand(name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
}

var seattle = new CookieStand('Seattle', 20, 40, 30);

// Grabs our table and appends a row
var table = document.getElementById('tableBody');
var row = document.createElement('tr');
table.appendChild(row);
var box;

// Creating our table rows
box = document.createElement('th');
box.textContent = 'Store Name';
row.appendChild(box);

box = document.createElement('th');
box.textContent = 'Minimum Customers';
row.appendChild(box);

box = document.createElement('th');
box.textContent = 'Maximium Customers';
row.appendChild(box);

box = document.createElement('th');
box.textContent = 'Averge Sales Per Customer';
row.appendChild(box);

// Create Store data elements
row = document.createElement('tr');
table.appendChild(row);

var box2 = document.createElement('td');
box2.textContent = seattle.name;
row.appendChild(box2);

box2 = document.createElement('td');
box2.textContent = seattle.minCust;
row.appendChild(box2);

box2 = document.createElement('td');
box2.textContent = seattle.maxCust;
row.appendChild(box2);

box2 = document.createElement('td');
box2.textContent = seattle.avgCookies;
row.appendChild(box2);

console.log(seattle);