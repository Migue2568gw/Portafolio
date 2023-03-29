$('#ContactoForm').on('submit', function (event) {
    event.preventDefault();

    const formData = $(this).serializeArray().reduce(function (formData, item) {
        formData[item.name] = item.value;
        return formData;
    }, {});

    enviarCorreo(formData.email, formData.asunto, formData.nombre, formData.mensaje, formData.telefono);
});

function enviarCorreo(email, asunto, nombre, mensaje, telefono) {
    asunto = asunto + " por " + nombre;
    Email.send({
        SecureToken: "4b0d49b7-c8fd-403e-a315-ea846bb782da",
        To: "nakamura206-n19@hotmail.com",
        From: "jpmateusnaka@gmail.com",
        Subject: asunto,
        Body: mensaje
    }).then(
        message => {
            if (message === 'OK') {
                var mensaje = 'Correo enviado exitosamente una vez se tenga una respuesta será contactado al siguiente número ' + telefono + ' o al correo electrónico ' + email
                Swal.fire({
                    text: mensaje,
                    icon: 'success',
                    confirmButtonColor: '#424d5b',
                    confirmButtonText: 'Aceptar',
                    iconSize: '60px'
                });
                cleanCamps();
            } else {
                Swal.fire({
                    text: 'Error al enviar correo por favor inténtalo de nuevo más tarde',
                    icon: 'error',
                    confirmButtonColor: '#424d5b',
                    confirmButtonText: 'Aceptar',
                    iconSize: '60px'
                });
            }
        }
    );
}

function cleanCamps() {
    $('#email').val('');
    $('#nombre').val('');
    $('#asunto').val('');
    $('#mensaje').val('');
    $('#telefono').val('');
}