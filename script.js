const paginationLinks = document.querySelectorAll(".pagination .page-link")
paginationLinks.forEach(async (link) => {
    link.addEventListener("click" , async function() {
        const diser = this.dataset.page
        const data = await catchpro(diser)
        displayu(data)
    })
 
})

const displayu = (data)=>{
const usersContainer = document.querySelector(".data-container")
const usersHtmlCo = data.map(data => `

<div class="col-12 col-sm-6 col-md-4 col-lg-3 p-2 ">
<div class="card" style="width: 18rem;">
    <img src="${data.avatar}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${data.first_name + "" + data.last_name}</h5>
        <p class="card-text">${data.email}</p>
        <a href="#" class="btn btn-primary">Read More</a>
    </div>
</div>
</div>

`)
usersContainer.innerHTML = usersHtmlCo.join("")
}




const catchpro = async (page = 1) => {

    const respons = await fetch('https://reqres.in/api/users?page=${page}')
    const data = await respons.json()
   return data.data



}


const initApp =async () =>{

    const paginationLinks = document.querySelectorAll(".pagination .page-link")
    paginationLinks.forEach(async (link) => {
        link.addEventListener("click" , async function() {
            const diser = this.dataset.page
            const data = await catchpro(diser)
            displayu(data)
        })
     
    })
    const data = await catchpro(diser)
    displayu(data)
}
