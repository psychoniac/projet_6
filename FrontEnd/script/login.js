window.addEventListener('DOMContentLoaded', function () {
  const reponse = authentification()
})

function authentification () {
  const formulaireLogin = document.querySelector('#loginForm')
  formulaireLogin.addEventListener('submit', function (e) {
    e.preventDefault()
    requetePostLogin()
  })
}
//fonction qui gere la requete
async function requetePostLogin () {
  //on place les options de la requete dans un Json
  const formulaireData = {
    email: document.querySelector('#mail').value,
    password: document.querySelector('#password').value
  }
  const idUtilisateur = JSON.stringify(formulaireData)
  //on creer une variable qui va servir à stocker le token
  let token = ''
  //on creer la requete post en lui passant des options
  const reponse = await fetch('http://localhost:5678/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: idUtilisateur
  })
  if (reponse.status === 200) {
    //on stocke la reponse du fetch
    let resultat = await reponse.json()
    //on recupere le token pour le stocker dans le local storage
    let userToken = JSON.stringify(resultat)
    localStorage.setItem('token', `${userToken}`)
    //on redirige vers la page accueil
    document.location.href = './index.html'
  } else {
    //si la reponse du serveur n'est pas 200 alors on declenche la fonction erreur
    //erreurMessage(reponse)
    modaleErreur(reponse.status)
  }
} /*
//function qui gere l'erreur
function erreurMessage (reponseRequete) {
  if (reponseRequete.status === 401) {
    alert("L'utilisateur n'est pas autorisé")
  }
}*/
//function qui créer une modale pour les erreurs
function modaleErreur (reponseRequete) {
  const modalErreur = document.getElementById('#modalErreur')
  console.log(reponseRequete)
}
