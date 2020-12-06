const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()
xhr.onreadystatechange = function () {
if (xhr.readyState === 4 && xhr.status === 200) {
    const jsonData = xhr.responseText
    const data = JSON.parse(jsonData)
    showData(data.objects[0])
}
};

function showData(arr){
for (let i = 0; i < arr.pokemon.length; i++) {
    const header1 = document.createElement('h1')
    header1.textContent = arr.pokemon[i].name
    document.body.appendChild(header1)
    const header2 = document.createElement('h2')
    header2.textContent = arr.pokemon[i].resource_uri
    document.body.appendChild(header2)
}
};