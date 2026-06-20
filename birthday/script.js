function showSurprise() {
    document.getElementById("surprise").style.display = "block";
}

const colors = ["red","blue","yellow","green","purple","orange","pink"];

for(let i=0;i<20;i++){
    let balloon = document.createElement("div");
    balloon.classList.add("balloon");

    balloon.style.background =
        colors[Math.floor(Math.random()*colors.length)];

    balloon.style.left = Math.random()*100 + "vw";
    balloon.style.animationDuration =
        (5 + Math.random()*8) + "s";

    document.body.appendChild(balloon);
}