

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
// validar nunmero y texto
const nombreUsuario = document.getElementById("nombreApellido");
const telefonoUsuario = document.getElementById("telefono");
const errorDeSelecccion = document.getElementById("errorSeleccion");

// historial
const listaHistorial = document.getElementById("listaActualizacion");


nombreUsuario.addEventListener("input", function(){
    let nombrePorValidar = nombreUsuario.value;
    let nombreValidado = "";

    for(let i =0; i < nombrePorValidar.length; i++){
        let letra = nombrePorValidar[i];

        if(
            (letra <= "z" && letra >= "a") || (letra <= "Z" && letra >= "A") || letra === " " ) {
                nombreValidado = nombreValidado + letra;
            }
        
    }    

    nombreUsuario.value = nombreValidado

});

telefonoUsuario.addEventListener("input", function(){
    let telefonoPorValidar = telefonoUsuario.value;
    let telefonoValidado = "";

    for(let i = 0; i < telefonoPorValidar.length ; i++){
        let numerito = telefonoPorValidar[i];

        if((numerito >= "0" && numerito <= "9")){
            telefonoValidado = telefonoValidado + numerito;   
        }
    }
    telefonoUsuario.value = telefonoValidado

});

//boton de CONFIRMAR DATOS
boton.addEventListener("click", function () {
    const nombreEspacio = nombreUsuario.value;
    const telefonoEspacio = telefonoUsuario.value;

    if (nombreEspacio === "" || telefonoEspacio === "") {
        errorDeSelecccion.textContent = "Debe ingresar sus datos";
        return; 
    }
    


    const tipoSeleccionado = tipoDeSeguro.value;
    errorDeSelecccion.textContent ="";



    if (tipoSeleccionado =="seleccionar"){
        errorDeSelecccion.textContent ="Por favor, selecciona un seguro";
        return;
    }


    divisiones.forEach(division => {
        division.style.display = "none";
    });


    if (tipoSeleccionado) {
        document.getElementById(tipoSeleccionado).style.display = "flex";
    }
});

//automotor BOTON COTIZAR
botonA.addEventListener("click", function () {
    const tipoSeleccionado = tipoDeSeguro.value;
    if (tipoSeleccionado === "automotor") {
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
        } else if (anioModeloAuto <= 2015 && anioModeloAuto >= 2000) {
            cuota = 0.04;
        } else {
            mensaje = "No asegurable por el Año Modelo || Modelo Año Inexistente";
        }

        let resultado = null;

        if (cuota !== undefined) {
            resultado = cuota * precioAuto;
        }



        if (resultado !== null) {
            const nombre = document.getElementById("nombreApellido");
            const nombreUsuario = nombre.value;
            const telefono = document.getElementById("telefono");
            const telefonoUsuario = telefono.value;
            const datos = {
                nombre: nombreUsuario,
                telefono: telefonoUsuario,
                valorVehiculo: precioAuto,
                anio: anioModeloAuto,
                cuota: resultado,
                tipo: tipoSeleccionado
            }
            guardarDatos(datos);
           


            resultadoCalculo.textContent = "Hola " + nombreUsuario + " el valor mensual estimado es de $" + resultado;
        } else {
            resultadoCalculo.textContent = mensaje;
        }
    }
});

//moto BOTON COTIZAR
botonM.addEventListener("click", function () {
    const tipoSeleccionado = tipoDeSeguro.value;
    if (tipoSeleccionado === "motovehiculo") {
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
        } else if (anioModeloMoto <= 2015 && anioModeloMoto >= 2006) {
            cuota = 0.02;
        } else {
            mensaje = "No asegurable por el Año Modelo || Modelo Año inexistente";
            return
        }

        let resultado = null;

        if (cuota !== undefined) {
            resultado = cuota * precioMoto;
        }

        if (resultado !== null) {

            const nombre = document.getElementById("nombreApellido");
            const nombreUsuario = nombre.value;
            const telefono = document.getElementById("telefono");
            const telefonoUsuario = telefono.value;
            const datos = {
                nombre: nombreUsuario,
                telefono: telefonoUsuario,
                valorVehiculo: precioMoto,
                anio: anioModeloMoto,
                cuota: resultado,
                tipo: tipoSeleccionado
            }
            guardarDatos(datos);
            


            resultadoCalculo.textContent = "Hola " + nombreUsuario + " el valor mensual estimado es de $" + resultado;
        } else {
            resultadoCalculo.textContent = mensaje;
        }
    }
});

// vivienda BOTON COTIZAR
botonV.addEventListener("click", function () {
    const tipoSeleccionado = tipoDeSeguro.value;
    if (tipoSeleccionado === "vivienda") {
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
        


        resultadoCalculo.textContent = "Hola " + nombreUsuario + " El valor menusal estimado es de $" + resultado;
    }
});



// funcion datosusuario 
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

//funcion para mostrar la lista
function mostrarLista() {
    const listaHistorial = document.getElementById("listaActualizacion");
    const datosUsuario = localStorage.getItem("pidioCotizacion");

    if(!datosUsuario) {
        listaHistorial .innerHTML = "No hay cotizaciones vigentes"
        return;
    }

    const datosGuardados = JSON.parse(datosUsuario);
    const ultimasDiez = datosGuardados.slice(-10).reverse();

    listaHistorial.innerHTML = "";


    ultimasDiez.forEach(function(cotizacion, i) {
        listaHistorial.innerHTML +=`
        <div>
            <p>${i+1}</p>
            <p>Nombre:${cotizacion.nombre}</p>
            <p>Telefono:${cotizacion.telefono}</p>
            <p>Seguro:${cotizacion.tipo}</p>
            <p>Valor:${cotizacion.cuota || cotizacion.monto}</p>
        </div>`
    })

}
const botonBorrar = document.getElementById("borrarHistorial");

botonBorrar.addEventListener("click", function () {

    localStorage.removeItem("pidioCotizacion");
    listaHistorial.innerText = "Historial borrado";

});
const botonHistorial = document.getElementById("botonVerHistorial");

botonHistorial.addEventListener("click", () => {
    mostrarLista();
});



// Boton de contacto por email

botonDeContacto.addEventListener("click", function () {
    let email = "seguroquenose@seguros.com";
    let asunto = "presupuesto";
    let mensajeEmail = " Hola, quiero informacion";


    window.location.href =
        "mailto:" + email +
        "?subject=" + asunto +
        "&body=" + mensajeEmail;
});


















