window.addEventListener('DOMContentLoaded', () => {
  //Recupere la liste des travaux
  recuperationListeTravaux()
  //on recupere la liste des catégories
  creationContenerFiltre()
  //on recupere la liste des catégories et on creer les bouton
  recuperationListeCategories()
})
//Recuperation liste categories
async function recuperationListeCategories () {
  let reponse = await fetch('http://localhost:5678/api/categories')
  let listeCategories = await reponse.json()

  //on boucle sur l'array listecategories pour créer un bouton par categories
  for (let index = 0; index < listeCategories.length; index++) {
    //on selectionne la div qui va contenir les filtres
    let contenerFiltre = document.querySelector('.contenerFiltre')
    //on créer le bouton
    const filtre = document.createElement('button')
    //on place les bouton dans le contener filtres
    contenerFiltre.appendChild(filtre)
    //on onjecte la class filtres au differents bouton
    filtre.classList.add('filtres')
    //on place le nom des categories dans les boutons
    filtre.innerText = listeCategories[index].name
    filtre.addEventListener('click', filtrageTravaux)
  }
}
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
//fonction qui génere le contener des boutons filtres
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
  return contenerFiltre
}
//function filtrage
function filtrageTravaux () {
  console.log('hello')
}
