var lionKing = [
    {
        "name": "Simba",
        "trait": " feisty",
        "color": " Tan"
    },
    {
        "name": "Pumbaa",
        "trait": " Clumsy",
        "color": " Maroon"  
    },
    {
        "name": "Zazu",
        "trait": " Strong Sense",
        "color": " Blue"
    },
    {
        "name": "Mufasa",
        "trait": "leader",
        "color": " Tan"
    },
    {
        "name": "Scar",
        "trait": " selffish",
        "color": " Tan"
    }
];


var lkList = document.getElementById("lkCharacters");
for (var i = 0; i < lionKing.length; i++){
    lkList.innerHTML += "<li>" + Object.values(lionKing[i]) + "</li>"
};

lkList.style.color = "blue"
lkList.style.fontSize = "35px"