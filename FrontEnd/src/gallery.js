/**
 * création de la gallery des works 
 */
async function createGallery(){
    const arrayWorks = await getWorks()
    console.log(arrayWorks)
    //création gallerie works
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
    //creation des boutons filtres 
    const contenerFilter = document.getElementById("filters")
    console.log(contenerFilter)
    

}
createGallery()
async function createButtonFilter(){
    const arrayCategory = await getCategory()
    const contenerFilters = document.getElementById("filters")
    arrayCategory.map((category) => {
        const buttonFilter = document.createElement('button')
        buttonFilter.classList.add('filter')
        buttonFilter.id = category.id
        buttonFilter.textContent = category.name
        contenerFilters.appendChild(buttonFilter)
    })
}
createButtonFilter()