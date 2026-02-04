const tipoDeSeguro = document.getElementById("tipoDeSeguro");
const divisiones = document.querySelectorAll(".opciones")

let boton = document.getElementById("boton");

boton.addEventListener("click", function() {
    const tipoSeleccionado = tipoDeSeguro.value;
    divisiones.forEach(division => {
    division.style.display = "none";
    });    
    
    if (tipoSeleccionado){
         document.getElementById(tipoSeleccionado).style.display = "block";


    };
        

});
    





