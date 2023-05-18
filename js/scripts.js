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

document.addEventListener("DOMContentLoaded", () => {
  resetearCampos();
});

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
  resetearCampos();
});

// Funciones

function leerTexto(e) {
  datos[e.target.id] = e.target.value;
}

function mostrarAlerta(mensaje, error = null) {
  const alertaExistente = formulario.querySelector(".alerta");
  if (alertaExistente) {
    // Si ya existe una alerta, se elimina
    alertaExistente.remove();
  }

  const alerta = document.createElement("p");
  alerta.textContent = mensaje;
  alerta.classList.add("alerta");

  if (error) {
    alerta.classList.add("error");
  } else {
    alerta.classList.add("correcto");
  }

  formulario.appendChild(alerta);

  // Efecto desaparecer después de 5 seg
  setTimeout(() => {
    alerta.remove();
  }, 5000);
}

function resetearCampos() {
  nombre.value = "";
  apellidos.value = "";
  telefono.value = "";
  correo.value = "";
  mensaje.value = "";

  // También reinicia los valores en el objeto datos
  datos.nombre = "";
  datos.apellidos = "";
  datos.telefono = "";
  datos.correo = "";
  datos.mensaje = "";
}


