const ficha = document.getElementById("ficha");
ficha.addEventListener('blur', () => {
  if (ficha.value == "") {
    ficha.style.borderColor = 'red';
  } else if (ficha.value.length < 7 || ficha.value.length > 8) {
    ficha.style.borderColor = 'red';
  } else {
    ficha.style.borderColor = 'green';
  }
});

const nombre = document.getElementById("nombre");
nombre.addEventListener('blur', () => {
  if (nombre.value == "") {
    alert("Por favor, ingrese su nombre.");
  } else if (/[0-9]/.test(nombre.value)) {
    alert("El nombre solo puede contener letras y espacios.");
  }
});

const apellidos = document.getElementById("apellidos");
apellidos.addEventListener('blur', () => {
  if (apellidos.value == "") {
    alert("Por favor, ingrese sus apellidos.");
  } else if (/[0-9]/.test(apellidos.value)) {
    alert("Los apellidos solo pueden contener letras y espacios.");
  }
});

const correo = document.getElementById("correo");
correo.addEventListener('blur', () => {
  if (correo.value == "") {
    alert("Por favor, ingrese un correo electrónico.");
  } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(correo.value)) {
    alert("Por favor, ingrese un correo electrónico válido.");
  }
});

const telefono = document.getElementById("telefono");
telefono.addEventListener('blur', () => {
  if (telefono.value == "") {
    alert("Por favor, ingrese un teléfono.");
  } else if (telefono.value.length != 10 || isNaN(telefono.value)) {
    alert("El teléfono debe tener exactamente 10 dígitos numéricos.");
  }
});

const checkboxes = document.querySelectorAll('input[type=checkbox]');
let checkedCount = 0;

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {
      checkedCount++;
    } else {
      checkedCount--;
    }

    if (checkedCount < 3) {
      alert("Por favor, seleccione al menos tres habilidades.");
    } else {
      alert("Las habilidades seleccionadas son válidas.");
    }
  });
});