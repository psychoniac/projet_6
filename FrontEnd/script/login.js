window.addEventListener('DOMContentLoaded', function () {
  envoiLogin()
})

function envoiLogin () {
  const login = document.querySelector('#mail').value
  const password = document.querySelector('#password').value
  fetch('http://localhost/api/users/login', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'apllication/json'
    },
    method: 'POST',
    body: JSON.stringify({ email: login, password: password })
  }).then(res => {
    console.log(res)
  })
}
