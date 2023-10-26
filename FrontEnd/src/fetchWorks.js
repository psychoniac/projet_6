async function getWorks(){
    try {
        const response = await fetch("http://localhost:5678/api/works")
        const worksList = await response.json()
        return worksList
    } catch (error) {
        console.log(error)
    }
}
async function createGallery(){
    const arrayWorks = await getWorks()
    console.log(arrayWorks)
    const gallery = document.querySelector(".gallery")
    arrayWorks.map((work) => {
        const figureWork = document.createElement('figure')
        const imgWork = document.createElement('img')
        const figCaptionWork = document.createElement('figcaption')
        imgWork.src = work.imageUrl 
        figCaptionWork.innerHTML = work.title 
        gallery.appendChild(figureWork)
        figureWork.appendChild(imgWork)
        figureWork.appendChild(figCaptionWork)
    })
    console.log(gallery)

}
createGallery()