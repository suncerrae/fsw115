const form = document.getElementById("forms");

//get request
axios.get("https://api.vschool.io/suncerrae/todo/")
.then(response => {
    
    for (let i = 0; i < response.data.length; i++) {

    const li = document.createElement("li");
    const ul = document.getElementsByTagName("ul")[0]
    ul.append(li);
    li.classList = "list";

    const h2 = document.createElement("h2");
    h2.textContent = response.data[i].title;
    li.appendChild(h2);
    const h3 = document.createElement("h3");
    h3.textContent = "Products needed: " + response.data[i].description;
    li.appendChild(h3);
    const h4 = document.createElement("h4");
    h4.textContent = "Price of products: $" + response.data[i].price;
    li.appendChild(h4);

    //Checkbox - Put
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "checkbox";
    checkbox.id = response.data[i]._id;
    if (response.data[i].completed === true) {
        checkbox.checked = true;
        h2.style.textDecorationLine = "line-through";
        h3.style.textDecorationLine = "line-through";
        h4.style.textDecorationLine = "line-through";  
    }
    li.appendChild(checkbox);
    
    checkbox.addEventListener("click", (event) => {
        let updates;
        if (checkbox.checked) {
            updates = true;
        } else {
            updates = false;
        }
        axios.put("https://api.vschool.io/suncerrae/todo/" + event.currentTarget.id, {completed:updates})
        .then(response => (response.data))
        .catch(error => console.log(error))
    })

    //delete button
    const button = document.createElement("button")
        button.textContent = "Delete";
        button.id = response.data[i]._id
        button.style.marginLeft = "px";
        button.style.paddingRight = "125px";
        li.appendChild(button);
        button.addEventListener("click", (event) => {
        axios.delete("https://api.vschool.io/suncerrae/todo/" + event.currentTarget.id)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
     })
     
}
})
.catch(error => console.log(error))

// post--new task
form.addEventListener("submit", function(event){
    event.preventDefault()

    const newTodo = {
        title: form.title.value,
        description: form.description.value,
        price: form.price.value
    }
    axios.post("https://api.vschool.io/suncerrae/todo/", newTodo)
        .then(response => {response.data 
        form.reset()})
        .catch(error => console.log(error))
       
})

 