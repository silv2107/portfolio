let array = ["./img/greenGarden.jpg", "./img/theband.jpg", "./img/bear.jpg", "./img/earth.jpg", "./img/starwars.jpg","./img/immune.jpg"];

let backgroundImage = document.querySelectorAll(".gridElement header");

for(i = 0; i < backgroundImage.length; i++){
    backgroundImage[i].style.backgroundImage = "url("+ array[i] +")";
}

