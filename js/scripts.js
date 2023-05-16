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

  if (nombre === '') {
    console.log(' El nombre esta vacio flojo');

    return;
  }

  //Enviar el formulario

  console.log("Enviado Formulario");
});

// Funciones

function leerTexto(e) {
  datos[e.target.id] = e.target.value;

  console.log(datos);
}
