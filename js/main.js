alert ("Hola, bienvenido")

function saludar (){
    alert("Hola");
}

let nombreIngresado = prompt("Ingrese su nombre");
alert("Bienvenido " + nombreIngresado);


for(let ingresesuedad = 1; ingresesuedad <=17; ingresesuedad++){
    let ingresesuedad = prompt("ingrese su edad")
    if(ingresesuedad >= 18){
        break;
    }
    alert("No puedes ingresar si eres menor de edad")
}

function mostrarOpcion() {
    const select = document.getElementById('opciones');
    const opcionSeleccionada = select.value;
    alert('Opción seleccionada: ' + opcionSeleccionada);
}

let puntuacion = prompt("Del 1 al 10 que le parecio el servicio");

if (puntuacion >= 9) {
    console.log("Exelente");
} else if (puntuacion >= 8) {
    console.log("Muy Bueno");
} else if (puntuacion >= 5) {
    console.log("Normal");
} else if (puntuacion >= 3) {
    console.log("Malo");
}


