const form = document.getElementById("forms");

//GET REQUEST
axios.get("https://api.vschool.io/suncerrae/todo/")
.then(response => {
    
    for (let i = 0; i < response.data.length; i++) {

    //TODO LIST TEXT
    const li = document.createElement("li");
    const ul = document.getElementsByTagName("ul")[0];
    ul.prepend(li);
    li.classList = "list";

    const h2 = document.createElement("h2");
    h2.textContent = response.data[i].title;
    li.appendChild(h2);

    const h3 = document.createElement("h3");
    h3.textContent =  "- " + response.data[i].description;
    li.appendChild(h3);

    const h4 = document.createElement("h4");
    h4.textContent = "$ " + response.data[i].price;
    li.appendChild(h4);

    //CHECKBOX - LINE-THROUGH
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "checkbox";
    checkbox.style.marginRight = "20px";
    checkbox.style.marginLeft = "10px";
    checkbox.id = response.data[i]._id;
    li.appendChild(checkbox);

    if (response.data[i].completed === true) {
        checkbox.checked = true;
        h2.style.textDecorationLine = "line-through";
        h3.style.textDecorationLine = "line-through";
        h4.style.textDecorationLine = "line-through";  
    }
    
    //CHECKBOX - EVENT LISTENER
    checkbox.addEventListener("click", (event) => {
        let updates;
        if (checkbox.checked) {
            updates = true;
        } else {
            updates = false;
        }
        axios.put("https://api.vschool.io/suncerrae/todo/" + event.currentTarget.id, {completed:updates})
        .then(response => {response.data
        location.reload()})
        .catch(error => console.log(error))
    })

    //DELETE BUTTON
    const button = document.createElement("button");
    button.textContent = "Delete";
    button.id = response.data[i]._id;
    li.appendChild(button);

    //DELETE - EVENT LISTENER
    button.addEventListener("click", (event) => {console.log(event.currentTarget.id)
        axios.delete("https://api.vschool.io/suncerrae/todo/" + event.currentTarget.id)
            .then(response => {console.log (response.data) 
            location.reload()
            })
            .catch(error => console.log(error))
    })

    //EDIT BUTTON
    const edit = document.createElement("button");
    edit.textContent = "Edit";
    edit.style.marginLeft = "30px";
    edit.id = response.data[i]._id;
    li.appendChild(edit);

    //SUBMIT BUTTON
    const submits = document.createElement("button");
    submits.textContent = "Submit";
    submits.style.marginLeft = "30px";
    submits.id = response.data[i]._id;

    //EDIT FORM - EVENT LISTENER
    edit.addEventListener("click", (e) => {

        const x = document.getElementById("box");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "block";
        }
        
        li.appendChild(submits);
    })

    //SUBMIT EDIT - EVENT LISTENER - PUT
    submits.addEventListener("click", (event) => {
    
        let t = document.getElementById("titleInput").value;
        let d = document.getElementById("detailsInput").value;
        let p = document.getElementById("numberInput").value;

        if (t.length === 0) {
        t = response.data[i].title;
        }
        if (d.length === 0) {
        d = response.data[i].description;
        }
        if (p.length === 0) {
        p = response.data[i].price;
        }
       
        axios.put("https://api.vschool.io/suncerrae/todo/" + event.currentTarget.id, {
            title:t,
            description:d,
            price:p
            })
            .then(response => {response.data 
            location.reload()
            })
            .catch(error => console.log(error))
    })

}
})
.catch(error => console.log(error))


// NEW TODO - POST
form.addEventListener("submit", function(event){
    event.preventDefault();

    const newTodo = {
        title: form.title.value,
        description: form.description.value,
        price: form.price.value
    }

    axios.post("https://api.vschool.io/suncerrae/todo", newTodo)
        .then(response => {response.data 
        form.reset()
        location.reload()
        })
        .catch(error => console.log(error))    
})
console.log("loading")



axios.get("https://api-v2.intrinio.com/companies/AAPL/news?api_key=OmRjM2E0MDZlMTFhNTRhY2M4NTdlOTkyZTdmY2NhNTE0")
.then(response => { console.log(response.data)
    
    for (let i = 0; i < response.data.news.length; i++) {

    //TODO LIST TEXT
    const li = document.createElement("li");
    const ul = document.getElementsByTagName("ul")[0];
    ul.prepend(li);
    li.classList = "list";

    const h2 = document.createElement("h2");
    h2.textContent = response.data.news[i].title;
    li.appendChild(h2);

    const h3 = document.createElement("h3");
    h3.textContent =  "- " + response.data.news[i].description;
    li.appendChild(h3);

    const h4 = document.createElement("h4");
    h4.textContent = "$ " + response.data.news[i].price;
    li.appendChild(h4); 
}})