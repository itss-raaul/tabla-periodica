Swal.fire({
  title: '¡Bienvenido a <b>Adivina el Elemento</b>!',
  text: 'Debes seleccionar un elemento y escribir el texto. ¿Preparado?',
  footer: 'Asegúrate de poner mayúsculas y tildes!',
  confirmButtonText: 'Entendido',
  denyButtonText: 'Cancelar',
  timer: 10000,
  timerProgressBar: true,
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

// Alumnio
document.getElementById("Al").onclick = function() {myFunction13()};
function myFunction13() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Al',
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

if (elemento === 'Aluminio') {
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
    text: "La respuesta correcta era Aluminio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Silicio
document.getElementById("Si").onclick = function() {myFunction14()};
function myFunction14() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Si',
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

if (elemento === 'Silicio') {
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
    text: "La respuesta correcta era Silicio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Fósforo
document.getElementById("P").onclick = function() {myFunction15()};
function myFunction15() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'P',
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

if (elemento === 'Fósforo') {
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
    text: "La respuesta correcta era Fósforo",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Azufre
document.getElementById("S").onclick = function() {myFunction16()};
function myFunction16() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'S',
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

if (elemento === 'Azufre') {
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
    text: "La respuesta correcta era Azufre",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Cloro
document.getElementById("Cl").onclick = function() {myFunction17()};
function myFunction17() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Cl',
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

if (elemento === 'Cloro') {
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
    text: "La respuesta correcta era Cloro",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Argón
document.getElementById("Ar").onclick = function() {myFunction18()};
function myFunction18() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Ar',
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

if (elemento === 'Argón') {
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
    text: "La respuesta correcta era Argón",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Potasio
document.getElementById("K").onclick = function() {myFunction19()};
function myFunction19() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'K',
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

if (elemento === 'Potasio') {
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
    text: "La respuesta correcta era Potasio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Calcio
document.getElementById("Ca").onclick = function() {myFunction20()};
function myFunction20() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Ca',
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

if (elemento === 'Calcio') {
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
    text: "La respuesta correcta era Calcio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Escandio
document.getElementById("Sc").onclick = function() {myFunction21()};
function myFunction21() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Sc',
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

if (elemento === 'Escandio') {
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
    text: "La respuesta correcta era Escandio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Titanio
document.getElementById("Ti").onclick = function() {myFunction22()};
function myFunction22() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Ti',
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

if (elemento === 'Titanio') {
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
    text: "La respuesta correcta era Titanio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Vanadio
document.getElementById("V").onclick = function() {myFunction23()};
function myFunction23() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'V',
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

if (elemento === 'Vanadio') {
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
    text: "La respuesta correcta era Vanadio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Cromo
document.getElementById("Cr").onclick = function() {myFunction24()};
function myFunction24() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Cr',
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

if (elemento === 'Cromo') {
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
    text: "La respuesta correcta era Cromo",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Manganeso
document.getElementById("Mn").onclick = function() {myFunction25()};
function myFunction25() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Mn',
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

if (elemento === 'Manganeso') {
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
    text: "La respuesta correcta era Manganeso",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Hierro
document.getElementById("Fe").onclick = function() {myFunction26()};
function myFunction26() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Fe',
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

if (elemento === 'Hierro') {
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
    text: "La respuesta correcta era Hierro",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Cobalto
document.getElementById("Co").onclick = function() {myFunction27()};
function myFunction27() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Co',
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

if (elemento === 'Cobalto') {
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
    text: "La respuesta correcta era Cobalto",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Níquel
document.getElementById("Ni").onclick = function() {myFunction28()};
function myFunction28() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Ni',
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

if (elemento === 'Níquel') {
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
    text: "La respuesta correcta era Níquel",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Cobre
document.getElementById("Cu").onclick = function() {myFunction29()};
function myFunction29() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Cu',
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

if (elemento === 'Cobre') {
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
    text: "La respuesta correcta era Cobre",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Cinc
document.getElementById("Zn").onclick = function() {myFunction30()};
function myFunction30() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Zn',
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

if (elemento === 'Cinc') {
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
    text: "La respuesta correcta era Cinc",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Galio
document.getElementById("Ga").onclick = function() {myFunction31()};
function myFunction31() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Ga',
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

if (elemento === 'Galio') {
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
    text: "La respuesta correcta era Galio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Germanio
document.getElementById("Ge").onclick = function() {myFunction32()};
function myFunction32() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Ge',
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

if (elemento === 'Germanio') {
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
    text: "La respuesta correcta era Germanio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Arsénico
document.getElementById("As").onclick = function() {myFunction33()};
function myFunction33() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'As',
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

if (elemento === 'Arsénico') {
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
    text: "La respuesta correcta era Arsénico",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Selenio
document.getElementById("Se").onclick = function() {myFunction34()};
function myFunction34() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Se',
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

if (elemento === 'Selenio') {
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
    text: "La respuesta correcta era Selenio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Bromo
document.getElementById("Br").onclick = function() {myFunction35()};
function myFunction35() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Br',
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

if (elemento === 'Bromo') {
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
    text: "La respuesta correcta era Bromo",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Kriptón
document.getElementById("Kr").onclick = function() {myFunction36()};
function myFunction36() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Kr',
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

if (elemento === 'Kriptón') {
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
    text: "La respuesta correcta era Kriptón",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Rubidio
document.getElementById("Rb").onclick = function() {myFunction37()};
function myFunction37() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Rb',
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

if (elemento === 'Rubidio') {
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
    text: "La respuesta correcta era Rubidio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Estroncio
document.getElementById("Sr").onclick = function() {myFunction38()};
function myFunction38() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Sr',
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

if (elemento === 'Estroncio') {
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
    text: "La respuesta correcta era Estroncio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Itrio
document.getElementById("Y").onclick = function() {myFunction39()};
function myFunction39() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Y',
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

if (elemento === 'Itrio') {
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
    text: "La respuesta correcta era Itrio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Circonio
document.getElementById("Zr").onclick = function() {myFunction40()};
function myFunction40() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Zr',
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

if (elemento === 'Circonio') {
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
    text: "La respuesta correcta era Circonio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Niobio
document.getElementById("Nb").onclick = function() {myFunction41()};
function myFunction41() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Nb',
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

if (elemento === 'Niobio') {
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
    text: "La respuesta correcta era Niobio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Molibdeno
document.getElementById("Mo").onclick = function() {myFunction42()};
function myFunction42() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Mo',
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

if (elemento === 'Molibdeno') {
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
    text: "La respuesta correcta era Molibdeno",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Tecnecio
document.getElementById("Tc").onclick = function() {myFunction43()};
function myFunction43() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Tc',
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

if (elemento === 'Tecnecio') {
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
    text: "La respuesta correcta era Tecnecio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Rutenio
document.getElementById("Ru").onclick = function() {myFunction44()};
function myFunction44() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Ru',
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

if (elemento === 'Rutenio') {
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
    text: "La respuesta correcta era Rutenio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Rodio
document.getElementById("Rh").onclick = function() {myFunction45()};
function myFunction45() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Rh',
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

if (elemento === 'Rodio') {
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
    text: "La respuesta correcta era Rodio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Paladio
document.getElementById("Pd").onclick = function() {myFunction46()};
function myFunction46() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Pd',
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

if (elemento === 'Paladio') {
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
    text: "La respuesta correcta era Paladio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Plata
document.getElementById("Ag").onclick = function() {myFunction47()};
function myFunction47() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Ag',
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

if (elemento === 'Plata') {
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
    text: "La respuesta correcta era Plata",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Cadmio
document.getElementById("Cd").onclick = function() {myFunction48()};
function myFunction48() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Cd',
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

if (elemento === 'Cadmio') {
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
    text: "La respuesta correcta era Cadmio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Indio
document.getElementById("In").onclick = function() {myFunction49()};
function myFunction49() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'In',
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

if (elemento === 'Indio') {
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
    text: "La respuesta correcta era Indio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Estaño
document.getElementById("Sn").onclick = function() {myFunction50()};
function myFunction50() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Sn',
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

if (elemento === 'Estaño') {
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
    text: "La respuesta correcta era Estaño",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Antimonio
document.getElementById("Sb").onclick = function() {myFunction51()};
function myFunction51() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Sb',
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

if (elemento === 'Antimonio') {
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
    text: "La respuesta correcta era Antimonio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Teluro
document.getElementById("Te").onclick = function() {myFunction52()};
function myFunction52() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Te',
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

if (elemento === 'Teluro') {
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
    text: "La respuesta correcta era Teluro",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Yodo
document.getElementById("I").onclick = function() {myFunction53()};
function myFunction53() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'I',
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

if (elemento === 'Yodo') {
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
    text: "La respuesta correcta era Yodo",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Xenón
document.getElementById("Xe").onclick = function() {myFunction54()};
function myFunction54() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Xe',
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

if (elemento === 'Xenón') {
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
    text: "La respuesta correcta era Xenón",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }
