'use strict';

const BASE_URL = 'https://rickandmortyapi.com/api';

const cardList = document.querySelector('.card-list');

function getCharacter() {
  return fetch(`${BASE_URL}/character`);
}

const characters = getCharacter()
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    data.results.forEach((characterData) => {
      const character = createCharactedCard(characterData);

      cardList.append(character);
    });
  });

function createCharactedCard(data) {
  const character = document.createElement('li');
  character.className = 'character';

  const image = document.createElement('img');
  image.classList.add('character__image');
  image.src = data.image;

  const name = document.createElement('h2');
  name.classList.add('character__name', 'character__text');
  name.textContent = data.name;

  const status = document.createElement('p');
  status.classList.add('charecter__status', 'character__text');
  status.textContent = data.status;

  const species = document.createElement('p');
  species.classList.add('character__species', 'character__text');
  species.textContent = data.species;

  const gender = document.createElement('p');
  gender.classList.add('character__gender', 'character__text');
  gender.textContent = data.gender;

  character.append(image);
  character.append(name);
  character.append(status);
  character.append(species);
  character.append(gender);

  return character;
}
