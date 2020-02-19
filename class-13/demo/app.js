'use strict';

// Our global variables for DOM elements and notes array.
var allNotes = [];
var list = document.getElementById('data');
var form = document.getElementById('form');


// simple constrcutor that sets a couple string values
function Note(name, value) {
  this.name = name;
  this.value = value;
  allNotes.push(this);
}
// method for appending data to the DOM
Note.prototype.render = function () {
  var item = document.createElement('li');
  list.appendChild(item);

  item.textContent = this.value;
}

// function for setting data to local storage in the browser
function setData(key, data) {
  var stringifiedData = JSON.stringify(data);
  localStorage.setItem(key, stringifiedData);

  console.log(localStorage.getItem(key));
}

// function for getting data from our browser local storage
function fetchData(key) {
  var data = localStorage.getItem(key);
  return JSON.parse(data);
}


form.addEventListener('submit', function (event) {
  event.preventDefault();
  // specific the form from our event object
  var formData = event.target;

  // create and store new Note
  new Note(formData.name.value, formData.text.value);
  // also set notes into persisted storage?
  setData('formData', allNotes);

  // remove existsing content, and re-render all notes in allNotes
  list.innerHTML = null;
  for (var index = 0; index < allNotes.length; index++) {
    allNotes[index].render();
  };
});


// This ensures that we fetch all data on page load, and render Notes if any exist
var persistedData = fetchData('formData');
if (persistedDat) {
  for (var i = 0; i < persistedData.length; i++) {
    var persistedNote = new Note(persistedData[i].name, persistedData[i].value);
    persistedNote.render();
  }
}
