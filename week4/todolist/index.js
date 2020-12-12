axios.get("https://api.vschool.io/suncerrae/todo").then(response => {
    console.log (response) 
        for (let i = 0; i < response.data.length; i++) {
        const tasks = document.getElementsByClassName("list")[i]
        tasks.textContent = response.data[i].title
        if (response.data[i].completed === true) {
            tasks.style.textDecorationLine = "line-through" 
    
        document.body.appendChild
        }  
        if (response.data[i].imgUrl) {
            var img = document.createElement("img")
            img.src = response.data[i].imgUrl
            tasks.appendChild(img) 
        }
        
             
        
        
    }
}).catch()




