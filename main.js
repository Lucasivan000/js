console.log(document);
console.dir(document);

const tipoDeSeguro = document.getElementById("tipoDeSeguro");
const divisiones = document.querySelectorAll(".opciones");

let boton = document.getElementById("boton");

//automotor
const valorAuto = document.getElementById("valorAutomotor");
const anioAuto = document.getElementById("anioAutomotor");
const valorMoto = document.getElementById("valorMotovehiculo");
const anioMoto = document.getElementById("anioMotovehiculo");
const metrosViv = document.getElementById("metrosVivienda");



boton.addEventListener("click", function() {
    let resultado= null;
    let mensaje ="";
    const tipoSeleccionado = tipoDeSeguro.value;
    divisiones.forEach(division => {
    division.style.display = "none";
    });    
    
    if (tipoSeleccionado){
         document.getElementById(tipoSeleccionado).style.display = "block";


    };
    //automotor calculo //
    if(tipoSeleccionado === "automotor") {
        let precioAutoText = valorAuto.value;
        let precioAuto = Number(precioAutoText);
        
        let anioAutoText = anioAuto.value;
        let anioModeloAuto = Number(anioAutoText);
        let cuota;

        if (anioModeloAuto >= 2016 && anioModeloAuto <= 2026) {
            cuota = 0.05;
        } else if (anioModeloAuto <= 2015 && anioModeloAuto >= 2000 ) {
            cuota = 0.07;
        } else {
            mensaje = "No asegurable por el Año Modelo";
        }
        if (cuota !== undefined) {
            resultado = cuota * precioAuto;
        }

    };
    // motovehiculo calculo //
    if (tipoSeleccionado === "motovehiculo") {
        let precioMotoText = valorMoto.value;
        let precioMoto = Number(precioMotoText);

        let anioMotoText = anioMoto.value;
        let anioModeloMoto = Number(anioMotoText);
        let cuota;

        if (anioModeloMoto >= 2016 && anioModeloMoto <= 2026) {
            cuota = 0.07;
        } else if (anioModeloMoto <= 2015 && anioModeloMoto >= 2006){
            cuota = 0.09;
        } else {
            mensaje = "No asegurable por el Año Modelo";
        }
        if (cuota !== undefined){
            resultado = cuota * precioMoto;
        }
    }
    if (tipoSeleccionado === "vivienda") {
        let cantidadMetros = metrosViv.value;
        let cantMetrosViv = Number(cantidadMetros);

        let cuota = 0.02;
        resultado = cantMetrosViv * cuota;
    }
        
});
    


















