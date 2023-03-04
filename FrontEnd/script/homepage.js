window.addEventListener('DOMContentLoaded', async () => {
  //On recupere la liste des travaux
  const listeTravaux = await recuperationListeTravaux()
  //on creer la gallerie de travaux
  creationGallerie(listeTravaux)
  //on recupere la liste des catégorie
  const listeCategories = await recuperationListeCategories()
  //on creer un contener pour les filtres
  creationContenerFiltre()
  //on creer le bouton filtre par defaut
  creationFiltreDefaut()
  //on creer les boutons filtres
  creationdesFiltres(listeCategories)
})
//Recuperation liste categories
async function recuperationListeCategories () {
  let reponse = await fetch('http://localhost:5678/api/categories')
  const liste = await reponse.json()
  return liste
}
function creationdesFiltres (categories) {
  //on boucle sur l'array listecategories pour créer un bouton par categories
  for (let index = 0; index < categories.length; index++) {
    //on selectionne le contener des filtres
    const contenerFiltre = document.querySelector('.contenerFiltre')
    //on créer le bouton
    const filtre = document.createElement('button')
    //on place les bouton dans le contener filtres
    contenerFiltre.appendChild(filtre)
    //on onjecte la class filtres au differents bouton
    filtre.classList.add('filtres')
    //on place le nom des categories dans les boutons
    filtre.innerText = categories[index].name
    //on assigne un id a chaque bouton
    //on place des écouteurs d'évenements sur chaque bouton
    filtre.addEventListener('click', function () {
      console.log('hello')
    })
  }
  const listeBoutonFiltres = document.querySelectorAll('.filtres')
  listeBoutonFiltres[0].setAttribute('id', 1)
  listeBoutonFiltres[1].setAttribute('id', 2)
  listeBoutonFiltres[2].setAttribute('id', 3)
  listeBoutonFiltres[3].setAttribute('id', 4)
}
/*
//fonction filtre
function filtrage (Categories) {
  if (Categories[index].id === 1) {
    console.log('1')
  } else if (Categories[index].id === 2) {
    console.log('2')
  } else if (Categories[index].id === 3) {
    console.log('3')
  }
}*/
//Recupere la liste des travaux
async function recuperationListeTravaux () {
  //Faire un fetch pour recuperer la liste des travaux
  let reponse = await fetch('http://localhost:5678/api/works')
  let liste = await reponse.json()
  return liste
}
function creationGallerie (travaux) {
  //on creer une boucle for sur l'array que nous renvoie fetch
  //pour pouvoir creer les balises HTML qu'il faut en fonction de la taille de l'array
  for (let index = 0; index < travaux.length; index++) {
    let galerie = document.querySelector('.gallery')
    let baliseFigure = document.createElement('figure')
    let baliseImg = document.createElement('img')
    let baliseFigcaption = document.createElement('figcaption')
    galerie.appendChild(baliseFigure)
    baliseFigure.appendChild(baliseImg)
    baliseFigure.appendChild(baliseFigcaption)
    baliseImg.src = travaux[index].imageUrl
    baliseFigcaption.innerText = travaux[index].title
  }
}
//fonction qui génere le contener des boutons filtres
function creationContenerFiltre () {
  //on creer un contener pour les filtres
  const contenerFiltre = document.createElement('div')
  //on injecte la class contenerFiltre
  contenerFiltre.classList.add('contenerFiltre')
  //on selectionne les h2 du dom
  let titres = document.querySelectorAll('h2')
  //on selectionne le titre du portfolio
  let titrePortfolio = titres[1]
  //on place la div sous le titre
  titrePortfolio.after(contenerFiltre)
}
function creationFiltreDefaut () {
  //on creer un bouton qui sera le bouton filtre par défaut
  const filtreParDefaut = document.createElement('button')
  //on selectionne le contener des filtres
  let contenerFiltre = document.querySelector('.contenerFiltre')
  //on rattache le bouton filtre par defaut au contener
  contenerFiltre.appendChild(filtreParDefaut)
  //on injecte la class filtre au bouton
  filtreParDefaut.classList.add('filtres')
  //on lui met un contenu
  filtreParDefaut.innerText = 'Tous les travaux'
}
