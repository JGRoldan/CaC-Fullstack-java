document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.register-form');
    const emailInput = document.getElementById('exampleInputEmail1');
    const passwordInput = document.getElementById('exampleInputPassword1');
    const submitButton = form.querySelector('button[type="submit"]');

    function validateForm() {
        if (emailInput.value && passwordInput.value) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    // Inicializa el botón como deshabilitado
    submitButton.disabled = true;

    // Agrega eventos de entrada para validar el formulario en tiempo real
    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (emailInput.value && passwordInput.value) {
            window.location.href = 'bienvenido.html';
        }
    });
});
