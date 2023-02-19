window.addEventListener('DOMContentLoaded', () => {
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
  async function recuperationCategories () {
    //on fait un fetch avec la methode par defaut GET
    let reponse = await fetch('http://localhost:5678/api/categories')
    let listeCategories = await reponse.json()

    for (let index = 0; index < listeCategories.length; index++) {
      //on selectionne les h2 du dom
      let titles = document.querySelectorAll('h2')
      //on selectionne le titre du portfolio
      let portfolioTitle = titles[1]
      let filtreCategories = document.createElement('div')
      //on place les categories apres le titre du portfolio
      portfolioTitle.after(filtreCategories)
      filtreCategories.innerText = listeCategories[index].name
    }
  }
  recuperationListeTravaux()
  recuperationCategories()
})
/*
//function faite pour vider la gallerie
function remiseZeroGallerie () {
  document.querySelector('gallery').innerHTML = ''
}

//function qui créer les differentes balises HTML
function creationBaliseHtml () {
  let galerie = document.querySelector('.gallery')
  let baliseFigure = document.createElement('figure')
  let baliseImg = document.createElement('img')
  let baliseFigcaption = document.createElement('figcaption')
  galerie.appendChild(baliseFigure)
  baliseFigure.appendChild(baliseImg)
  baliseFigure.appendChild(baliseFigcaption)
  baliseImg.setAttribute('class', 'imageGallerie')
}*/
