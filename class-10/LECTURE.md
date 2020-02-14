# Class 10

## Salmon Cookies Final Review

### Part 1

- ASSUMPTIONS:
  - global of stores: `var allStores = []` will contain all cookies stands
  - Our HTML will contain a table: `<table id="sales-data"></table>`
  - assume a global array of hours: `var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']`;

- Constructor for Cookie Stands
  - Store name
  - minCust
  - maxCust
  - avgCookiesPerCust
  - Whatever else we think we need for sales data

- Functions for a single store:
  - Calculating random number of cookies sold at each hour.
  - Calculate the total number of cookies per day.

- Rendering data in a table
  - Creating a row of data for each store: store name, and sales data.

- Features for all stores:
  - Calculate the total number of cookies per hour for all stores, and the total daily cookies for all stores.
  - Creating a footer for summed totals for hours, and grand total for all store.

### Part 2

- Creating a form in our HTML
  - Must contain inputs that correlate to our constuctor.
- Defining an event handler to handle form data:
  - Must create an instance of our CookieStand.
- Adding a row to our table.
  - Must append a new row to our already rendered table.


### Javascript Errors:

- 4 types:
  - SyntaxErrors: characters or kaywords that are misspelled / missplaced
```js

var object = {
  name = 'Jacob',
} // throw and error!

```
  -ReferenceErrors: when you try and reference a variable / function that is undefined:
```js
var table = document.getElementById('table');

console.log(tabel);
```
- ReferenceError: tabel is not defined

  - TypeError: your trying with a varible for thing that is of the wrong type.

```js
var string = 'this string'

string.push(1);

```

- RangeError: You're trying to do somehting out of bounds of what is possible.

```js
var array = [];

array[-1];

```

handy error syntax:

```js
try {
  // code you want to run
} catch(error) {
  console.log(error);
}

console.log('my code stilk makes it here');
``
