window.addEventListener('DOMContentLoaded', () => {
  //Recupere la liste des travaux
  async function recuperationListeTravaux () {
    //Faire un fetch pour recuperer la liste des travaux
    let reponse = await fetch('http://localhost:5678/api/works')
    let listeTravaux = await reponse.json()
    creationBaliseHtml()
    let image1 = document.getElementById('image1')
    image1.src = listeTravaux[0].imageUrl
  }

  //on vide la partie du HTML qui contient les travaux
  function remiseZeroGallerie () {
    document.querySelector('.gallery').innerHTML = ''
  }
  remiseZeroGallerie()

  function creationBaliseHtml () {
    let gallerie = document.querySelector('.gallery')
    let baliseFigure = document.createElement('figure')
    gallerie.appendChild(baliseFigure)
    let baliseImg = document.createElement('img')
    baliseFigure.appendChild(baliseImg)
    baliseImg.setAttribute('id', 'image1')
    let baliseFigcaption = document.createElement('figcaption')
    baliseFigure.appendChild(baliseFigcaption)
  }
  creationBaliseHtml()
  recuperationListeTravaux()
})
