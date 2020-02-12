# Class 07

## Object Constructor functions

A way of creating objects using a function

```js
// known as the factory pattern
function locationFactory() {
  var result = {}

  return result;
}
```

```js

var seattle = {
  name: 'seattle'...
}

function Location(name, mincust, maxcust, avgcust) {
  this.name = name;
  this.mincust = mincust;
  this.maxcust = maxcust;
  this.avgcust = avgcust;

  // this.render = function() {
    // our no prefered way of creating methods: 'this' becomes tricky
  // }
}

Location.prototype.age = 0;
Location.prototype.render = function() {
  // 'this' still represents the object that was created.
}

var Seattle = new Location('Seattle', 30, 40, 25);

console.log(Seattle) // { name, min, max, avg }
Seattle.name
Seattle.render();
console.log(Seattle.age) // 0

```

## HTML Tables

- Tables are made up of 'rows'
- Each 'row' contains 'cells'
- `<tr>` is our table row element.
- `<td>` make up the cells in the row.

```html

<body>
  <table>
    <tbody>
      <tr>
        <th></th>
        <th></th>
        <th></th>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</body>

```
