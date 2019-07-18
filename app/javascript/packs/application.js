/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb
import "./silver_swan_button";

import PokeGuesser from "./pokemon.jsx";
import PokeBall from "./pokeball.jsx";


var pokemonDiv = document.getElementById('pokemon')

if (pokemonDiv) {
  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <PokeGuesser />,
      pokemonDiv.appendChild(document.createElement('div')),
    )
  })
}

var pokeballDiv = document.getElementById('pokeball')

if (pokeballDiv) {
  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <PokeBall />,
      pokeballDiv.appendChild(document.createElement('div')),
    )
  })
}


