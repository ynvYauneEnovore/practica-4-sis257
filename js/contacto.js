document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Recopilar datos del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Aquí puedes enviar los datos del formulario a un servidor para procesar el mensaje.
        // Puedes utilizar fetch() u otras técnicas de comunicación.

        // Por ahora, mostraremos una alerta con los datos del mensaje.
        const messageInfo = `Mensaje de ${name} (${email}):\n${message}`;
        alert(messageInfo);

        // Restablecer el formulario
        form.reset();
    });
});
