Swal.fire({
  title: '¡Bienvenido a <b>Adivina el Elemento</b>!',
  text: 'Debes seleccionar un elemento y escribir el texto. ¿Preparado?',
  footer: 'Asegúrate de poner mayúsculas y tildes!',
  confirmButtonText: 'Entendido',
  denyButtonText: 'Cancelar',
})

// Hidrógeno
document.getElementById("H").onclick = function() {myFunction1()};
function myFunction1() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'H',
  text: '¿Cuál es el nombre de este elemento?',
  input: 'text',
  inputPlaceholder: 'Nombre',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return 'You need to write something!'
    }
  }
})

if (elemento === 'Hidrógeno') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  })
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Hidrógeno!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Helio
document.getElementById("He").onclick = function() {myFunction2()};
function myFunction2() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'He',
  text: '¿Cuál es el nombre de este elemento?',
  input: 'text',
  inputPlaceholder: 'Nombre',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return 'You need to write something!'
    }
  }
})

if (elemento === 'Helio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  })
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Helio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Litio
document.getElementById("Li").onclick = function() {myFunction3()};
function myFunction3() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Li',
  text: '¿Cuál es el nombre de este elemento?',
  input: 'text',
  inputPlaceholder: 'Nombre',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return 'You need to write something!'
    }
  }
})

if (elemento === 'Litio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  })
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Litio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Berilio
document.getElementById("Be").onclick = function() {myFunction4()};
function myFunction4() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Be',
  text: '¿Cuál es el nombre de este elemento?',
  input: 'text',
  inputPlaceholder: 'Nombre',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return 'You need to write something!'
    }
  }
})

if (elemento === 'Berilio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  })
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Berilio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Boro
document.getElementById("B").onclick = function() {myFunction5()};
function myFunction5() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'B',
  text: '¿Cuál es el nombre de este elemento?',
  input: 'text',
  inputPlaceholder: 'Nombre',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return 'You need to write something!'
    }
  }
})

if (elemento === 'Boro') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  })
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Boro",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Carbono
document.getElementById("C").onclick = function() {myFunction6()};
function myFunction6() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'C',
  text: '¿Cuál es el nombre de este elemento?',
  input: 'text',
  inputPlaceholder: 'Nombre',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return 'You need to write something!'
    }
  }
})

if (elemento === 'Carbono') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  })
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Carbono",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Nitrógeno
document.getElementById("N").onclick = function() {myFunction7()};
function myFunction7() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'N',
  text: '¿Cuál es el nombre de este elemento?',
  input: 'text',
  inputPlaceholder: 'Nombre',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return 'You need to write something!'
    }
  }
})

if (elemento === 'Nitrógeno') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  })
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Nitrógeno",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Oxígeno
document.getElementById("O").onclick = function() {myFunction8()};
function myFunction8() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'O',
  text: '¿Cuál es el nombre de este elemento?',
  input: 'text',
  inputPlaceholder: 'Nombre',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return 'You need to write something!'
    }
  }
})

if (elemento === 'Oxígeno') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  })
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Oxígeno",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Flúor
document.getElementById("F").onclick = function() {myFunction9()};
function myFunction9() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'F',
  text: '¿Cuál es el nombre de este elemento?',
  input: 'text',
  inputPlaceholder: 'Nombre',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return 'You need to write something!'
    }
  }
})

if (elemento === 'Flúor') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  })
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Flúor",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Neón
document.getElementById("Ne").onclick = function() {myFunction10()};
function myFunction10() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Ne',
  text: '¿Cuál es el nombre de este elemento?',
  input: 'text',
  inputPlaceholder: 'Nombre',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return 'You need to write something!'
    }
  }
})

if (elemento === 'Neón') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  })
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Neón",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Sodio
document.getElementById("Na").onclick = function() {myFunction11()};
function myFunction11() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Na',
  text: '¿Cuál es el nombre de este elemento?',
  input: 'text',
  inputPlaceholder: 'Nombre',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return 'You need to write something!'
    }
  }
})

if (elemento === 'Sodio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  })
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Sodio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Magnesio
document.getElementById("Mg").onclick = function() {myFunction12()};
function myFunction12() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Mg',
  text: '¿Cuál es el nombre de este elemento?',
  input: 'text',
  inputPlaceholder: 'Nombre',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return 'You need to write something!'
    }
  }
})

if (elemento === 'Magnesio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  })
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Magnesio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }
