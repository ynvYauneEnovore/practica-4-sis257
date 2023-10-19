document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('reservation-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Recopilar datos del formulario
        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;

        // Aquí puedes enviar los datos del formulario a un servidor para procesar la reserva.
        // Puedes utilizar fetch() u otras técnicas de comunicación.

        // Por ahora, mostraremos una alerta con los datos de la reserva.
        const reservationInfo = `Reserva realizada por: ${name}\nFecha: ${date}\nHora: ${time}\nNúmero de Invitados: ${guests}`;
        alert(reservationInfo);

        // Restablecer el formulario
        form.reset();
    });
});
