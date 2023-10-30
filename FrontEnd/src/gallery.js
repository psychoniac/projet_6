/**
 * création de la gallery des works 
 */
async function createGallery(arrayWorks){
   // const arrayWorks = await getWorks()
   // console.log(arrayWorks)
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
}
//createGallery()
async function createButtonFilter(){
    const arrayCategory = await getCategory()
    const contenerFilters = document.getElementById("filters")
    arrayCategory.map((category) => {
        const buttonFilter = document.createElement('button')
        buttonFilter.classList.add('filter')
        buttonFilter.id = category.id
        buttonFilter.textContent = category.name
        contenerFilters.appendChild(buttonFilter)
        buttonFilter.addEventListener("click", (e)=>{
            
            createGalleryFiltered(e.currentTarget.id)
        })
    })
}
createButtonFilter()
//creer la gallerie en fonction de l'id categorie 
async function createGalleryFiltered(categoryId){
    const arrayWorks = await getWorks()
   const arrayWorksFiltered = arrayWorks.filter(function(work){
        return work.categoryId == categoryId
    })
    
    const gallery = document.querySelector(".gallery")
    gallery.innerHTML = ""
    createGallery(arrayWorksFiltered)
}
