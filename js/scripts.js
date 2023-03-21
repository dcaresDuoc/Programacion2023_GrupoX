const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío del formulario

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Aquí puedes agregar la lógica para procesar los datos del formulario
  // Por ejemplo, enviar un correo electrónico con los datos

  console.log(`Nombre: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Mensaje: ${message}`);

  form.reset(); // Limpia los campos del formulario después del envío
});
