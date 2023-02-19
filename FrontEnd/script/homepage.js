//Recupere la liste des travaux
async function recuperationListeTravaux () {
  //Faire un fetch pour recuperer la liste des travaux
  let reponse = await fetch('http://localhost:5678/api/works')
  let listeTravaux = await reponse.json()
  for (let index = 0; index < listeTravaux.length; index++) {
    let galerie = document.querySelector('.gallery')
    let baliseFigure = document.createElement('figure')
    let baliseImg = document.createElement('img')
    let baliseFigcaption = document.createElement('figcaption')
    galerie.appendChild(baliseFigure)
    baliseFigure.appendChild(baliseImg)
    baliseFigure.appendChild(baliseFigcaption)
    baliseImg.src = listeTravaux[index].imageUrl
  }
}
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
recuperationListeTravaux()
