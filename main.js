const ficha = document.getElementById("ficha");
// ficha.addEventListener('blur', () => {
//   if (ficha.value == "") {
//     ficha.style.borderColor = 'red';
//   } else if (ficha.value.length < 7 || ficha.value.length > 8) {
//     ficha.style.borderColor = 'red';
//   } else {
//     ficha.style.borderColor = 'green';
//   }
// });

// const nombre = document.getElementById("nombre");
// nombre.addEventListener('blur', () => {
//   if (nombre.value == "") {
//     nombre.style.borderColor = 'red';
//   } else if (/[a-zA-Z]/.test(nombre.value)) {
//     nombre.style.borderColor = 'green';
//     alert("True")
//   } else {
//     nombre.style.borderColor = 'red';
//   }
// });

// const apellidos = document.getElementById("apellidos");
// apellidos.addEventListener('blur', () => {
//   if (apellidos.value == "") {
//     apellidos.style.borderColor = 'red';
//   } else if (/[0-9]/.test(apellidos.value)) {
//     apellidos.style.borderColor = 'red';
//   } else {
//     apellidos.style.borderColor = 'green';
//   }
// });

// const telefono = document.getElementById("telefono");
// telefono.addEventListener('blur', () => {
//   if (telefono.value == "") {
//     telefono.style.borderColor = 'red';
//   } else if (telefono.value.length != 10 || isNaN(telefono.value)) {
//     telefono.style.borderColor = 'red';
//   } else {
//     telefono.style.borderColor = 'green';
//   }
// });

const validar = function () {

  let campo = ficha.value
  let soloLetras = /^[a-zA-Z]{3}$/
  let letrasYGuionBajo = /^[a-zA-Z]{3}\_$/
  let regex = /^[a-zA-Z]{3}\_[0-9]{7}$/

  if (!regex.test(campo)) {
    ficha.style.borderColor = "red"
    alert("No válido.");
  } else {
    ficha.style.borderColor = "green"
  }

  console.log(regex.test(campo))
}

ficha.addEventListener('blur', () => {
  validar()
});

// validando con operador ternario

let regex = /^[a-zA-Z]{3}\_[0-9]{7}$/

operadorTernario = ficha.value == regex ? "Válido" : "No válido";

console.log(operadorTernario);