import lol from './data/lol/lol.js';
import { filterRole, order } from './data.js';

console.log(lol, order);

let lolData = [];
let championList = document.getElementById("champions-list")


window.onload = () => {
  for (let item in lol.data) {
    lolData.push(lol.data[item]);
  }

  const roles = getRoles()
  createRolesCards(roles)
  createChampionsCards(lolData)

  const rolesCards = Array.from(document.getElementsByClassName("role-card"))

  for (const card of rolesCards) {
    card.addEventListener('click', () => {
      for (const roleCard of rolesCards.filter(c => c !== card)) {
        roleCard.classList.remove('selected-card')
      }
      if (!card.classList.contains('selected-card')) {
        card.classList.add('selected-card')
        const cardImg = card.getElementsByTagName("img")[0]
        const champions = filterRole(lolData, cardImg.id)

        createChampionsCards(champions)
      }
      else {
        card.classList.remove('selected-card')
        createChampionsCards(lolData)
      }

    })
  }

}

function createChampionsCards(champions) {
  championList.innerHTML = "";

  for (let i in champions) {
    let eachCard = createDiv(champions[i].splash, champions[i].name);
    championList.appendChild(eachCard);
  }

}

function createDiv(photo, name) {

  let cards = document.createElement('div')
  cards.setAttribute('class', 'champion-lol')
  cards.innerHTML = (`<img src = '${photo}'> <p>${name}</p>`)

  return cards
}
createChampionsCards(lolData)

function getRoles() {
  const listRoles = []

  for (const champion of lolData) {
    for (const tag of champion.tags) {
      if (listRoles.includes(tag)) {
        continue
      }
      else {
        listRoles.push(tag)
      }
    }
  }

  return listRoles
}

function createRolesCards(roles) {
  const rolesCards = []

  for (const role of roles) {
    const roleCard = `
      <article class="role-card">
        <img id="${role}" src="./card-imgs/${role}.png" alt="${role}-img">
        <h3>${role}</h3>
      </article>
    `;

    rolesCards.push(roleCard);
  }

  document.getElementById("roles-cards").innerHTML = rolesCards.join("")
}

/*
<article class="role-card">
      <img id="assassins" src="./card-imgs/Assassinos.png" alt="assassin-img">
      <h3>Assassinos</h3>
    </article>
*/

