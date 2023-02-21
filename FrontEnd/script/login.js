//window.addEventListener("DOMContentLoaded", () => {})
//on commence par créer une fonction qui va vider le contenu de la balise main
export function supprimeContenuMain () {
  const contener = document.querySelector('main')
  contener.innerHTML = ''
}
//on creer une fonction qui va gérer le formulaire
export function genereFormLogin () {
  const contenerForm = document.querySelector('main')
  //on creer les balises HTML
  const formTitle = document.createElement('h2')
  formTitle.innerText = 'Log In'
  const formulaire = document.createElement('form')
  const emailLabel = document.createElement('label')
  emailLabel.innerText = 'E-mail'
  const emailInput = document.createElement('input')
  const passwordLabel = document.createElement('label')
  passwordLabel.innerText = 'Mot de passe'
  const passwordInput = document.createElement('input')
  const connection = document.createElement('input')
  connection.setAttribute('type', 'submit')
  const passwordOublier = document.createElement('a')
  passwordOublier.innerText = 'Mot de passe oublier'
  contenerForm.appendChild(formTitle)
  contenerForm.appendChild(formulaire)
  formulaire.appendChild(emailLabel)
  formulaire.appendChild(emailInput)
  formulaire.appendChild(passwordLabel)
  formulaire.appendChild(passwordInput)
  formulaire.appendChild(connection)
  formulaire.appendChild(passwordOublier)
}
