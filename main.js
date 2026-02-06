console.log(document);
console.dir(document);

const tipoDeSeguro = document.getElementById("tipoDeSeguro");
const divisiones = document.querySelectorAll(".opciones");

let boton = document.getElementById("boton");
let botonA = document.getElementById("cotizarA");
let botonM = document.getElementById("cotizarM");
let botonV = document.getElementById("cotizarV");


const valorAuto = document.getElementById("valorAutomotor");
const anioAuto = document.getElementById("anioAutomotor");
const valorMoto = document.getElementById("valorMotovehiculo");
const anioMoto = document.getElementById("anioMotovehiculo");
const metrosViv = document.getElementById("metrosVivienda");


const resultadoCalculo = document.getElementById("calculoFinal");

//boton
boton.addEventListener("click", function() {
    const tipoSeleccionado = tipoDeSeguro.value;

    
    divisiones.forEach(division => {
        division.style.display = "none";
    });

    
    if (tipoSeleccionado) {
        document.getElementById(tipoSeleccionado).style.display = "block";
    }
});

//automotor
botonA.addEventListener("click", function() {
    const tipoSeleccionado = tipoDeSeguro.value;
    if(tipoSeleccionado === "automotor") {
        let precioAuto = Number(valorAuto.value);
        let anioModeloAuto = Number(anioAuto.value);
        let cuota;
        let mensaje = "";

        if (anioModeloAuto >= 2016 && anioModeloAuto <= 2026) {
            cuota = 0.02;
        } else if (anioModeloAuto <= 2015 && anioModeloAuto >= 2000 ) {
            cuota = 0.04;
        } else {
            mensaje = "No asegurable por el Año Modelo";
        }

        let resultado = null; // dejamos la “caja vacía” primero

            if (cuota !== undefined) {
            resultado = cuota * precioAuto;
        }    


        
        if(resultado !== null) {
            resultadoCalculo.textContent = "El valor estimado es de $" + resultado;
        } else {
            resultadoCalculo.textContent = mensaje;
        }
    }
});

//moto
botonM.addEventListener("click", function() {
    const tipoSeleccionado = tipoDeSeguro.value;
    if(tipoSeleccionado === "motovehiculo") {
        let precioMoto = Number(valorMoto.value);
        let anioModeloMoto = Number(anioMoto.value);
        let cuota;
        let mensaje = "";

        if (anioModeloMoto >= 2016 && anioModeloMoto <= 2026) {
            cuota = 0.05;
        } else if (anioModeloMoto <= 2015 && anioModeloMoto >= 2006){
            cuota = 0.06;
        } else {
            mensaje = "No asegurable por el Año Modelo";
        }

        let resultado = null; 

        if (cuota !== undefined) {
            resultado = cuota * precioMoto;
}

        if(resultado !== null) {
            resultadoCalculo.textContent = "El valor estimado es de $" + resultado;
        } else {
            resultadoCalculo.textContent = mensaje;
        }
    }
});

// vivienda
botonV.addEventListener("click", function() {
    const tipoSeleccionado = tipoDeSeguro.value;
    if(tipoSeleccionado === "vivienda") {
        let cantMetrosViv = Number(metrosViv.value);
        let cuota = 0.02;
        let resultado = cantMetrosViv * cuota;

        resultadoCalculo.textContent = "El valor menusal estimado es de $" + resultado;
    }
});

    


















