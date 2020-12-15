let firstButton = document.querySelector('#first-butt')
let secondButton = document.querySelector('#second-butt')
let pokeButton = document.querySelector('#poke-button')

 axios.get('https://www.superheroapi.com/api.php/3279964712034339/search/superman')
    .then(res => {
        

        firstButton.addEventListener('click', function () {
            let list = document.createElement('h2')
            list.textContent = `Results: Name From API: ${res.data.results[1].name},  ${res.data.results[0].name}`
            let ol = document.querySelector('#order-list')
            ol.append(list)
            
        })

        secondButton.addEventListener('click', function () {
            let list = document.createElement('h2')
            list.textContent = `Results: API Data ID: ${res.data.results[0].id}`
            let ol = document.querySelector('#order-list')
            ol.append(list)
        })
    })
    .catch(err => (err))

axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(res => {
        console.log(res.data.results)

        pokeButton.addEventListener('click', function () {
                let list = document.createElement('h2')
                list.textContent = `Result: Pokemon = ${res.data.results[0].name}`
                let ol = document.querySelector('#order-list')
                ol.append(list) 
        })
    })
    .catch(err => (err))