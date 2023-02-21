//window.addEventListener("DOMContentLoaded", () => {})
//on commence par créer une fonction qui va vider le contenu de la balise main
export function supprimeContenuMain () {
  const contener = document.querySelector('main')
  contener.innerHTML = ''
}
