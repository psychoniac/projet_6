import { supprimeContenuMain } from './login.js'
import { genereFormLogin } from './login.js'
window.addEventListener('DOMContentLoaded', () => {
  //Recupere la liste des travaux
  //recuperationListeTravaux()
  supprimeContenuMain()
  //on recupere la liste des catégories
  //creationContenerFiltre()
  //on creer les filtres pour les works
  //creationFiltres()
  genereFormLogin()
})

//Recupere la liste des travaux
async function recuperationListeTravaux () {
  //Faire un fetch pour recuperer la liste des travaux
  let reponse = await fetch('http://localhost:5678/api/works')
  let listeTravaux = await reponse.json()

  //on creer une boucle for sur l'array que nous renvoie fetch
  //pour pouvoir creer les balises HTML qu'il faut en fonction de la taille de l'array
  for (let index = 0; index < listeTravaux.length; index++) {
    let galerie = document.querySelector('.gallery')
    let baliseFigure = document.createElement('figure')
    let baliseImg = document.createElement('img')
    let baliseFigcaption = document.createElement('figcaption')
    galerie.appendChild(baliseFigure)
    baliseFigure.appendChild(baliseImg)
    baliseFigure.appendChild(baliseFigcaption)
    baliseImg.src = listeTravaux[index].imageUrl
    baliseFigcaption.innerText = listeTravaux[index].title
  }
}
//on creer une fonction qui va recuperer la liste des catégories
async function getCategories () {
  //fonction fetch recuperation categories
  //on fait un fetch avec la methode par defaut GET
  let reponse = await fetch('http://localhost:5678/api/categories')
  let listeCategories = await reponse.json()
  return listeCategories
}

function creationContenerFiltre () {
  //on creer un contener pour les filtres
  const contenerFiltre = document.createElement('div')
  //on injecte la class contenerFiltre
  contenerFiltre.classList.add('contenerFiltre')
  //on selectionne les h2 du dom
  let titles = document.querySelectorAll('h2')
  //on selectionne le titre du portfolio
  let portfolioTitle = titles[1]
  //on place la div sous le titre
  portfolioTitle.after(contenerFiltre)
}
function creationFiltres () {
  getCategories()

  for (let index = 0; index < listeCategories.length; index++) {
    //on cree un element button pour chaque objet de l'array
    let filtreCategories = document.createElement('button')
    //on place les categories apres le titre du portfolio
    contenerFiltre.appendChild(filtreCategories)
    //on defini le nom des filtres
    filtreCategories.innerText = listeCategories[index].name
    //on injecte la class filtres
    filtreCategories.classList.add('filtres')
  }
}
