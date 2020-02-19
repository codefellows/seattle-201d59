# Class 13

## Code Review

### Chart JS Busmall

- Adding Chart JS and rendering non duplicate images. 
- See [review](./review) directory.

## Local Storage

### Persistence

- When I leave my web page, Will my data remain.
- Local Storage: a folder on your computer, that stores whatever information you tell it to.
- program\ files/chrome/application/your-domain.
- Up to 5 MB.
- Domain specific /  not the url, the host 

-How is used:

```js
'use strict';


localStorage; // an object used to store key value pairs, managed by your browser.

// 4 methods

// getting an item

localStorage.getItem('key') // retrieves the value stored as that key

// setting an item

localStorage.setItem('key', 'value') // places the 'value' under the key:'key' in the localStorage Object. Used for both creating and updating.

// removing an Item

localStorage.removeItem('key') // similar to get, but this one deletes.


// clearing all of your storage values

localStorage.clear(); // all key value
```

- cache invalidation? When do you want to remove users data.
  - How can we tell that data becomes stale?

### JSON

- Javascript object notation
- Local storage can really only deal with strings, so we are going to use the JSON object, built into JS to turn our object into string types.

```js

var object = { key: 'value' };

// var stringObject = '{ key: "value"}';
var stringObject = JSON.stringify(object);

JSON.parse(stringObject); // { key: 'value' }

stringObject.key // undifined

```