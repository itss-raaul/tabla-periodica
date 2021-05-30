Swal.fire({
  title: '¡Bienvenido a <b>Adivina el Elemento</b>!',
  text: 'Debes seleccionar un elemento y escribir el texto. ¿Preparado?',
  footer: 'Asegúrate de poner mayúsculas y tildes!'
  confirmButtonText: 'Entendido',
  denyButtonText: 'Cancelar',
})

// Hidrógeno
document.getElementById("H").onclick = function() {myFunction001()};
function myFunction001() {
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
document.getElementById("He").onclick = function() {myFunction002()};
function myFunction002() {
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
document.getElementById("Li").onclick = function() {myFunction003()};
function myFunction003() {
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
document.getElementById("Be").onclick = function() {myFunction004()};
function myFunction004() {
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
document.getElementById("B").onclick = function() {myFunction005()};
function myFunction005() {
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
document.getElementById("C").onclick = function() {myFunction006()};
function myFunction006() {
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
document.getElementById("N").onclick = function() {myFunction007()};
function myFunction007() {
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
document.getElementById("O").onclick = function() {myFunction008()};
function myFunction008() {
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
document.getElementById("F").onclick = function() {myFunction009()};
function myFunction009() {
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
document.getElementById("Ne").onclick = function() {myFunction010()};
function myFunction010() {
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
document.getElementById("Na").onclick = function() {myFunction011()};
function myFunction011() {
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
document.getElementById("Mg").onclick = function() {myFunction012()};
function myFunction012() {
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
document.getElementById("Al").onclick = function() {myFunction013()};
function myFunction013() {
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

if (elemento === 'Alumnio') {
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
    text: "La respuesta correcta era Alumnio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Silicio
document.getElementById("Si").onclick = function() {myFunction014()};
function myFunction014() {
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
document.getElementById("P").onclick = function() {myFunction015()};
function myFunction015() {
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
document.getElementById("S").onclick = function() {myFunction016()};
function myFunction016() {
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
document.getElementById("Cl").onclick = function() {myFunction017()};
function myFunction017() {
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
document.getElementById("Ar").onclick = function() {myFunction018()};
function myFunction018() {
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