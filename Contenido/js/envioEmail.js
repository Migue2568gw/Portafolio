const form = document.getElementById('ContactoForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email');
    const nombre = document.getElementById('nombre');
    const asunto = document.getElementById('asunto');
    const mensaje = document.getElementById('mensaje');

    enviarCorreo(email.value, asunto.value, nombre.value, mensaje.value);
});

function enviarCorreo(email, asunto ,nombre, mensaje) {
    asunto = asunto + " por " + nombre;
    Email.send({
        SecureToken : "6cfb7cb6-2771-422e-9340-45cb6bb3f5c5",
        To : 'nakamura206-n19@hotmail.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}