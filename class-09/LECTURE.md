# Class 09

## Code Review

### CSS Layouts

- Please see Review folder on class repo :P)

### Salmon Cookies

- Our application so far:
  - Objects:
    - Cookie stand location are just objects:

```js
var seattle = {
  name: 'seattle',
  minCustPerHour: 3,
  maxCustPerHour: 5,
  avgCookiesPerCust: 4
}
```

- Our application uses stores to calculate average cookies per hour values
  - Crunching numbers to provide sales statistics:

- Loops: we could hard code the operations, but instead we do this programmatically with loops:

```js
var stores = [seattle, paris,...];

// for every store that exists in stores we are trying to perform our number number crunching
for (var storeNumber = 0; storeNumber < stores.length; storeNumber ++) {
  // what operations do we need to perform to get sales data.
}
```

  - Constructors:  functions that produce an object using a standardized template

```js
var stores = [];

function CookieStore(name, min, max, avg) {
  this.name = name;
  this.minCustPerHour = min;
  this.maxCustPerHour = max;
  this.avgCookiesPerCust = avg;
}

var seattle = new CookieStand('seattle', 3, 5, 4)
seattle.name
// stores.push(new CookieStand('seattle', 3, 5, 4));
stores.push(seattle);

// for every store that exists in stores we are trying to perform our number number crunching
for (var storeNumber = 0; storeNumber < stores.length; storeNumber ++) {
  // what operations do we need to perform to get sales data.
  seattle.name;
  stores[storeNumber].name;
}


// this would achieve the same thing as a for loop.
var storeNumber = 0;
var allStoresSeen = false
while(!allStoresSeen) {
  if (!stores[storeNumber]) allStoresSeen = true;
  stores[storeNumber].name
  storeNumber++;
}
```
  
- DOM manipulation:
  - Creating and appending virtual elements, into the browser.
  - The DOM is only a representation in jS form, of what the browser.
```js
var heading = document.createElement('h1');
document.body.appendChild(heading);

var heading = document.getElementById('heading');
heading.textContent = 'New Heading';

```

- calculating hourly totals

```js
var stores = [
  { // 0
    cookiesph: [100, 200], // 0, 1
    totalCookies: 300
  },
  { // 1
    cookiesph: [50, 100], //0, 1
    totalCookies: 150
  },
]

var hours = ['6am', '7am'];

function calcHourlyTotals() {
  var hourly = 0;
  var grand = 0;
  for (var hourNum = 0; hourNum < hours.length; hourNum++) { //
    hourly = 0;
    for (var storeNum = 0; storeNum < stores.length; storeNum++) {
      grand += stores[storeNum].cookiesph[hourNum];
    }
  }
  return grand;
}

calcHourlyTotals();
```


### HTML Forms and Events

- Giving the power to our users!
```html

<form>
  <input name="name" type="text">
</form>
```


```js

// Will receive and event argument, so we must define 
function formHandler(event) {
  event.preventDefault() // prevents page from reloading

  var name = event.target.name.value; // getting the value of our form inputs, based on name attribute.
}

// grab our form, and listen for a predefined event
var form  = document.getElementById('form');
form.addEventListener('submit', formHandler);

```