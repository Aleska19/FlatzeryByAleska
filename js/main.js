const nav = document.querySelector("#nabvar");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    navbar.classList.add("visible");
})

cerrar.addEventListener("click", () =>{
    navbar.classList.remove("visible");
})


