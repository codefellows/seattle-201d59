'use strict';

function PokemonCard(name, health, defense, attack, image) {
  this.name = name;
  this.health = health;
  this.defense = defense;
  this.attack = attack;
  this.image = image;
}

PokemonCard.prototype.render = function () {
  var list = document.getElementById('my-pokemon');
  var item = document.createElement('li');
  list.appendChild(item);

  var heading = document.createElement('h4');
  heading.textContent = this.name;
  item.appendChild(heading);

  var pikachuImage = document.createElement('img');
  // pikachuImage.setAttribute('src', this.image);
  pikachuImage.style = 'width: 100px;'
  pikachuImage.src = this.image;
  item.appendChild(pikachuImage);
}

var pikachu = new PokemonCard('Pikachu', 20, 30, 30, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png');
var bulbasair = new PokemonCard("Bulbasaur", 40, 40, 40, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png');

pikachu.render();
bulbasair.render();