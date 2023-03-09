window.addEventListener('DOMContentLoaded', async () => {
  //On recupere la liste des travaux
  const listeTravaux = await recuperationListeTravaux()
  //on recupere la liste des catégorie
  const listeCategories = await recuperationListeCategories()
  //on cree la gallerie de base
  creationGallerie(listeTravaux)
  //on creer un contener pour les filtres
  creationContenerFiltre()
  //on creer le bouton filtre par defaut
  creationFiltreDefaut()
  //on creer les boutons filtres
  creationdesFiltres(listeCategories)
  ecouteurBoutton(listeTravaux)
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
  }
}
function ecouteurBoutton (arrTravaux) {
  const filtres = document.querySelectorAll('.filtres')
  const gallerie = document.querySelector('.gallery')
  for (let i = 0; i < filtres.length; i++) {
    filtres[i].addEventListener('click', function () {
      if (i == 0) {
        gallerie.innerHTML = ''
        creationGallerie(arrTravaux)
      } else if (i == 1) {
        const arrTravauxFiltreObjet = arrTravaux.filter(
          travail => travail.categoryId == i
        )
        gallerie.innerHTML = ''
        creationGallerie(arrTravauxFiltreObjet)
      } else if (i == 2) {
        const arrTravauxFiltreAppart = arrTravaux.filter(
          travail => travail.categoryId == i
        )
        gallerie.innerHTML = ''
        creationGallerie(arrTravauxFiltreAppart)
      } else if (i == 3) {
        const arrTravauxFiltreHotel = arrTravaux.filter(
          travail => travail.categoryId == i
        )

        gallerie.innerHTML = ''
        creationGallerie(arrTravauxFiltreHotel)
      }
    })
  }
}
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
