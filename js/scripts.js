const datos = {
  nombre: "",
  apellidos: "",
  telefono: "",
  correo: "",
  mensaje: "",
};

// Variables

const nombre = document.querySelector("#nombre");
const apellidos = document.querySelector("#apellidos");
const telefono = document.querySelector("#telefono");
const correo = document.querySelector("#correo");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

//EventListener

nombre.addEventListener("input", leerTexto);
apellidos.addEventListener("input", leerTexto);
telefono.addEventListener("input", leerTexto);
correo.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

// Evento submit

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  // Validar el formulario

  const { nombre, apellidos, telefono, correo, mensaje } = datos;

  if (
    nombre === "" ||
    apellidos === "" ||
    telefono === "" ||
    correo === "" ||
    mensaje === ""
  ) {
    mostrarAlerta("Todos los campos son obligatorios", true);

    return;
  }

  //Alerta de enviar formulario correctamente
  mostrarAlerta("Mensaje enviado correctamente");

  // console.log("Enviando Formulario");
});

// Funciones

function leerTexto(e) {
  datos[e.target.id] = e.target.value;

  // console.log(datos);
}

//blablablabla
function mostrarAlerta(mensaje, error = null) {
  const alerta = document.createElement('P');
  alerta.textContent = mensaje;

  if (error) {
    alerta.classList.add('error');
  } else {
    alerta.classList.add('correcto');
  }

  formulario.appendChild(alerta);

    //Efecto desaparecer despues de 5seg
  setTimeout(() => {
    alerta.remove();
  }, 5000);

}

//Funcion de alerta cuando se envia correctamente
// function mostrarMensaje(mensaje) {

//   //Efecto des
//   setTimeout(() => {
//     alerta.remove();
//   }, 5000);
// }

// //Funcion de error en pantalla
// function mostrarError(mensaje) {

//   //Efecto desaparecer despues de 5seg
//   setTimeout(() => {
//     error.remove();
//   }, 5000);
// }

 //Validaciones de reglas de Negocio

// function validarFormatoCorreoElectronico(correo) {
//   var formato = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   return formato.test(correo);
// }

// //Uso de la función de validación
// var email = "correo@example.com";
// if (!validarFormatoCorreoElectronico(correo)) {
//   console.log("El correo electrónico no tiene un formato válido.");
// }
