//on creer une fonction qui va génerer une modal vide
function genererModal () {
  if (localStorage != null) {
    const overlay = document.createElement('div')
    const modal = document.createElement('div')
    const contenerModal = document.querySelector('body')
    contenerModal.appendChild(overlay)
    contenerModal.appendChild(modal)
  }
}
genererModal()
