window.addEventListener('DOMContentLoaded', function () {
  authentification()
})
function authentification () {
  const formulaireLogin = document.querySelector('#loginForm')
  formulaireLogin.addEventListener('submit', function (e) {
    e.preventDefault()
    requetePostLogin()
  })
}

async function requetePostLogin () {
  const formulaireData = {
    email: document.querySelector('#mail').value,
    password: document.querySelector('#password').value
  }

  const idUtilisateur = JSON.stringify(formulaireData)
  let token = ''
  const reponse = await fetch('http://localhost:5678/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: idUtilisateur
  })
  if (reponse.status === 200) {
    console.log('response ok')
    let resultat = await reponse.json()
    let userToken = JSON.stringify(resultat)
    localStorage.setItem('token', `${userToken}`)
    // document.location.href = './index.html'
    console.log(localStorage)
  } else {
    erreurMessage(reponse)
  }
}
function erreurMessage (reponseRequete) {
  if (reponseRequete.status != 200) {
    alert(reponseRequete.status)
  }
}
