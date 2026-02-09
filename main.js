console.log(document);
console.dir(document);



// ------------------------- //
const tipoDeSeguro = document.getElementById("tipoDeSeguro");
const divisiones = document.querySelectorAll(".opciones");
//botones //
let boton = document.getElementById("boton");
let botonA = document.getElementById("cotizarA");
let botonM = document.getElementById("cotizarM");
let botonV = document.getElementById("cotizarV");

//valores para calcular//
const valorAuto = document.getElementById("valorAutomotor");
const anioAuto = document.getElementById("anioAutomotor");
const valorMoto = document.getElementById("valorMotovehiculo");
const anioMoto = document.getElementById("anioMotovehiculo");
const metrosViv = document.getElementById("metrosVivienda");


const resultadoCalculo = document.getElementById("calculoFinal");
const botonDeContacto = document.getElementById("botonEmail");

//boton de CONFIRMAR DATOS
boton.addEventListener("click", function() {
    const tipoSeleccionado = tipoDeSeguro.value;

    
    divisiones.forEach(division => {
        division.style.display = "none";
    });

    
    if (tipoSeleccionado) {
        document.getElementById(tipoSeleccionado).style.display = "block";
    }
});

//automotor BOTON COTIZAR
botonA.addEventListener("click", function() {
    const tipoSeleccionado = tipoDeSeguro.value;
    if(tipoSeleccionado === "automotor") {
        let precioAuto = Number(valorAuto.value);
        let anioModeloAuto = Number(anioAuto.value);
        if (precioAuto <= 0 || anioModeloAuto <= 0) {
            resultadoCalculo.textContent = "Completá todos los datos";
            return;
        }
        let cuota;
        let mensaje = "";

        if (anioModeloAuto >= 2016 && anioModeloAuto <= 2026) {
            cuota = 0.02;
        } else if (anioModeloAuto <= 2015 && anioModeloAuto >= 2000 ) {
            cuota = 0.04;
        } else {
            mensaje = "No asegurable por el Año Modelo || Modelo Año Inexistente";
        }

        let resultado = null; 

            if (cuota !== undefined) {
            resultado = cuota * precioAuto;
        }    


        
        if(resultado !== null) {
            const nombre = document.getElementById("nombreApellido");
            let nombreUsuario = nombre.value;
            const telefono = document.getElementById("telefono");
            const telefonoUsuario = telefono.value;
            const datos = {
                nombre: nombreUsuario,
                telefono: telefonoUsuario,
                valorVehiculo: precioAuto,
                anio: anioModeloAuto,
                cuota: resultado
            }
            guardarDatos(datos);


            resultadoCalculo.textContent = "Hola " + nombreUsuario + " el valor mensual estimado es de $" + resultado;
        } else {
            resultadoCalculo.textContent = mensaje;
        }
    }
});

//moto BOTON COTIZAR
botonM.addEventListener("click", function() {
    const tipoSeleccionado = tipoDeSeguro.value;
    if(tipoSeleccionado === "motovehiculo") {
        let precioMoto = Number(valorMoto.value);
        let anioModeloMoto = Number(anioMoto.value);
        if (precioMoto <= 0 || anioModeloMoto <= 0) {
            resultadoCalculo.textContent = "Completá todos los datos";
            return;
        }

        let cuota;
        let mensaje = "";

        if (anioModeloMoto >= 2016 && anioModeloMoto <= 2026) {
            cuota = 0.03;
        } else if (anioModeloMoto <= 2015 && anioModeloMoto >= 2006){
            cuota = 0.02;
        } else {
            mensaje = "No asegurable por el Año Modelo || Modelo Año inexistente";
            return
        }

        let resultado = null; 

        if (cuota !== undefined) {
            resultado = cuota * precioMoto;
}

        if(resultado !== null) {

            const nombre = document.getElementById("nombreApellido");
            const nombreUsuario = nombre.value;
            const telefono = document.getElementById("telefono");
            const telefonoUsuario = telefono.value;
            const datos = {
                nombre: nombreUsuario,
                telefono: telefonoUsuario,
                valorVehiculo: precioMoto,
                anio: anioModeloMoto,
                cuota: resultado
            }
            guardarDatos(datos);


            resultadoCalculo.textContent = "Hola " +nombreUsuario +" el valor mensual estimado es de $" + resultado;
        } else {
            resultadoCalculo.textContent = mensaje;
        }
    }
});

// vivienda BOTON COTIZAR
botonV.addEventListener("click", function() {
    const tipoSeleccionado = tipoDeSeguro.value;
    if(tipoSeleccionado === "vivienda") {
        let cantMetrosViv = Number(metrosViv.value);
        if (cantMetrosViv <= 0) {
            resultadoCalculo.textContent = "Completá todos los datos";
            return;
        }
        let cuota = 500;
        let resultado = cantMetrosViv * cuota;

        //datos usuario
        const telefono = document.getElementById("telefono");
        const telefonoUsuario = telefono.value;
        const nombre = document.getElementById("nombreApellido");
        const nombreUsuario = nombre.value;
        
        const datos = {
            nombre: nombreUsuario,
            telefono: telefonoUsuario,
            tipo: tipoSeleccionado,
            monto: resultado,
            metros: cantMetrosViv

        }
        guardarDatos(datos);
        

        resultadoCalculo.textContent = "Hola " +nombreUsuario +" El valor menusal estimado es de $" + resultado;
    }
});



// funcion datosusuario ----//
function guardarDatos(datos) {
    let cotizaciones;

    if (localStorage.getItem("pidioCotizacion") === null) {
        cotizaciones = [];
    } else {
        cotizaciones = JSON.parse(localStorage.getItem("pidioCotizacion"));
    }

    cotizaciones.push(datos);
    localStorage.setItem("pidioCotizacion", JSON.stringify(cotizaciones));
}


// Boton de contacto por email

botonEmail.addEventListener("click", function(){
    let email = "seguroquenose@seguros.com";
    let asunto = "presupuesto";
    let mensajeEmail = " Hola, quiero informacion";
    

    window.location.href =
        "mailto:" + email +
        "?subject=" + asunto +
        "&body=" + mensajeEmail;
});


















