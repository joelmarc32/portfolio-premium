console.log("Portfolio cargado correctamente");

document.querySelectorAll(".card")
.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow =
"0 0 25px #00bfff";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow =
"none";

});

});
