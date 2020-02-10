# Class 06

> Objects! DOM! Domain Modeling

## Objects

- A key : value organized bucket of information:

```js

var array = [1, 2, 3];

var object = { one: 1, two: 2, three: 3 };

// dot or bracket notation to look up information

object.one // 1
object.two // 2

// Object literal syntax
var person = {
  name: 'Jacob',
  age: 30,
  occupation: 'basket weaver',
  hobbies: ['javascript', 'video games']
}

person.name // Jacob
person.age // 30

person['name'] // Jacob

var key = 'name';
person[key] // Jacob
person.key // undefined

```

### Method
- a function that lives as a property of an object.
- What makes a method special, is it's ability to refenence it's own object property using 'this'.

```js

var person = {
  name: 'Jacob',
  speak: function() {
    // has access to the contextual 'this' keyword
    console.log('hello I am ' + this.name);
  },
  marriage: function(newName) {
    this.lastname = newName;
  }
}

```

## DOM

- Document Object Model
- Our default way of talking to our live, rendered: HTML and CSS.

```html
<html>
  <body>
    <div>
      <h2 id="heading">Welcome</h2>
    </div>
  </body>
</html>
```

```js
console.log(document); // shows us the entire HTML document as tags

// Grabs an existing HTML element from our DOM.
var headingEl = document.getElementById('heading');

// Sets the text content of an HTML element (the insides of our openning and closing angle brackets)
headingEl.textContent = 'Goodbye';

// Create new HTML elements
var paragraph = document.createElement('p');
paragraph.textContent = 'Im a new paragraph';

// Actually appending our newly created elements, to the rendered HTML on the page.
headingEl.appendChild(paragraph);

```

## Math.random

Dealing with random number is JS

`Math.Random` returns a number between 0 and 1 (not including 1)

- If we want a number between 1 and 10:
`Math.floor((Math.random() * 10) + 1)`
