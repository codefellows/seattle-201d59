'use strict';

var bulbasaur = {
  name: 'Bulbasuar',
  health: 100,
  attack: 5,
  defense: 30,
  vineWhip: function (pokemon) {
    var damage = ((pokemon.defense / 2) - this.attack);
    var newHealth = pokemon.health - damage;
    pokemon.health = newHealth;
    console.log(this.name + ' Attacks ' + pokemon.name + ' dealing ' + damage + ' damage');
  }
}

var charmander = {
  name: 'Charmander',
  health: 100,
  attack: 10,
  defense: 20
}

// Grab our HTML entry
var listEl = document.getElementById('pokemon');


// Create our new elements we want to append to the DOM
var bulbaEl = document.createElement('li');
var charmEl = document.createElement('li');

// Add our content to our elements
bulbaEl.textContent = bulbasaur.name;
charmEl.textContent = charmander.name;

// Appending our new tags, to our entry point HTML.
listEl.appendChild(bulbaEl);
listEl.appendChild(charmEl);
bulbasaur.vineWhip(charmander);
console.log(charmander);