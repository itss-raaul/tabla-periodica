Swal.fire({
  title: '¡Bienvenido a <b>Completa</b>!',
  text: 'En esta versión más avanzada, deberás incluir el nombre del elemento y su masa atómica (incluyendo su símbolo). ¿Preparado?',
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'H' && elemento === 'Hidrógeno' && regla === 'cede 1 electrón' && familia === 'Halógenos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("H").style.border="3px #77dd77 solid";
  document.getElementById("H").innerHTML = "H¹";
  document.getElementById("H").title = "Hidrógeno";
  document.getElementById("H").style.backgroundColor = "#ffffff";
  document.getElementById("H").style.color = "#c81d11";
  document.getElementById("H").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("H").style.border="3px #de1738 solid";
  document.getElementById("H").innerHTML = " ";
  document.getElementById("H").title = " ";
  document.getElementById("H").style.backgroundColor = "#ECECEC";
  document.getElementById("H").style.pointerEvents = 'auto'; 

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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'He' && elemento === 'Helio' && regla === '' && familia === 'gases nobles') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("He").style.border="3px #77dd77 solid";
  document.getElementById("He").innerHTML = "He⁴";
  document.getElementById("He").title = "Helio";
  document.getElementById("He").style.backgroundColor = "#ffd1f5";
  document.getElementById("He").style.color = "#c81d11";
  document.getElementById("He").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("He").style.border="3px #de1738 solid";
  document.getElementById("He").innerHTML = " ";
  document.getElementById("He").title = " ";
  document.getElementById("He").style.backgroundColor = "#ECECEC";
  document.getElementById("He").style.pointerEvents = 'auto'; 

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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'Li' && elemento === 'Litio' && regla === 'cede 1 electrón' && familia === 'alcalinos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Li").style.border="3px #77dd77 solid";
  document.getElementById("Li").innerHTML = "Li⁷";
  document.getElementById("Li").title = "Litio";
  document.getElementById("Li").style.backgroundColor = "#ffddb3";
  document.getElementById("Li").style.pointerEvents = 'none';

}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("Li").style.border="3px #de1738 solid";
  document.getElementById("Li").innerHTML = " ";
  document.getElementById("Li").title = " ";
  document.getElementById("Li").style.backgroundColor = "#ECECEC";
  document.getElementById("Li").style.pointerEvents = 'auto'; 

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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'Be' && elemento === 'Berilio' && regla === 'cede 2 electrones' && familia === 'alcalinos térreos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Be").style.border="3px #77dd77 solid";
  document.getElementById("Be").innerHTML = "Be⁹";
  document.getElementById("Be").title = "Berilio";
  document.getElementById("Be").style.backgroundColor = "#ffddb3";
  document.getElementById("Be").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("Be").style.border="3px #de1738 solid";
  document.getElementById("Be").innerHTML = " ";
  document.getElementById("Be").title = " ";
  document.getElementById("Be").style.backgroundColor = "#ECECEC";
  document.getElementById("Be").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'B' && elemento === 'Boro' && regla === 'cede 3 electrones' && familia === 'boroideos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("B").style.border="3px #77dd77 solid";
  document.getElementById("B").innerHTML = "B¹¹";
  document.getElementById("B").title = "Boro";
  document.getElementById("B").style.backgroundColor = "#cc9966";
  document.getElementById("B").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("B").style.border="3px #de1738 solid";
  document.getElementById("B").innerHTML = " ";
  document.getElementById("B").title = " ";
  document.getElementById("B").style.backgroundColor = "#ECECEC";
  document.getElementById("B").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'C' && elemento === 'Carbono' && regla === 'cede o capta 4 electrones' && familia === 'carbonoideos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("C").style.border="3px #77dd77 solid";
  document.getElementById("C").innerHTML = "C¹²";
  document.getElementById("C").title = "Carbono";
  document.getElementById("C").style.backgroundColor = "#bdecb6";
  document.getElementById("C").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("C").style.border="3px #de1738 solid";
  document.getElementById("C").innerHTML = " ";
  document.getElementById("C").title = " ";
  document.getElementById("C").style.backgroundColor = "#ECECEC";
  document.getElementById("C").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'N' && elemento === 'Nitrógeno' && regla === 'capta 3 electrones' && familia === 'nitrogenoideos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("N").style.border="3px #77dd77 solid";
  document.getElementById("N").innerHTML = "N¹⁴";
  document.getElementById("N").title = "Nitrógeno";
  document.getElementById("N").style.backgroundColor = "#bdecb6";
  document.getElementById("N").style.color = "#c81d11";
  document.getElementById("N").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("N").style.border="3px #de1738 solid";
  document.getElementById("N").innerHTML = " ";
  document.getElementById("N").title = " ";
  document.getElementById("N").style.backgroundColor = "#ECECEC";
  document.getElementById("N").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'O' && elemento === 'Oxígeno' && regla === 'capta 2 electrones' && familia === 'anfígenos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("O").style.border="3px #77dd77 solid";
  document.getElementById("O").innerHTML = "O¹⁶";
  document.getElementById("O").title = "Oxígeno";
  document.getElementById("O").style.backgroundColor = "#bdecb6";
  document.getElementById("O").style.color = "#c81d11";
  document.getElementById("O").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("O").style.border="3px #de1738 solid";
  document.getElementById("O").innerHTML = " ";
  document.getElementById("O").title = " ";
  document.getElementById("O").style.backgroundColor = "#ECECEC";
  document.getElementById("O").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'F' && elemento === 'Flúor' && regla === 'capta 1 electrón' && familia === 'halógenos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("F").style.border="3px #77dd77 solid";
  document.getElementById("F").innerHTML = "F¹⁹";
  document.getElementById("F").title = "Flúor";
  document.getElementById("F").style.backgroundColor = "#bdecb6";
  document.getElementById("F").style.color = "#c81d11";
  document.getElementById("F").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("F").style.border="3px #de1738 solid";
  document.getElementById("F").innerHTML = " ";
  document.getElementById("F").title = " ";
  document.getElementById("F").style.backgroundColor = "#ECECEC";
  document.getElementById("F").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'Ne' && elemento === 'Neón' && regla === '' && familia === '20') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Ne").style.border="3px #77dd77 solid";
  document.getElementById("Ne").innerHTML = "N²⁰";
  document.getElementById("Ne").title = "Neón";
  document.getElementById("Ne").style.backgroundColor = "#ffd1f5";
  document.getElementById("Ne").style.color = "#c81d11";
  document.getElementById("Ne").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("Ne").style.border="3px #de1738 solid";
  document.getElementById("Ne").innerHTML = " ";
  document.getElementById("Ne").title = " ";
  document.getElementById("Ne").style.backgroundColor = "#ECECEC";
  document.getElementById("Ne").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'Na' && elemento === 'Sodio' && regla === '' && familia === 'alcalinos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Na").style.border="3px #77dd77 solid";
  document.getElementById("Na").innerHTML = "Na²³";
  document.getElementById("Na").title = "Sodio";
  document.getElementById("Na").style.backgroundColor = "#ffddb3";
  document.getElementById("Na").style.color = "#000000";
  document.getElementById("Na").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("Na").style.border="3px #de1738 solid";
  document.getElementById("Na").innerHTML = " ";
  document.getElementById("Na").title = " ";
  document.getElementById("Na").style.backgroundColor = "#ECECEC";
  document.getElementById("Na").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'Mg' && elemento === 'Magnesio' && regla === 'cede 2 electrones' && familia === 'alcalinos térreos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Mg").style.border="3px #77dd77 solid";
  document.getElementById("Mg").innerHTML = "Mg²⁴";
  document.getElementById("Mg").title = "Magnesio";
  document.getElementById("Mg").style.backgroundColor = "#ffddb3";
  document.getElementById("Mg").style.color = "#000000";
  document.getElementById("Mg").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("Mg").style.border="3px #de1738 solid";
  document.getElementById("Mg").innerHTML = " ";
  document.getElementById("Mg").title = " ";
  document.getElementById("Mg").style.backgroundColor = "#ECECEC";
  document.getElementById("Mg").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'Al' && elemento === 'Aluminio' && regla === 'cede 3 electrones' && familia === 'boroideos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Al").style.border="3px #77dd77 solid";
  document.getElementById("Al").innerHTML = "Al²⁷";
  document.getElementById("Al").title = "Aluminio";
  document.getElementById("Al").style.backgroundColor = "#ffddb3";
  document.getElementById("Al").style.color = "#000000";
  document.getElementById("Al").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("Al").style.border="3px #de1738 solid";
  document.getElementById("Al").innerHTML = " ";
  document.getElementById("Al").title = " ";
  document.getElementById("Al").style.backgroundColor = "#ECECEC";
  document.getElementById("Al").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'Si' && elemento === 'Silicio' && regla === 'cede o capta 4 electrones' && familia === 'carbonoideos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Si").style.border="3px #77dd77 solid";
  document.getElementById("Si").innerHTML = "Si²⁸";
  document.getElementById("Si").title = "Silicio";
  document.getElementById("Si").style.backgroundColor = "#cc9966";
  document.getElementById("Si").style.color = "#000000";
  document.getElementById("Si").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("Si").style.border="3px #de1738 solid";
  document.getElementById("Si").innerHTML = " ";
  document.getElementById("Si").title = " ";
  document.getElementById("Si").style.backgroundColor = "#ECECEC";
  document.getElementById("Si").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'P' && elemento === 'Fósforo' && regla === 'capta 3 electrones' && familia === 'nitrogenoideos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("P").style.border="3px #77dd77 solid";
  document.getElementById("P").innerHTML = "P³¹";
  document.getElementById("P").title = "Fósforo";
  document.getElementById("P").style.backgroundColor = "#bdecb6";
  document.getElementById("P").style.color = "#000000";
  document.getElementById("P").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("P").style.border="3px #de1738 solid";
  document.getElementById("P").innerHTML = " ";
  document.getElementById("P").title = " ";
  document.getElementById("P").style.backgroundColor = "#ECECEC";
  document.getElementById("P").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'S' && elemento === 'Azufre' && regla === 'capta 2 electrones' && familia === 'anfígenos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("S").style.border="3px #77dd77 solid";
  document.getElementById("S").innerHTML = "S³²";
  document.getElementById("S").title = "Azufre";
  document.getElementById("S").style.backgroundColor = "#bdecb6";
  document.getElementById("S").style.color = "#000000";
  document.getElementById("S").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("S").style.border="3px #de1738 solid";
  document.getElementById("S").innerHTML = " ";
  document.getElementById("S").title = " ";
  document.getElementById("S").style.backgroundColor = "#ECECEC";
  document.getElementById("S").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'Cl' && elemento === 'Cloro' && regla === 'capta 1 electrón' && familia === 'halógenos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Cl").style.border="3px #77dd77 solid";
  document.getElementById("Cl").innerHTML = "Cl³⁵";
  document.getElementById("Cl").title = "Cloro";
  document.getElementById("Cl").style.backgroundColor = "#bdecb6";
  document.getElementById("Cl").style.color = "#c81d11";
  document.getElementById("Cl").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("Cl").style.border="3px #de1738 solid";
  document.getElementById("Cl").innerHTML = " ";
  document.getElementById("Cl").title = " ";
  document.getElementById("Cl").style.backgroundColor = "#ECECEC";
  document.getElementById("Cl").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'Ar' && elemento === 'Argón' && regla === '' && familia === '40') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Ar").style.border="3px #77dd77 solid";
  document.getElementById("Ar").innerHTML = "Ar⁴⁰";
  document.getElementById("Ar").title = "Argón";
  document.getElementById("Ar").style.backgroundColor = "#ffd1f5";
  document.getElementById("Ar").style.color = "#c81d11";
  document.getElementById("Ar").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("Ar").style.border="3px #de1738 solid";
  document.getElementById("Ar").innerHTML = " ";
  document.getElementById("Ar").title = " ";
  document.getElementById("Ar").style.backgroundColor = "#ECECEC";
  document.getElementById("Ar").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'K' && elemento === 'Potasio' && regla === 'cede 1 electrón' && familia === 'alcalinos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("K").style.border="3px #77dd77 solid";
  document.getElementById("K").innerHTML = "K³⁹";
  document.getElementById("K").title = "Potasio";
  document.getElementById("K").style.backgroundColor = "#ffddb3";
  document.getElementById("K").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("K").style.border="3px #de1738 solid";
  document.getElementById("K").innerHTML = " ";
  document.getElementById("K").title = " ";
  document.getElementById("K").style.backgroundColor = "#ECECEC";
  document.getElementById("K").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'Ca' && elemento === 'Calcio' && regla === 'cede 2 electrones' && familia === 'alcalinos térreos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Ca").style.border="3px #77dd77 solid";
  document.getElementById("Ca").innerHTML = "C⁴⁰";
  document.getElementById("Ca").title = "Calcio";
  document.getElementById("Ca").style.backgroundColor = "#ffddb3";
  document.getElementById("Ca").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("Ca").style.border="3px #de1738 solid";
  document.getElementById("Ca").innerHTML = " ";
  document.getElementById("Ca").title = " ";
  document.getElementById("Ca").style.backgroundColor = "#ECECEC";
  document.getElementById("Ca").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'Ga' && elemento === 'Galio' && regla === 'cede 3 electrones' && familia === 'boroideos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Ga").style.border="3px #77dd77 solid";
  document.getElementById("Ga").innerHTML = "Ga⁷⁰";
  document.getElementById("Ga").title = "Galio";
  document.getElementById("Ga").style.backgroundColor = "#ffddb3";
  document.getElementById("Ga").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("Ga").style.border="3px #de1738 solid";
  document.getElementById("Ga").innerHTML = " ";
  document.getElementById("Ga").title = " ";
  document.getElementById("Ga").style.backgroundColor = "#ECECEC";
  document.getElementById("Ga").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'Ge' && elemento === 'Germanio' && regla === 'cede o capta 4 electrones' && familia === 'carbonoideos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Ge").style.border="3px #77dd77 solid";
  document.getElementById("Ge").innerHTML = "Ge⁷³";
  document.getElementById("Ge").title = "Germanio";
  document.getElementById("Ge").style.backgroundColor = "#cc9966";
  document.getElementById("Ge").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("Ge").style.border="3px #de1738 solid";
  document.getElementById("Ge").innerHTML = " ";
  document.getElementById("Ge").title = " ";
  document.getElementById("Ge").style.backgroundColor = "#ECECEC";
  document.getElementById("Ge").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'As' && elemento === 'Arsénico' && regla === 'capta 3 electrones' && familia === 'nitrogenoideos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("As").style.border="3px #77dd77 solid";
  document.getElementById("As").innerHTML = "As⁷⁵";
  document.getElementById("As").title = "Arsénico";
  document.getElementById("As").style.backgroundColor = "#cc9966";
  document.getElementById("As").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("As").style.border="3px #de1738 solid";
  document.getElementById("As").innerHTML = " ";
  document.getElementById("As").title = " ";
  document.getElementById("As").style.backgroundColor = "#ECECEC";
  document.getElementById("As").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'Se' && elemento === 'Selenio' && regla === 'capta 2 electrones' && familia === 'anfígenos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Se").style.border="3px #77dd77 solid";
  document.getElementById("Se").innerHTML = "Se⁷⁹";
  document.getElementById("Se").title = "Selenio";
  document.getElementById("Se").style.backgroundColor = "#bdecb6";
  document.getElementById("Se").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("Se").style.border="3px #de1738 solid";
  document.getElementById("Se").innerHTML = " ";
  document.getElementById("Se").title = " ";
  document.getElementById("Se").style.backgroundColor = "#ECECEC";
  document.getElementById("Se").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'Br' && elemento === 'Bromo' && regla === 'capta 1 electrón' && familia === 'halógenos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Br").style.border="3px #77dd77 solid";
  document.getElementById("Br").innerHTML = "Br⁸⁰";
  document.getElementById("Br").title = "Bromo";
  document.getElementById("Br").style.color = "#187bcd";
  document.getElementById("Br").style.backgroundColor = "#bdecb6";
  document.getElementById("Br").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("Br").style.border="3px #de1738 solid";
  document.getElementById("Br").innerHTML = " ";
  document.getElementById("Br").title = " ";
  document.getElementById("Br").style.backgroundColor = "#ECECEC";
  document.getElementById("Br").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'Kr' && elemento === 'Kriptón' && regla === '' && familia === '84') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Kr").style.border="3px #77dd77 solid";
  document.getElementById("Kr").innerHTML = "Kr⁸⁴";
  document.getElementById("Kr").title = "Kriptón";
  document.getElementById("Kr").style.color = "#c81d11";
  document.getElementById("Kr").style.backgroundColor = "#ffd1f5";
  document.getElementById("Kr").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("Kr").style.border="3px #de1738 solid";
  document.getElementById("Kr").innerHTML = " ";
  document.getElementById("Kr").title = " ";
  document.getElementById("Kr").style.backgroundColor = "#ECECEC";
  document.getElementById("Kr").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'Rb' && elemento === 'Rubidio' && regla === 'cede 1 electrón' && familia === 'alcalinos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Rb").style.border="3px #77dd77 solid";
  document.getElementById("Rb").innerHTML = "Rb⁸⁵";
  document.getElementById("Rb").title = "Rubidio";
  document.getElementById("Rb").style.backgroundColor = "#ffddb3";
  document.getElementById("Rb").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("Rb").style.border="3px #de1738 solid";
  document.getElementById("Rb").innerHTML = " ";
  document.getElementById("Rb").title = " ";
  document.getElementById("Rb").style.backgroundColor = "#ECECEC";
  document.getElementById("Rb").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'Sr' && elemento === 'Estroncio' && regla === 'cede 2 electrones' && familia === 'alcalinos térreos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Sr").style.border="3px #77dd77 solid";
  document.getElementById("Sr").innerHTML = "Sr⁸⁸";
  document.getElementById("Sr").title = "Estroncio";
  document.getElementById("Sr").style.backgroundColor = "#ffddb3";
  document.getElementById("Sr").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("Sr").style.border="3px #de1738 solid";
  document.getElementById("Sr").innerHTML = " ";
  document.getElementById("Sr").title = " ";
  document.getElementById("Sr").style.backgroundColor = "#ECECEC";
  document.getElementById("Sr").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'In' && elemento === 'Indio' && regla === 'cede 3 electrones' && familia === 'boroideos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("In").style.border="3px #77dd77 solid";
  document.getElementById("In").innerHTML = "In¹¹⁵";
  document.getElementById("In").title = "Indio";
  document.getElementById("In").style.backgroundColor = "#ffddb3";
  document.getElementById("In").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("In").style.border="3px #de1738 solid";
  document.getElementById("In").innerHTML = " ";
  document.getElementById("In").title = " ";
  document.getElementById("In").style.backgroundColor = "#ECECEC";
  document.getElementById("In").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'Sn' && elemento === 'Estaño' && regla === 'cede o capta 4 electrones' && familia === 'carbonoideos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Sn").style.border="3px #77dd77 solid";
  document.getElementById("Sn").innerHTML = "Sn¹¹⁹";
  document.getElementById("Sn").title = "Estaño";
  document.getElementById("Sn").style.backgroundColor = "#ffddb3";
  document.getElementById("Sn").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("Sn").style.border="3px #de1738 solid";
  document.getElementById("Sn").innerHTML = " ";
  document.getElementById("Sn").title = " ";
  document.getElementById("Sn").style.backgroundColor = "#ECECEC";
  document.getElementById("Sn").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'Sb' && elemento === 'Antimonio' && regla === 'capta 3 electrones' && familia === 'nitrogenoideos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Sb").style.border="3px #77dd77 solid";
  document.getElementById("Sb").innerHTML = "Sb¹²²";
  document.getElementById("Sb").title = "Antimonio";
  document.getElementById("Sb").style.backgroundColor = "#cc9966";
  document.getElementById("Sb").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("Sb").style.border="3px #de1738 solid";
  document.getElementById("Sb").innerHTML = " ";
  document.getElementById("Sb").title = " ";
  document.getElementById("Sb").style.backgroundColor = "#ECECEC";
  document.getElementById("Sb").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'Te' && elemento === 'Teluro' && regla === 'capta 2 electrones' && familia === 'anfígenos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Te").style.border="3px #77dd77 solid";
  document.getElementById("Te").innerHTML = "Te¹²⁸";
  document.getElementById("Te").title = "Teluro";
  document.getElementById("Te").style.backgroundColor = "#cc9966";
  document.getElementById("Te").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("Te").style.border="3px #de1738 solid";
  document.getElementById("Te").innerHTML = " ";
  document.getElementById("Te").title = " ";
  document.getElementById("Te").style.backgroundColor = "#ECECEC";
  document.getElementById("Te").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'I' && elemento === 'Yodo' && regla === 'capta 1 electrón' && familia === 'halógenos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("I").style.border="3px #77dd77 solid";
  document.getElementById("I").innerHTML = "I¹²⁷";
  document.getElementById("I").title = "Yodo";
  document.getElementById("I").style.backgroundColor = "#bdecb6";
  document.getElementById("I").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("I").style.border="3px #de1738 solid";
  document.getElementById("I").innerHTML = " ";
  document.getElementById("I").title = " ";
  document.getElementById("I").style.backgroundColor = "#ECECEC";
  document.getElementById("I").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'Xe' && elemento === 'Xenón' && regla === '' && familia === '131') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Xe").style.border="3px #77dd77 solid";
  document.getElementById("Xe").innerHTML = "Xe¹³¹";
  document.getElementById("Xe").title = "Xenón";
  document.getElementById("Xe").style.color = "#c81d11";
  document.getElementById("Xe").style.backgroundColor = "#ffd1f5";
  document.getElementById("Xe").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("Xe").style.border="3px #de1738 solid";
  document.getElementById("Xe").innerHTML = " ";
  document.getElementById("Xe").title = " ";
  document.getElementById("Xe").style.backgroundColor = "#ECECEC";
  document.getElementById("Xe").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'Cs' && elemento === 'Cesio' && regla === 'cede 1 electrón' && familia === 'alcalinos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Cs").style.border="3px #77dd77 solid";
  document.getElementById("Cs").innerHTML = "Cs¹³³";
  document.getElementById("Cs").title = "Cesio";
  document.getElementById("Cs").style.backgroundColor = "#ffddb3";
  document.getElementById("Cs").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("Cs").style.border="3px #de1738 solid";
  document.getElementById("Cs").innerHTML = " ";
  document.getElementById("Cs").title = " ";
  document.getElementById("Cs").style.backgroundColor = "#ECECEC";
  document.getElementById("Cs").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'Ba' && elemento === 'Bario' && regla === 'cede 2 electrones' && familia === 'alcalinos térreos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Ba").style.border="3px #77dd77 solid";
  document.getElementById("Ba").innerHTML = "Ba¹³⁷";
  document.getElementById("Ba").title = "Bario";
  document.getElementById("Ba").style.backgroundColor = "#ffddb3";
  document.getElementById("Ba").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("Ba").style.border="3px #de1738 solid";
  document.getElementById("Ba").innerHTML = " ";
  document.getElementById("Ba").title = " ";
  document.getElementById("Ba").style.backgroundColor = "#ECECEC";
  document.getElementById("Ba").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'Tl' && elemento === 'Talio' && regla === 'cede 3 electrones' && familia === 'boroideos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Tl").style.border="3px #77dd77 solid";
  document.getElementById("Tl").innerHTML = "Tl²⁰⁴";
  document.getElementById("Tl").title = "Talio";
  document.getElementById("Tl").style.backgroundColor = "#ffddb3";
  document.getElementById("Tl").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("Tl").style.border="3px #de1738 solid";
  document.getElementById("Tl").innerHTML = " ";
  document.getElementById("Tl").title = " ";
  document.getElementById("Tl").style.backgroundColor = "#ECECEC";
  document.getElementById("Tl").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'Pb' && elemento === 'Plomo' && regla === 'cede o capta 4 electrones' && familia === 'carbonoideos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Pb").style.border="3px #77dd77 solid";
  document.getElementById("Pb").innerHTML = "Pb²⁰⁷";
  document.getElementById("Pb").title = "Plomo";
  document.getElementById("Pb").style.backgroundColor = "#ffddb3";
  document.getElementById("Pb").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("Pb").style.border="3px #de1738 solid";
  document.getElementById("Pb").innerHTML = " ";
  document.getElementById("Pb").title = " ";
  document.getElementById("Pb").style.backgroundColor = "#ECECEC";
  document.getElementById("Pb").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'Bi' && elemento === 'Bismuto' && regla === 'capta 3 electrones' && familia === 'nitrogenoideos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Bi").style.border="3px #77dd77 solid";
  document.getElementById("Bi").innerHTML = "Bi²⁰⁹";
  document.getElementById("Bi").title = "Bismuto";
  document.getElementById("Bi").style.backgroundColor = "#ffddb3";
  document.getElementById("Bi").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("Bi").style.border="3px #de1738 solid";
  document.getElementById("Bi").innerHTML = " ";
  document.getElementById("Bi").title = " ";
  document.getElementById("Bi").style.backgroundColor = "#ECECEC";
  document.getElementById("Bi").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'Po' && elemento === 'Polonio' && regla === 'capta 2 electrones' && familia === 'anfígenos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Po").style.border="3px #77dd77 solid";
  document.getElementById("Po").innerHTML = "Po²⁰⁹";
  document.getElementById("Po").title = "Polonio";
  document.getElementById("Po").style.backgroundColor = "#cc9966";
  document.getElementById("Po").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("Po").style.border="3px #de1738 solid";
  document.getElementById("Po").innerHTML = " ";
  document.getElementById("Po").title = " ";
  document.getElementById("Po").style.backgroundColor = "#ECECEC";
  document.getElementById("Po").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'At' && elemento === 'Astato' && regla === 'capta 1 electrón' && familia === 'halógenos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("At").style.border="3px #77dd77 solid";
  document.getElementById("At").innerHTML = "As²¹⁰";
  document.getElementById("At").title = "Astato";
  document.getElementById("At").style.backgroundColor = "#cc9966";
  document.getElementById("At").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("At").style.border="3px #de1738 solid";
  document.getElementById("At").innerHTML = " ";
  document.getElementById("At").title = " ";
  document.getElementById("At").style.backgroundColor = "#ECECEC";
  document.getElementById("At").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'Rn' && elemento === 'Radón' && regla === '' && familia === '222') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Rn").style.border="3px #77dd77 solid";
  document.getElementById("Rn").innerHTML = "Rn²²²";
  document.getElementById("Rn").title = "Radón";
  document.getElementById("Rn").style.color = "#c81d11";
  document.getElementById("Rn").style.backgroundColor = "#ffd1f5";
  document.getElementById("Rn").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("Rn").style.border="3px #de1738 solid";
  document.getElementById("Rn").innerHTML = " ";
  document.getElementById("Rn").title = " ";
  document.getElementById("Rn").style.backgroundColor = "#ECECEC";
  document.getElementById("Rn").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'Fr' && elemento === 'Francio' && regla === 'cede 1 electrón' && familia === 'alcalinos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Fr").style.border="3px #77dd77 solid";
  document.getElementById("Fr").innerHTML = "Fr²²³";
  document.getElementById("Fr").title = "Francio";
  document.getElementById("Fr").style.backgroundColor = "#ffddb3";
  document.getElementById("Fr").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("Fr").style.border="3px #de1738 solid";
  document.getElementById("Fr").innerHTML = " ";
  document.getElementById("Fr").title = " ";
  document.getElementById("Fr").style.backgroundColor = "#ECECEC";
  document.getElementById("Fr").style.pointerEvents = 'auto';
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

const { value: simbolo } = await Swal.fire({
  title: '¿Cuál es el símbolo?',
  input: 'text',
  inputPlaceholder: 'Símbolo',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

const { value: elemento } = await Swal.fire({
  title: '¿Cuál es el elemento?',
  input: 'text',
  inputPlaceholder: 'Elemento',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: regla} = await Swal.fire({
  title: '¿Cuál es su regla del octeto?',
  input: 'text',
  inputPlaceholder: 'Cede/Capta',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})
const { value: familia} = await Swal.fire({
  title: '¿Cuál es la familia?',
  input: 'text',
  inputPlaceholder: 'Familia',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return '¡Debes escribir algo!'
    }
  }
})

if (simbolo === 'Ra' && elemento === 'Radio' && regla === 'cede 2 electrones' && familia === 'alcalinos térreos') {
  Swal.fire({
    title: 'Correcto!',
    text: 'Has acertado la pregunta.',
    icon: 'success',
    confirmButtonText: 'Siguiente'
  });
  document.getElementById("Ra").style.border="3px #77dd77 solid";
  document.getElementById("Ra").innerHTML = "Ra²²⁶";
  document.getElementById("Ra").title = "Radio";
  document.getElementById("Ra").style.backgroundColor = "#ffddb3";
  document.getElementById("Ra").style.pointerEvents = 'none';
}
    
else  {
  Swal.fire({
    title: 'Incorrecto...',
    text: "¡Compruébalo una vez más'!",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  document.getElementById("Ra").style.border="3px #de1738 solid";
  document.getElementById("Ra").innerHTML = " ";
  document.getElementById("Ra").title = " ";
  document.getElementById("Ra").style.backgroundColor = "#ECECEC";
  document.getElementById("Ra").style.pointerEvents = 'auto';
}


})(); }
