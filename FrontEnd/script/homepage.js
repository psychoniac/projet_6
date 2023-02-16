//Recupere la liste des travaux
function recuperationListeTravaux () {
  //Faire un fetch pour recuperer la liste des travaux
  fetch('http://localhost:5678/api/works')
    .then(res => res.json())
    .then(donnees => console.log(donnees))
}

//on vide la partie du HTML qui contient les travaux
function remiseZeroGallerie () {
  document.querySelector('.gallery').innerHTML = ''
}
remiseZeroGallerie()
recuperationListeTravaux()

function creationBaliseHtml () {
  let gallerie = document.querySelector('.gallery')
  let baliseFigure = document.createElement('figure')
  gallerie.appendChild(baliseFigure)
  let baliseFigcaption = document.createElement('figcaption')
  baliseFigure.appendChild(baliseFigcaption)
}
creationBaliseHtml()
