//Recupere la liste des travaux
function recuperationListeTravaux () {
  //Faire un fetch pour recuperer la liste des travaux
  fetch('http://localhost:5678/api/works')
    .then(result => console.log(result))
    .catch(error => console.log('error', error))
}
recuperationListeTravaux()

//on vide la partie du HTML qui contient les travaux
function remiseZeroGallerie () {
  document.querySelector('.gallery').innerHTML = ''
}
remiseZeroGallerie()
