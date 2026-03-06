Explicación del simulador de seguros

El trabajo consiste en un simulador de costos estimados de seguros. La idea es que un usuario pueda ingresar algunos datos básicos y obtener un precio aproximado de una cuota, para tener una referencia del costo antes de una posible contratación.

El simulador permite calcular tres tipos de seguros:

Automotor

Motovehículo

Vivienda

Dependiendo de la opción que elija el usuario, se muestran distintos campos para completar.

Funcionamiento general

Primero el usuario completa nombre y teléfono, que serían datos de contacto. Después puede elegir qué tipo de seguro quiere simular.

Cuando el usuario selecciona una opción, el sistema muestra los campos correspondientes a ese seguro. Esto lo hice para no mostrar todos los formularios al mismo tiempo, así la página queda más ordenada.

Todo esto lo manejo con JavaScript y el DOM, mostrando u ocultando elementos según lo que el usuario elija.

Uso de botones y eventos

Para que el simulador funcione utilizo event listeners en los botones. Cuando el usuario hace click en calcular, el programa toma los valores de los inputs y ejecuta la función correspondiente al tipo de seguro.

Esto me permitió separar la lógica en diferentes funciones para que el código quede más organizado.

Funciones de cálculo

El simulador tiene tres funciones principales, una para cada tipo de seguro.

Seguro automotor

En este caso el cálculo se hace según:

El año del vehículo

El valor aproximado del vehículo

Dependiendo del año del modelo, el sistema lo clasifica como nuevo, intermedio o viejo, y a partir de eso se calcula una cuota estimada.

Seguro de motovehículo

Funciona parecido al de automotor.

El usuario ingresa:

Año de la moto

Valor estimado

Con esos datos se calcula una cuota aproximada usando una fórmula similar.

Seguro de vivienda

En este caso el cálculo es diferente. El usuario ingresa los metros cuadrados de la vivienda y el sistema calcula un valor estimado de seguro según un precio aproximado por metro cuadrado.

Uso de JSON, fetch, async y await

Para los valores de las cuotas utilicé un archivo JSON donde guardé los valores de referencia.

Después desde JavaScript utilizo fetch con async y await para cargar esos datos.

La idea de esto es que si en el futuro cambian los valores, se puedan modificar solo en el archivo JSON sin tocar el código JavaScript.

También agregué un control básico de error en caso de que el archivo no se cargue correctamente.

Validaciones

Agregué algunas validaciones simples para evitar errores:

Que los inputs no estén vacíos

Que los valores numéricos realmente sean números

Que el usuario complete los datos necesarios antes de calcular



Notificaciones al usuario

Para mostrar mensajes utilicé Toastify, que permite mostrar notificaciones pequeñas en la pantalla.

Por ejemplo se usa para:

Avisar si falta completar un campo

Mostrar errores

Informar el resultado del cálculo







