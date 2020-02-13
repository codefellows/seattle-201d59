'use strict';

var allPokemon = [];

function Pokemon(name, attack) {
  this.name = name;
  this.attack = attack;
}


// defining event handling function
function handleForm(event) {
  event.preventDefault();
  var name = event.target.name.value;
  var attack = event.target.attack.value;

  var pokemon = new Pokemon(name, attack);
  allPokemon.push(pokemon);
  console.log(allPokemon);
}

// grabbing our form with inputs from our HTML
var login = document.getElementById('form');

// listening for HTML events to be fired, responds with specified function
form.addEventListener('submit', handleForm);
