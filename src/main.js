import lol from './data/lol/lol.js';
import { filterRole, order, calculatePercent} from './data.js';

console.log(order, calculatePercent);

let allChampions = [];
let championList = document.getElementById("champions-list")


window.onload = () => {
  for (let item in lol.data) {
    allChampions.push(lol.data[item]);
  }

  const roles = getRoles()
  createRolesCards(roles)
  createChampionsCards(allChampions)

  const rolesCards = Array.from(document.getElementsByClassName("role-card"))

  for (const card of rolesCards) {
    card.addEventListener('click', () => {
      for (const roleCard of rolesCards.filter(c => c !== card)) {
        roleCard.classList.remove('selected-card')
      }
      if (!card.classList.contains('selected-card')) {
        card.classList.add('selected-card')
        const cardImg = card.getElementsByTagName("img")[0]
        const champions = filterRole(allChampions, cardImg.id)

        createChampionsCards(champions)
        showPercentChampions(champions, cardImg.id)

      }
      else {
        card.classList.remove('selected-card')
        createChampionsCards(allChampions)
        removePercentChampions()
      }

    })
  }

}

function createChampionsCards(champions) {
  championList.innerHTML = "";

  for (let i in champions) {
    let eachCard = createDiv(champions[i].splash, champions[i].name, champions[i].info.attack, champions[i].info.defense, champions[i].info.magic, champions[i].info.difficulty);
    championList.appendChild(eachCard);
  }

}

function createDiv(photo, name, attack, defense, magic, difficulty) {

  let cards = document.createElement('div')
  cards.setAttribute('class', 'champion-lol')
  cards.innerHTML = (`<img src = '${photo}'> <h3>${name}</h3> <p>Níveis de Ataque: ${attack} Defesa: ${defense} Magia: ${magic}</p> <p>Dificuldade: ${difficulty}</p>`)

  return cards
}
createChampionsCards(allChampions)

function getRoles() {
  const listRoles = []

  for (const champion of allChampions) {
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

function showPercentChampions(champions, role){
  const championsPercentage = calculatePercent(champions, allChampions)
  const percentageText = `${role} representa ${championsPercentage}% dos ${allChampions.length} campeões`
  
  document.getElementById("percent-roles").innerText = percentageText// 20 de 100 (20%)
}

function removePercentChampions(){
  document.getElementById("percent-roles").innerText = ""
}