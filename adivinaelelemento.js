Swal.fire({
  title: '¡Bienvenido a <b>Adivina el Elemento</b>!',
  text: 'Debes seleccionar un elemento y escribir el texto. ¿Preparado?',
  footer: 'Asegúrate de poner mayúsculas y tildes! <br> Recomendamos utilizar la pantalla completa para una mejor experiencia.',
  confirmButtonText: 'Adelante',
  timer: 10000,
  timerProgressBar: true,
}).then(function () {
  const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 7000,
  timerProgressBar: true,
})

Toast.fire({
  icon: 'warning',
  title: 'Estás en la versión beta'
})

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
      return '¡Debes escribir algo!'
    }
  }
})

if (elemento === 'Hidrógeno') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("H").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("He").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Li").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Be").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("B").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("C").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("N").style.border="3px #77dd77 solid";
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
  document.getElementById("O").style.border="3px #77dd77 solid";
}
    
else if (elemento != 'Oxígeno') {
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
  document.getElementById("F").style.border="3px #77dd77 solid";
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
  document.getElementById("Ne").style.border="3px #77dd77 solid";
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
  document.getElementById("Na").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Mg").style.border="3px #77dd77 solid";
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
  document.getElementById("Al").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Si").style.border="3px #77dd77 solid";
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
  document.getElementById("P").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("S").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Cl").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Ar").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("K").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Ca").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Sc").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Ti").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("V").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Cr").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Mn").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Fe").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Co").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Ni").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Cu").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Zn").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Ga").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Ge").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("As").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Se").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Br").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Kr").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Rb").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Sr").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Y").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Zr").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Nb").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Mo").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Tc").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Ru").style.border="3px #77dd77 solid";
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
  document.getElementById("Rh").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Pd").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Ag").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Cd").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("In").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Sn").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Sb").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Te").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("I").style.border="3px #77dd77 solid";
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
  });
  document.getElementById("Xe").style.border="3px #77dd77 solid";
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

// Cesio
document.getElementById("Cs").onclick = function() {myFunction55()};
function myFunction55() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Cs',
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

if (elemento === 'Cesio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Cs").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Cesio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Bario
document.getElementById("Ba").onclick = function() {myFunction56()};
function myFunction56() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Ba',
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

if (elemento === 'Bario') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Ba").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Bario",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Lantano
document.getElementById("La").onclick = function() {myFunction57()};
function myFunction57() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'La',
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

if (elemento === 'Lantano') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("La").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Lantano",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Cerio
document.getElementById("Ce").onclick = function() {myFunction58()};
function myFunction58() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Ce',
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

if (elemento === 'Cerio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Ce").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Cerio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Praseodimio
document.getElementById("Pr").onclick = function() {myFunction59()};
function myFunction59() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Pr',
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

if (elemento === 'Praseodimio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Pr").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Praseodimio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Neodimio
document.getElementById("Nd").onclick = function() {myFunction60()};
function myFunction60() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Nd',
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

if (elemento === 'Neodimio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Nd").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Neodimio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Prometio
document.getElementById("Pm").onclick = function() {myFunction61()};
function myFunction61() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Pm',
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

if (elemento === 'Prometio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Pm").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Prometio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Samario
document.getElementById("Sm").onclick = function() {myFunction62()};
function myFunction62() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Sm',
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

if (elemento === 'Samario') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Sm").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Samario",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Europio
document.getElementById("Eu").onclick = function() {myFunction63()};
function myFunction63() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Eu',
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

if (elemento === 'Europio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Eu").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Europio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Gadolinio
document.getElementById("Gd").onclick = function() {myFunction64()};
function myFunction64() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Gd',
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

if (elemento === 'Gadolinio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Gd").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Gadolinio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Terbio
document.getElementById("Tb").onclick = function() {myFunction65()};
function myFunction65() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Tb',
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

if (elemento === 'Terbio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Tb").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Terbio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Disprosio
document.getElementById("Dy").onclick = function() {myFunction66()};
function myFunction66() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Dy',
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

if (elemento === 'Disprosio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Dy").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Disprosio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Holmio
document.getElementById("Ho").onclick = function() {myFunction67()};
function myFunction67() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Ho',
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

if (elemento === 'Holmio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Ho").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Holmio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Erbio
document.getElementById("Er").onclick = function() {myFunction68()};
function myFunction68() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Er',
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

if (elemento === 'Erbio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Er").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Erbio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Tulio
document.getElementById("Tm").onclick = function() {myFunction69()};
function myFunction69() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Tm',
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

if (elemento === 'Tulio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Tm").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Tulio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Iterbio
document.getElementById("Yb").onclick = function() {myFunction70()};
function myFunction70() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Yb',
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

if (elemento === 'Iterbio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Yb").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Iterbio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Lutecio
document.getElementById("Lu").onclick = function() {myFunction71()};
function myFunction71() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Lu',
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

if (elemento === 'Lutecio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Lu").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Lutecio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Hafnio
document.getElementById("Hf").onclick = function() {myFunction72()};
function myFunction72() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Hf',
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

if (elemento === 'Hafnio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Hf").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Hafnio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Tantalio
document.getElementById("Ta").onclick = function() {myFunction73()};
function myFunction73() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Ta',
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

if (elemento === 'Tantalio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Ta").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Tantalio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Wolframio
document.getElementById("W").onclick = function() {myFunction74()};
function myFunction74() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'W',
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

if (elemento === 'Wolframio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("W").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Wolframio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Renio
document.getElementById("Re").onclick = function() {myFunction75()};
function myFunction75() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Re',
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

if (elemento === 'Renio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Re").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Renio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Osmio
document.getElementById("Os").onclick = function() {myFunction76()};
function myFunction76() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Os',
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

if (elemento === 'Osmio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Os").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Osmio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Iridio
document.getElementById("Ir").onclick = function() {myFunction77()};
function myFunction77() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Ir',
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

if (elemento === 'Iridio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Ir").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Iridio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Platino
document.getElementById("Pt").onclick = function() {myFunction78()};
function myFunction78() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Pt',
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

if (elemento === 'Platino') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Pt").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Platino",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Oro
document.getElementById("Au").onclick = function() {myFunction79()};
function myFunction79() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Au',
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

if (elemento === 'Oro') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Au").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Oro",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Mercurio
document.getElementById("Hg").onclick = function() {myFunction80()};
function myFunction80() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Hg',
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

if (elemento === 'Mercurio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Hg").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Mercurio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Talio
document.getElementById("Tl").onclick = function() {myFunction81()};
function myFunction81() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Tl',
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

if (elemento === 'Talio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Tl").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Talio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Plomo
document.getElementById("Pb").onclick = function() {myFunction82()};
function myFunction82() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Pb',
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

if (elemento === 'Plomo') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Pb").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Plomo",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Bismuto
document.getElementById("Bi").onclick = function() {myFunction83()};
function myFunction83() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Bi',
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

if (elemento === 'Bismuto') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Bi").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Bismuto",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Polonio
document.getElementById("Po").onclick = function() {myFunction84()};
function myFunction84() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Po',
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

if (elemento === 'Polonio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Po").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Polonio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Astato
document.getElementById("At").onclick = function() {myFunction85()};
function myFunction85() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'At',
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

if (elemento === 'Astato') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("At").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Astato",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Radón
document.getElementById("Rn").onclick = function() {myFunction86()};
function myFunction86() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Rn',
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

if (elemento === 'Radón') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Rn").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Radón",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Francio
document.getElementById("Fr").onclick = function() {myFunction87()};
function myFunction87() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Fr',
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

if (elemento === 'Francio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Fr").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Francio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Radio
document.getElementById("Ra").onclick = function() {myFunction88()};
function myFunction88() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Ra',
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

if (elemento === 'Radio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Ra").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Radio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Actinio
document.getElementById("Ac").onclick = function() {myFunction89()};
function myFunction89() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Ac',
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

if (elemento === 'Actinio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Ac").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Actinio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Torio
document.getElementById("Th").onclick = function() {myFunction90()};
function myFunction90() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Th',
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

if (elemento === 'Torio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Th").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Torio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Protactinio
document.getElementById("Pa").onclick = function() {myFunction91()};
function myFunction91() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Pa',
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

if (elemento === 'Protactinio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Pa").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Protactinio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Uranio
document.getElementById("U").onclick = function() {myFunction92()};
function myFunction92() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'U',
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

if (elemento === 'Uranio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("U").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Uranio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }
  
// Neptunio
document.getElementById("Np").onclick = function() {myFunction93()};
function myFunction93() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Np',
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

if (elemento === 'Neptunio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Np").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Neptunio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Plutonio
document.getElementById("Pu").onclick = function() {myFunction94()};
function myFunction94() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Pu',
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

if (elemento === 'Plutonio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Pu").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Plutonio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Americio
document.getElementById("Am").onclick = function() {myFunction95()};
function myFunction95() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Am',
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

if (elemento === 'Americio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Am").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Americio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Curio
document.getElementById("Cm").onclick = function() {myFunction96()};
function myFunction96() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Cm',
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

if (elemento === 'Curio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Cm").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Curio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Berkelio
document.getElementById("Bk").onclick = function() {myFunction97()};
function myFunction97() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Bk',
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

if (elemento === 'Berkelio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Bk").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Berkelio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Californio
document.getElementById("Cf").onclick = function() {myFunction98()};
function myFunction98() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Cf',
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

if (elemento === 'Californio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Cf").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Californio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Einstenio
document.getElementById("Es").onclick = function() {myFunction99()};
function myFunction99() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Es',
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

if (elemento === 'Einstenio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Es").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Einstenio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Fermio
document.getElementById("Fm").onclick = function() {myFunction100()};
function myFunction100() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Fm',
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

if (elemento === 'Fermio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  })
  document.getElementById("Fm").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Fermio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Mendelevio
document.getElementById("Md").onclick = function() {myFunction101()};
function myFunction101() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Md',
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

if (elemento === 'Mendelevio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Md").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Mendelevio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Nobelio
document.getElementById("No").onclick = function() {myFunction102()};
function myFunction102() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'No',
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

if (elemento === 'Nobelio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("No").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Nobelio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Lawrencio
document.getElementById("Lr").onclick = function() {myFunction103()};
function myFunction103() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Lr',
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

if (elemento === 'Lawrencio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Lr").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Lawrencio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Rutherfordio
document.getElementById("Rf").onclick = function() {myFunction104()};
function myFunction104() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Rf',
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

if (elemento === 'Rutherfordio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Rf").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Rutherfordio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Dubnio
document.getElementById("Db").onclick = function() {myFunction105()};
function myFunction105() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Db',
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

if (elemento === 'Dubnio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Db").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Dubnio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Seaborgio
document.getElementById("Sg").onclick = function() {myFunction106()};
function myFunction106() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Sg',
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

if (elemento === 'Seaborgio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Sg").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Seaborgio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Bohrio
document.getElementById("Bh").onclick = function() {myFunction107()};
function myFunction107() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Bh',
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

if (elemento === 'Bohrio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Bh").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Bohrio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Hassio
document.getElementById("Hs").onclick = function() {myFunction108()};
function myFunction108() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Hs',
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

if (elemento === 'Hassio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Hs").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Hassio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Meitnerio
document.getElementById("Mt").onclick = function() {myFunction109()};
function myFunction109() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Mt',
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

if (elemento === 'Meitnerio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Mt").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Meitnerio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Darmstadtio
document.getElementById("Ds").onclick = function() {myFunction110()};
function myFunction110() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Ds',
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

if (elemento === 'Darmstadtio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Ds").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Darmstadtio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Roentgenio
document.getElementById("Rg").onclick = function() {myFunction111()};
function myFunction111() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Rg',
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

if (elemento === 'Roentgenio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Rg").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Roentgenio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Copernicio
document.getElementById("Cn").onclick = function() {myFunction112()};
function myFunction112() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Cn',
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

if (elemento === 'Copernicio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Cn").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Copernicio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Nihonio
document.getElementById("Nh").onclick = function() {myFunction113()};
function myFunction113() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Nh',
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

if (elemento === 'Nihonio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Nh").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Nihonio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Flerovio
document.getElementById("Fl").onclick = function() {myFunction114()};
function myFunction114() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Fl',
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

if (elemento === 'Flerovio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Fl").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Flerovio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Moscovio
document.getElementById("Mc").onclick = function() {myFunction115()};
function myFunction115() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Mc',
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

if (elemento === 'Moscovio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  })
  document.getElementById("Mc").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Moscovio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Livermorio
document.getElementById("Lv").onclick = function() {myFunction116()};
function myFunction116() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Lv',
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

if (elemento === 'Livermorio') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Lv").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Livermorio",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Tennesso
document.getElementById("Ts").onclick = function() {myFunction117()};
function myFunction117() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Ts',
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

if (elemento === 'Tennesso') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Ts").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Tennesso",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }

// Oganessón
document.getElementById("Og").onclick = function() {myFunction118()};
function myFunction118() {
  (async () => {

const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: elemento } = await Swal.fire({
  title: 'Og',
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

if (elemento === 'Oganessón') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Og").style.border="3px #77dd77 solid";
}
    
else {
  Swal.fire({
    title: 'Incorrecto...',
    text: "La respuesta correcta era Oganessón",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  })
}

})(); }
