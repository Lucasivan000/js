console.log(document);
console.dir(document);

const tipoDeSeguro = document.getElementById("tipoDeSeguro");
const divisiones = document.querySelectorAll(".opciones");

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
    
// calculos // 
//automotor //
let resultadoA = document.getElementById("cotizarA");

resultadoA.addEventListener("click", function() {
    const valorA = document.getElementById("valorAutomotor");
    const anioA = document.getElementById("anioAutomotor");
    let cuota;
      if (anioA.value <= 2026 && anioA.value >= 2016) {
        cuota = 0.02;
    } else if (anioA.value < 2016 && anioA.value >= 2006) {
        cuota = 0.03;
    } else {
        alert("No asegurable por el año del vehículo");
}});















