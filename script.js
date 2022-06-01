const baseUrl = "https://zoo-animal-api.herokuapp.com/animals/rand/10"
/*const posts = [
    {id: 1, title: "Title 1", author:""},
    {id: 2, title: "Title 2", author:""}
]
function getPosts() {
    setTimeout(()=>{
        let output = ""
posts.forEach(post => {
        output += `<li>${post.title}`
    })
    document.body.innerHTML = output
    }, 2000)
    
}

function createPost(post){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            posts.push(post)
            const error = false
            if(!error){
                resolve("I am resolved")
            }
            else{
                reject("Error")
            }
        }, 2000)
    })
}*/
function startSpiner(){
    const spiner = document.createElement("div")
    const img = document.createElement("img")
    spiner.classList.add("spiner")
    img.src = "spiner.gif"
    img.classList.add("spiner-img")
    document.body.append(spiner)
    spiner.append(img)
}

function startListing(data){
    let output = ""
    let infoOutput = ""
    const bigDiv = document.createElement("div")
    bigDiv.classList.add("big-div")
    document.body.appendChild(bigDiv)
    data.forEach(animal => {
        const info = document.createElement("div")
    const bigDiv = document.querySelector(".big-div")
    const card = document.createElement("div")
    info.classList.add("info")
    bigDiv.appendChild(card)
    output = `<img src="${animal.image_link}" alt="${animal.name}">
    <h1>${animal.name}</h1>
    <h2>${animal.animal_type}</h2>`
    infoOutput =`<p><span class="big">Where it usualy lives:</span> ${animal.geo_range}</p>
    <p><span class="big">Habitat:</span> ${animal.habitat}</p>
    <p><span class="big">Diet:</span> ${animal.diet}</p>
    <p><span class="big">Lifespan:</span> ${animal.lifespan}</p>`
    card.classList.add("card")
    info.innerHTML = infoOutput
    card.innerHTML = output
    card.appendChild(info)
    })
}

function stopSpiner(data){
    setTimeout(()=>{
    const spiner = document.querySelector(".spiner")
    spiner.remove()
    startListing(data)
    }, 2000, data)
}

async function getUsers(){
    startSpiner()
    const users = await fetch(baseUrl).catch(err => console.log(err))
    const data = await users.json().catch(err => console.log(err))
    if(data){
        stopSpiner(data)
        console.log(data)
    }
}
//createPost({id: 3, title:"Title 3", author: ""}).then(getPosts).catch(err => console.log(err))//
getUsers()