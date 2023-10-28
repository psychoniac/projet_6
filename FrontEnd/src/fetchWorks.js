//recuperation de la liste des works 
 async function getWorks(){
    try {
        const response = await fetch("http://localhost:5678/api/works")
        const worksList = await response.json()
        return worksList
    } catch (error) {
        console.log(error)
    }
}

//recuperation de la liste des categories 
 async function getCategory(){
    try {
        const response = await fetch("http://localhost:5678/api/categories")
        const categoryList = await response.json()
        console.log(categoryList)
        return categoryList
    } catch (error) {
        console.log(error)        
    }
}
