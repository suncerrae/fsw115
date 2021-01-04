async function getData(){
    
    try {
    const response = await axios.get("https://rickandmortyapi.com/api/character/1") 
    const rickOrigin = await axios.get(response.data.origin.url)
    const rickLoc = await axios.get(response.data.location.url)
    listToDom(rickOrigin, rickLoc, response)
    }

    catch(error) {
    console.log(error)
    }
}
getData()



const mainInfo = document.getElementById("info")

function listToDom(rickOrigin, rickLoc, rick) {

    const nameh1 = document.createElement("h1")
    nameh1.textContent = rick.data.name
    mainInfo.appendChild(nameh1)
    const pic = document.createElement("img")
    pic.src = rick.data.image
    mainInfo.appendChild(pic)
    const spec = document.createElement("h1")
    spec.textContent = "Species: " + rick.data.species
    mainInfo.appendChild(spec)
    const live = document.createElement("h1")
    live.textContent = "Status: " + rick.data.status
    mainInfo.appendChild(live)
    const h1 = document.createElement("h1")
    h1.textContent = "Origin: " + rickOrigin.data.name
    mainInfo.appendChild(h1)
    const orgindem = document.createElement("h2")
    orgindem.textContent = "Origin Dimension: " + rickOrigin.data.dimension
    mainInfo.appendChild(orgindem)
    const location = document.createElement("h1")
    location.textContent = "Current Location: " + rickLoc.data.name
    mainInfo.appendChild(location)
    const locationdem = document.createElement("h2")
    locationdem.textContent = "Current Location Dimension: " + rickLoc.data.dimension
    mainInfo.appendChild(locationdem)
}



const div = document.getElementById("episodes")

async function rickAndMorty () {
    const characters = await axios.get("https://rickandmortyapi.com/api/character/1")
    const episodes = characters.data.episode
    const pendingPromises = []

    for(let i = 0; i < episodes.length; i++){
        pendingPromises.push(axios.get(episodes[i]))
    }

    Promise.all(pendingPromises)

    .then(response => { 
        for (let i = 0; i < episodes.length; i++) {
        const name = document.createElement("h1")
        name.textContent = "Episode Title: " + response[i].data.name
        div.appendChild(name)
        const eps = document.createElement("h2") 
        eps.textContent = "Season/Episode : " + response[i].data.episode
        div.appendChild(eps)
        const air = document.createElement("h3") 
        air.textContent = "Date aired: " + response[i].data.air_date
        div.appendChild(air)
        }
    })
    .catch(error => console.log(error))
}
rickAndMorty()