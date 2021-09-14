Swal.fire({
  title: "¡Bienvenido a <b>Completa con Valencias</b>!",
  text:
    "Esta es el Completa de dificultad media añadiendo las valencias / número de oxidación. ¿Preparado?",
  footer:
    "Asegúrate de poner mayúsculas y tildes! <br> Recomendamos utilizar la pantalla completa para una mejor experiencia.",
  confirmButtonText: "Adelante",
  timer: 10000,
  timerProgressBar: true
}).then(function () {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 7000,
    timerProgressBar: true
  });

  Toast.fire({
    icon: "warning",
    title: "Estás en la versión beta"
  });
});

// Hidrógeno
document.getElementById("H").onclick = function () {
  myFunction1();
};
function myFunction1() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "H" && elemento === "Hidrógeno" && valencia === "1") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("H").style.border = "3px #77dd77 solid";
      document.getElementById("H").innerHTML = "H";
      document.getElementById("H").title = "Hidrógeno";
      document.getElementById("H").style.backgroundColor = "#ffffff";
      document.getElementById("H").style.color = "#c81d11";
      document.getElementById("H").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("H").style.border = "3px #de1738 solid";
      document.getElementById("H").innerHTML = " ";
      document.getElementById("H").title = " ";
      document.getElementById("H").style.backgroundColor = "#ECECEC";
      document.getElementById("H").style.pointerEvents = "auto";
    }
  })();
}

// Helio
document.getElementById("He").onclick = function () {
  myFunction2();
};
function myFunction2() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "He" && elemento === "Helio") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("He").style.border = "3px #77dd77 solid";
      document.getElementById("He").innerHTML = "He";
      document.getElementById("He").title = "Helio";
      document.getElementById("He").style.backgroundColor = "#ffd1f5";
      document.getElementById("He").style.color = "#c81d11";
      document.getElementById("He").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("He").style.border = "3px #de1738 solid";
      document.getElementById("He").innerHTML = " ";
      document.getElementById("He").title = " ";
      document.getElementById("He").style.backgroundColor = "#ECECEC";
      document.getElementById("He").style.pointerEvents = "auto";
    }
  })();
}

// Litio
document.getElementById("Li").onclick = function () {
  myFunction3();
};
function myFunction3() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Li" && elemento === "Litio" && valencia === "1") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Li").style.border = "3px #77dd77 solid";
      document.getElementById("Li").innerHTML = "Li";
      document.getElementById("Li").title = "Litio";
      document.getElementById("Li").style.backgroundColor = "#ffddb3";
      document.getElementById("Li").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Li").style.border = "3px #de1738 solid";
      document.getElementById("Li").innerHTML = " ";
      document.getElementById("Li").title = " ";
      document.getElementById("Li").style.backgroundColor = "#ECECEC";
      document.getElementById("Li").style.pointerEvents = "auto";
    }
  })();
}

// Berilio
document.getElementById("Be").onclick = function () {
  myFunction4();
};
function myFunction4() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Be" && elemento === "Berilio" && valencia === "2") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Be").style.border = "3px #77dd77 solid";
      document.getElementById("Be").innerHTML = "Be";
      document.getElementById("Be").title = "Berilio";
      document.getElementById("Be").style.backgroundColor = "#ffddb3";
      document.getElementById("Be").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Be").style.border = "3px #de1738 solid";
      document.getElementById("Be").innerHTML = " ";
      document.getElementById("Be").title = " ";
      document.getElementById("Be").style.backgroundColor = "#ECECEC";
      document.getElementById("Be").style.pointerEvents = "auto";
    }
  })();
}

// Boro
document.getElementById("B").onclick = function () {
  myFunction5();
};
function myFunction5() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "B" && elemento === "Boro" && valencia === "3") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("B").style.border = "3px #77dd77 solid";
      document.getElementById("B").innerHTML = "B";
      document.getElementById("B").title = "Boro";
      document.getElementById("B").style.backgroundColor = "#cc9966";
      document.getElementById("B").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("B").style.border = "3px #de1738 solid";
      document.getElementById("B").innerHTML = " ";
      document.getElementById("B").title = " ";
      document.getElementById("B").style.backgroundColor = "#ECECEC";
      document.getElementById("B").style.pointerEvents = "auto";
    }
  })();
}

// Carbono
document.getElementById("C").onclick = function () {
  myFunction6();
};
function myFunction6() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "C" && elemento === "Carbono" && valencia === "2, 4") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("C").style.border = "3px #77dd77 solid";
      document.getElementById("C").innerHTML = "C";
      document.getElementById("C").title = "Carbono";
      document.getElementById("C").style.backgroundColor = "#bdecb6";
      document.getElementById("C").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("C").style.border = "3px #de1738 solid";
      document.getElementById("C").innerHTML = " ";
      document.getElementById("C").title = " ";
      document.getElementById("C").style.backgroundColor = "#ECECEC";
      document.getElementById("C").style.pointerEvents = "auto";
    }
  })();
}

// Nitrógeno
document.getElementById("N").onclick = function () {
  myFunction7();
};
function myFunction7() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "N" && elemento === "Nitrógeno" && valencia === "1, 3, 5") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("N").style.border = "3px #77dd77 solid";
      document.getElementById("N").innerHTML = "N";
      document.getElementById("N").title = "Nitrógeno";
      document.getElementById("N").style.backgroundColor = "#bdecb6";
      document.getElementById("N").style.color = "#c81d11";
      document.getElementById("N").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("N").style.border = "3px #de1738 solid";
      document.getElementById("N").innerHTML = " ";
      document.getElementById("N").title = " ";
      document.getElementById("N").style.backgroundColor = "#ECECEC";
      document.getElementById("N").style.pointerEvents = "auto";
    }
  })();
}

// Oxígeno
document.getElementById("O").onclick = function () {
  myFunction8();
};
function myFunction8() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "O" && elemento === "Oxígeno" && valencia === "2") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("O").style.border = "3px #77dd77 solid";
      document.getElementById("O").innerHTML = "O";
      document.getElementById("O").title = "Oxígeno";
      document.getElementById("O").style.backgroundColor = "#bdecb6";
      document.getElementById("O").style.color = "#c81d11";
      document.getElementById("O").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("O").style.border = "3px #de1738 solid";
      document.getElementById("O").innerHTML = " ";
      document.getElementById("O").title = " ";
      document.getElementById("O").style.backgroundColor = "#ECECEC";
      document.getElementById("O").style.pointerEvents = "auto";
    }
  })();
}

// Flúor
document.getElementById("F").onclick = function () {
  myFunction9();
};
function myFunction9() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "F" && elemento === "Flúor" && valencia === "1, 3, 5, 7") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("F").style.border = "3px #77dd77 solid";
      document.getElementById("F").innerHTML = "F";
      document.getElementById("F").title = "Flúor";
      document.getElementById("F").style.backgroundColor = "#bdecb6";
      document.getElementById("F").style.color = "#c81d11";
      document.getElementById("F").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("F").style.border = "3px #de1738 solid";
      document.getElementById("F").innerHTML = " ";
      document.getElementById("F").title = " ";
      document.getElementById("F").style.backgroundColor = "#ECECEC";
      document.getElementById("F").style.pointerEvents = "auto";
    }
  })();
}

// Neón
document.getElementById("Ne").onclick = function () {
  myFunction10();
};
function myFunction10() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Ne" && elemento === "Neón") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Ne").style.border = "3px #77dd77 solid";
      document.getElementById("Ne").innerHTML = "Ne";
      document.getElementById("Ne").title = "Neón";
      document.getElementById("Ne").style.backgroundColor = "#ffd1f5";
      document.getElementById("Ne").style.color = "#c81d11";
      document.getElementById("Ne").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Ne").style.border = "3px #de1738 solid";
      document.getElementById("Ne").innerHTML = " ";
      document.getElementById("Ne").title = " ";
      document.getElementById("Ne").style.backgroundColor = "#ECECEC";
      document.getElementById("Ne").style.pointerEvents = "auto";
    }
  })();
}

// Sodio
document.getElementById("Na").onclick = function () {
  myFunction11();
};
function myFunction11() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Na" && elemento === "Sodio" && valencia === "1") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Na").style.border = "3px #77dd77 solid";
      document.getElementById("Na").innerHTML = "Na";
      document.getElementById("Na").title = "Sodio";
      document.getElementById("Na").style.backgroundColor = "#ffddb3";
      document.getElementById("Na").style.color = "#000000";
      document.getElementById("Na").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Na").style.border = "3px #de1738 solid";
      document.getElementById("Na").innerHTML = " ";
      document.getElementById("Na").title = " ";
      document.getElementById("Na").style.backgroundColor = "#ECECEC";
      document.getElementById("Na").style.pointerEvents = "auto";
    }
  })();
}

// Magnesio
document.getElementById("Mg").onclick = function () {
  myFunction12();
};
function myFunction12() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Mg" && elemento === "Magnesio" && valencia === "2") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Mg").style.border = "3px #77dd77 solid";
      document.getElementById("Mg").innerHTML = "Mg";
      document.getElementById("Mg").title = "Magnesio";
      document.getElementById("Mg").style.backgroundColor = "#ffddb3";
      document.getElementById("Mg").style.color = "#000000";
      document.getElementById("Mg").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Mg").style.border = "3px #de1738 solid";
      document.getElementById("Mg").innerHTML = " ";
      document.getElementById("Mg").title = " ";
      document.getElementById("Mg").style.backgroundColor = "#ECECEC";
      document.getElementById("Mg").style.pointerEvents = "auto";
    }
  })();
}

// Alumnio
document.getElementById("Al").onclick = function () {
  myFunction13();
};
function myFunction13() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Al" && elemento === "Aluminio" && valencia === "3") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Al").style.border = "3px #77dd77 solid";
      document.getElementById("Al").innerHTML = "Al";
      document.getElementById("Al").title = "Aluminio";
      document.getElementById("Al").style.backgroundColor = "#ffddb3";
      document.getElementById("Al").style.color = "#000000";
      document.getElementById("Al").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Al").style.border = "3px #de1738 solid";
      document.getElementById("Al").innerHTML = " ";
      document.getElementById("Al").title = " ";
      document.getElementById("Al").style.backgroundColor = "#ECECEC";
      document.getElementById("Al").style.pointerEvents = "auto";
    }
  })();
}

// Silicio
document.getElementById("Si").onclick = function () {
  myFunction14();
};
function myFunction14() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Si" && elemento === "Silicio" && valencia === "2, 4") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Si").style.border = "3px #77dd77 solid";
      document.getElementById("Si").innerHTML = "Si";
      document.getElementById("Si").title = "Silicio";
      document.getElementById("Si").style.backgroundColor = "#cc9966";
      document.getElementById("Si").style.color = "#000000";
      document.getElementById("Si").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Si").style.border = "3px #de1738 solid";
      document.getElementById("Si").innerHTML = " ";
      document.getElementById("Si").title = " ";
      document.getElementById("Si").style.backgroundColor = "#ECECEC";
      document.getElementById("Si").style.pointerEvents = "auto";
    }
  })();
}

// Fósforo
document.getElementById("P").onclick = function () {
  myFunction15();
};
function myFunction15() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "P" && elemento === "Fósforo" && valencia === "1, 3, 5") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("P").style.border = "3px #77dd77 solid";
      document.getElementById("P").innerHTML = "P";
      document.getElementById("P").title = "Fósforo";
      document.getElementById("P").style.backgroundColor = "#bdecb6";
      document.getElementById("P").style.color = "#000000";
      document.getElementById("P").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("P").style.border = "3px #de1738 solid";
      document.getElementById("P").innerHTML = " ";
      document.getElementById("P").title = " ";
      document.getElementById("P").style.backgroundColor = "#ECECEC";
      document.getElementById("P").style.pointerEvents = "auto";
    }
  })();
}

// Azufre
document.getElementById("S").onclick = function () {
  myFunction16();
};
function myFunction16() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "S" && elemento === "Azufre" && valencia === "2, 4, 6") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("S").style.border = "3px #77dd77 solid";
      document.getElementById("S").innerHTML = "S";
      document.getElementById("S").title = "Azufre";
      document.getElementById("S").style.backgroundColor = "#bdecb6";
      document.getElementById("S").style.color = "#000000";
      document.getElementById("S").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("S").style.border = "3px #de1738 solid";
      document.getElementById("S").innerHTML = " ";
      document.getElementById("S").title = " ";
      document.getElementById("S").style.backgroundColor = "#ECECEC";
      document.getElementById("S").style.pointerEvents = "auto";
    }
  })();
}

// Cloro
document.getElementById("Cl").onclick = function () {
  myFunction17();
};
function myFunction17() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Cl" && elemento === "Cloro" && valencia === "1, 3, 5, 7") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Cl").style.border = "3px #77dd77 solid";
      document.getElementById("Cl").innerHTML = "Cl";
      document.getElementById("Cl").title = "Cloro";
      document.getElementById("Cl").style.backgroundColor = "#bdecb6";
      document.getElementById("Cl").style.color = "#c81d11";
      document.getElementById("Cl").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Cl").style.border = "3px #de1738 solid";
      document.getElementById("Cl").innerHTML = " ";
      document.getElementById("Cl").title = " ";
      document.getElementById("Cl").style.backgroundColor = "#ECECEC";
      document.getElementById("Cl").style.pointerEvents = "auto";
    }
  })();
}

// Argón
document.getElementById("Ar").onclick = function () {
  myFunction18();
};
function myFunction18() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Ar" && elemento === "Argón") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Ar").style.border = "3px #77dd77 solid";
      document.getElementById("Ar").innerHTML = "Ar";
      document.getElementById("Ar").title = "Argón";
      document.getElementById("Ar").style.backgroundColor = "#ffd1f5";
      document.getElementById("Ar").style.color = "#c81d11";
      document.getElementById("Ar").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Ar").style.border = "3px #de1738 solid";
      document.getElementById("Ar").innerHTML = " ";
      document.getElementById("Ar").title = " ";
      document.getElementById("Ar").style.backgroundColor = "#ECECEC";
      document.getElementById("Ar").style.pointerEvents = "auto";
    }
  })();
}

// Potasio
document.getElementById("K").onclick = function () {
  myFunction19();
};
function myFunction19() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "K" && elemento === "Potasio" && valencia === "1") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("K").style.border = "3px #77dd77 solid";
      document.getElementById("K").innerHTML = "K";
      document.getElementById("K").title = "Potasio";
      document.getElementById("K").style.backgroundColor = "#ffddb3";
      document.getElementById("K").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("K").style.border = "3px #de1738 solid";
      document.getElementById("K").innerHTML = " ";
      document.getElementById("K").title = " ";
      document.getElementById("K").style.backgroundColor = "#ECECEC";
      document.getElementById("K").style.pointerEvents = "auto";
    }
  })();
}

// Calcio
document.getElementById("Ca").onclick = function () {
  myFunction20();
};
function myFunction20() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Ca" && elemento === "Calcio" && valencia === "2") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Ca").style.border = "3px #77dd77 solid";
      document.getElementById("Ca").innerHTML = "Ca";
      document.getElementById("Ca").title = "Calcio";
      document.getElementById("Ca").style.backgroundColor = "#ffddb3";
      document.getElementById("Ca").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Ca").style.border = "3px #de1738 solid";
      document.getElementById("Ca").innerHTML = " ";
      document.getElementById("Ca").title = " ";
      document.getElementById("Ca").style.backgroundColor = "#ECECEC";
      document.getElementById("Ca").style.pointerEvents = "auto";
    }
  })();
}

// Escandio
document.getElementById("Sc").onclick = function () {
  myFunction21();
};
function myFunction21() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Sc" && elemento === "Escandio") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Sc").style.border = "3px #77dd77 solid";
      document.getElementById("Sc").innerHTML = "Sc";
      document.getElementById("Sc").title = "Escandio";
      document.getElementById("Sc").style.backgroundColor = "#ffddb3";
      document.getElementById("Sc").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Sc").style.border = "3px #de1738 solid";
      document.getElementById("Sc").innerHTML = " ";
      document.getElementById("Sc").title = " ";
      document.getElementById("Sc").style.backgroundColor = "#ECECEC";
      document.getElementById("Sc").style.pointerEvents = "auto";
    }
  })();
}

// Titanio
document.getElementById("Ti").onclick = function () {
  myFunction22();
};
function myFunction22() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Ti" && elemento === "Titanio" && valencia === "2, 3, 4") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Ti").style.border = "3px #77dd77 solid";
      document.getElementById("Ti").innerHTML = "Ti";
      document.getElementById("Ti").title = "Titanio";
      document.getElementById("Ti").style.backgroundColor = "#ffddb3";
      document.getElementById("Ti").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Ti").style.border = "3px #de1738 solid";
      document.getElementById("Ti").innerHTML = " ";
      document.getElementById("Ti").title = " ";
      document.getElementById("Ti").style.backgroundColor = "#ECECEC";
      document.getElementById("Ti").style.pointerEvents = "auto";
    }
  })();
}

// Vanadio
document.getElementById("V").onclick = function () {
  myFunction23();
};
function myFunction23() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "V" && elemento === "Vanadio") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("V").style.border = "3px #77dd77 solid";
      document.getElementById("V").innerHTML = "V";
      document.getElementById("V").title = "Vanadio";
      document.getElementById("V").style.backgroundColor = "#ffddb3";
      document.getElementById("V").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("V").style.border = "3px #de1738 solid";
      document.getElementById("V").innerHTML = " ";
      document.getElementById("V").title = " ";
      document.getElementById("V").style.backgroundColor = "#ECECEC";
      document.getElementById("V").style.pointerEvents = "auto";
    }
  })();
}

// Cromo
document.getElementById("Cr").onclick = function () {
  myFunction24();
};
function myFunction24() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Cr" && elemento === "Cromo" && valencia === "2, 3, 6") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Cr").style.border = "3px #77dd77 solid";
      document.getElementById("Cr").innerHTML = "Cr";
      document.getElementById("Cr").title = "Cromo";
      document.getElementById("Cr").style.backgroundColor = "#ffddb3";
      document.getElementById("Cr").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Cr").style.border = "3px #de1738 solid";
      document.getElementById("Cr").innerHTML = " ";
      document.getElementById("Cr").title = " ";
      document.getElementById("Cr").style.backgroundColor = "#ECECEC";
      document.getElementById("Cr").style.pointerEvents = "auto";
    }
  })();
}

// Manganseo
document.getElementById("Mn").onclick = function () {
  myFunction25();
};
function myFunction25() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Mn" && elemento === "Manganeso" && valencia === "2, 3, 4, 6, 7") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Mn").style.border = "3px #77dd77 solid";
      document.getElementById("Mn").innerHTML = "Mn";
      document.getElementById("Mn").title = "Manganeso";
      document.getElementById("Mn").style.backgroundColor = "#ffddb3";
      document.getElementById("Mn").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Mn").style.border = "3px #de1738 solid";
      document.getElementById("Mn").innerHTML = " ";
      document.getElementById("Mn").title = " ";
      document.getElementById("Mn").style.backgroundColor = "#ECECEC";
      document.getElementById("Mn").style.pointerEvents = "auto";
    }
  })();
}

// Hierro
document.getElementById("Fe").onclick = function () {
  myFunction26();
};
function myFunction26() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Fe" && elemento === "Hierro" && valencia === "2, 3") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Fe").style.border = "3px #77dd77 solid";
      document.getElementById("Fe").innerHTML = "Fe";
      document.getElementById("Fe").title = "Hierro";
      document.getElementById("Fe").style.backgroundColor = "#ffddb3";
      document.getElementById("Fe").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Fe").style.border = "3px #de1738 solid";
      document.getElementById("Fe").innerHTML = " ";
      document.getElementById("Fe").title = " ";
      document.getElementById("Fe").style.backgroundColor = "#ECECEC";
      document.getElementById("Fe").style.pointerEvents = "auto";
    }
  })();
}

// Cobalto
document.getElementById("Co").onclick = function () {
  myFunction27();
};
function myFunction27() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Co" && elemento === "Cobalto" && valencia === "2, 3") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Co").style.border = "3px #77dd77 solid";
      document.getElementById("Co").innerHTML = "Co";
      document.getElementById("Co").title = "Cobalto";
      document.getElementById("Co").style.backgroundColor = "#ffddb3";
      document.getElementById("Co").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Co").style.border = "3px #de1738 solid";
      document.getElementById("Co").innerHTML = " ";
      document.getElementById("Co").title = " ";
      document.getElementById("Co").style.backgroundColor = "#ECECEC";
      document.getElementById("Co").style.pointerEvents = "auto";
    }
  })();
}

// Níquel
document.getElementById("Ni").onclick = function () {
  myFunction28();
};
function myFunction28() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Ni" && elemento === "Níquel" && valencia === "2, 3") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Ni").style.border = "3px #77dd77 solid";
      document.getElementById("Ni").innerHTML = "Ni";
      document.getElementById("Ni").title = "Níquel";
      document.getElementById("Ni").style.backgroundColor = "#ffddb3";
      document.getElementById("Ni").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Ni").style.border = "3px #de1738 solid";
      document.getElementById("Ni").innerHTML = " ";
      document.getElementById("Ni").title = " ";
      document.getElementById("Ni").style.backgroundColor = "#ECECEC";
      document.getElementById("Ni").style.pointerEvents = "auto";
    }
  })();
}

// Cobre
document.getElementById("Cu").onclick = function () {
  myFunction29();
};
function myFunction29() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Cu" && elemento === "Cobre" && valencia === "1, 2") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Cu").style.border = "3px #77dd77 solid";
      document.getElementById("Cu").innerHTML = "Cu";
      document.getElementById("Cu").title = "Cobre";
      document.getElementById("Cu").style.backgroundColor = "#ffddb3";
      document.getElementById("Cu").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Cu").style.border = "3px #de1738 solid";
      document.getElementById("Cu").innerHTML = " ";
      document.getElementById("Cu").title = " ";
      document.getElementById("Cu").style.backgroundColor = "#ECECEC";
      document.getElementById("Cu").style.pointerEvents = "auto";
    }
  })();
}

// Cinc
document.getElementById("Zn").onclick = function () {
  myFunction30();
};
function myFunction30() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Zn" && elemento === "Cinc" && valencia === "2") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Zn").style.border = "3px #77dd77 solid";
      document.getElementById("Zn").innerHTML = "Zn";
      document.getElementById("Zn").title = "Cinc";
      document.getElementById("Zn").style.backgroundColor = "#ffddb3";
      document.getElementById("Zn").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Zn").style.border = "3px #de1738 solid";
      document.getElementById("Zn").innerHTML = " ";
      document.getElementById("Zn").title = " ";
      document.getElementById("Zn").style.backgroundColor = "#ECECEC";
      document.getElementById("Zn").style.pointerEvents = "auto";
    }
  })();
}

// Galio
document.getElementById("Ga").onclick = function () {
  myFunction31();
};
function myFunction31() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Ga" && elemento === "Galio" && valencia === "3") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Ga").style.border = "3px #77dd77 solid";
      document.getElementById("Ga").innerHTML = "Ga";
      document.getElementById("Ga").title = "Galio";
      document.getElementById("Ga").style.backgroundColor = "#ffddb3";
      document.getElementById("Ga").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Ga").style.border = "3px #de1738 solid";
      document.getElementById("Ga").innerHTML = " ";
      document.getElementById("Ga").title = " ";
      document.getElementById("Ga").style.backgroundColor = "#ECECEC";
      document.getElementById("Ga").style.pointerEvents = "auto";
    }
  })();
}

// Germanio
document.getElementById("Ge").onclick = function () {
  myFunction32();
};
function myFunction32() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Ge" && elemento === "Germanio" && valencia === "2, 4") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Ge").style.border = "3px #77dd77 solid";
      document.getElementById("Ge").innerHTML = "Ge";
      document.getElementById("Ge").title = "Germanio";
      document.getElementById("Ge").style.backgroundColor = "#cc9966";
      document.getElementById("Ge").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Ge").style.border = "3px #de1738 solid";
      document.getElementById("Ge").innerHTML = " ";
      document.getElementById("Ge").title = " ";
      document.getElementById("Ge").style.backgroundColor = "#ECECEC";
      document.getElementById("Ge").style.pointerEvents = "auto";
    }
  })();
}

// Arsénico
document.getElementById("As").onclick = function () {
  myFunction33();
};
function myFunction33() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "As" && elemento === "Arsénico" && valencia === "1, 3, 5") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("As").style.border = "3px #77dd77 solid";
      document.getElementById("As").innerHTML = "As⁷⁵";
      document.getElementById("As").title = "Arsénico";
      document.getElementById("As").style.backgroundColor = "#cc9966";
      document.getElementById("As").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("As").style.border = "3px #de1738 solid";
      document.getElementById("As").innerHTML = " ";
      document.getElementById("As").title = " ";
      document.getElementById("As").style.backgroundColor = "#ECECEC";
      document.getElementById("As").style.pointerEvents = "auto";
    }
  })();
}

// Selenio
document.getElementById("Se").onclick = function () {
  myFunction34();
};
function myFunction34() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Se" && elemento === "Selenio" && valencia === "2, 4, 6") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Se").style.border = "3px #77dd77 solid";
      document.getElementById("Se").innerHTML = "Se";
      document.getElementById("Se").title = "Selenio";
      document.getElementById("Se").style.backgroundColor = "#bdecb6";
      document.getElementById("Se").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Se").style.border = "3px #de1738 solid";
      document.getElementById("Se").innerHTML = " ";
      document.getElementById("Se").title = " ";
      document.getElementById("Se").style.backgroundColor = "#ECECEC";
      document.getElementById("Se").style.pointerEvents = "auto";
    }
  })();
}

// Bromo
document.getElementById("Br").onclick = function () {
  myFunction35();
};
function myFunction35() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Br" && elemento === "Bromo" && valencia === "1, 3, 5, 7") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Br").style.border = "3px #77dd77 solid";
      document.getElementById("Br").innerHTML = "Br";
      document.getElementById("Br").title = "Bromo";
      document.getElementById("Br").style.color = "#187bcd";
      document.getElementById("Br").style.backgroundColor = "#bdecb6";
      document.getElementById("Br").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Br").style.border = "3px #de1738 solid";
      document.getElementById("Br").innerHTML = " ";
      document.getElementById("Br").title = " ";
      document.getElementById("Br").style.backgroundColor = "#ECECEC";
      document.getElementById("Br").style.pointerEvents = "auto";
    }
  })();
}

// Kriptón
document.getElementById("Kr").onclick = function () {
  myFunction36();
};
function myFunction36() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });
    
    if (simbolo === "Kr" && elemento === "Kriptón") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Kr").style.border = "3px #77dd77 solid";
      document.getElementById("Kr").innerHTML = "Kr";
      document.getElementById("Kr").title = "Kriptón";
      document.getElementById("Kr").style.color = "#c81d11";
      document.getElementById("Kr").style.backgroundColor = "#ffd1f5";
      document.getElementById("Kr").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Kr").style.border = "3px #de1738 solid";
      document.getElementById("Kr").innerHTML = " ";
      document.getElementById("Kr").title = " ";
      document.getElementById("Kr").style.backgroundColor = "#ECECEC";
      document.getElementById("Kr").style.pointerEvents = "auto";
    }
  })();
}

// Rubidio
document.getElementById("Rb").onclick = function () {
  myFunction37();
};
function myFunction37() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Rb" && elemento === "Rubidio" && valencia === "1") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Rb").style.border = "3px #77dd77 solid";
      document.getElementById("Rb").innerHTML = "Rb";
      document.getElementById("Rb").title = "Rubidio";
      document.getElementById("Rb").style.backgroundColor = "#ffddb3";
      document.getElementById("Rb").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Rb").style.border = "3px #de1738 solid";
      document.getElementById("Rb").innerHTML = " ";
      document.getElementById("Rb").title = " ";
      document.getElementById("Rb").style.backgroundColor = "#ECECEC";
      document.getElementById("Rb").style.pointerEvents = "auto";
    }
  })();
}

// Estroncio
document.getElementById("Sr").onclick = function () {
  myFunction38();
};
function myFunction38() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Sr" && elemento === "Estroncio" && valencia === "2") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Sr").style.border = "3px #77dd77 solid";
      document.getElementById("Sr").innerHTML = "Sr";
      document.getElementById("Sr").title = "Estroncio";
      document.getElementById("Sr").style.backgroundColor = "#ffddb3";
      document.getElementById("Sr").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Sr").style.border = "3px #de1738 solid";
      document.getElementById("Sr").innerHTML = " ";
      document.getElementById("Sr").title = " ";
      document.getElementById("Sr").style.backgroundColor = "#ECECEC";
      document.getElementById("Sr").style.pointerEvents = "auto";
    }
  })();
}

// Itrio
document.getElementById("Y").onclick = function () {
  myFunction39();
};
function myFunction39() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Y" && elemento === "Itrio") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Y").style.border = "3px #77dd77 solid";
      document.getElementById("Y").innerHTML = "Y";
      document.getElementById("Y").title = "Itrio";
      document.getElementById("Y").style.backgroundColor = "#ffddb3";
      document.getElementById("Y").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Y").style.border = "3px #de1738 solid";
      document.getElementById("Y").innerHTML = " ";
      document.getElementById("Y").title = " ";
      document.getElementById("Y").style.backgroundColor = "#ECECEC";
      document.getElementById("Y").style.pointerEvents = "auto";
    }
  })();
}

// Circonio
document.getElementById("Zr").onclick = function () {
  myFunction40();
};
function myFunction40() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Zr" && elemento === "Circonio") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Zr").style.border = "3px #77dd77 solid";
      document.getElementById("Zr").innerHTML = "Zr";
      document.getElementById("Zr").title = "Circonio";
      document.getElementById("Zr").style.backgroundColor = "#ffddb3";
      document.getElementById("Zr").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Zr").style.border = "3px #de1738 solid";
      document.getElementById("Zr").innerHTML = " ";
      document.getElementById("Zr").title = " ";
      document.getElementById("Zr").style.backgroundColor = "#ECECEC";
      document.getElementById("Zr").style.pointerEvents = "auto";
    }
  })();
}

// Niobio
document.getElementById("Nb").onclick = function () {
  myFunction41();
};
function myFunction41() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Nb" && elemento === "Niobio") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Nb").style.border = "3px #77dd77 solid";
      document.getElementById("Nb").innerHTML = "Nb";
      document.getElementById("Nb").title = "Niobio";
      document.getElementById("Nb").style.backgroundColor = "#ffddb3";
      document.getElementById("Nb").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Nb").style.border = "3px #de1738 solid";
      document.getElementById("Nb").innerHTML = " ";
      document.getElementById("Nb").title = " ";
      document.getElementById("Nb").style.backgroundColor = "#ECECEC";
      document.getElementById("Nb").style.pointerEvents = "auto";
    }
  })();
}

// Molibdeno
document.getElementById("Mo").onclick = function () {
  myFunction42();
};
function myFunction42() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Mo" && elemento === "Molibdeno") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Mo").style.border = "3px #77dd77 solid";
      document.getElementById("Mo").innerHTML = "Mo";
      document.getElementById("Mo").title = "Molibdeno";
      document.getElementById("Mo").style.backgroundColor = "#ffddb3";
      document.getElementById("Mo").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Mo").style.border = "3px #de1738 solid";
      document.getElementById("Mo").innerHTML = " ";
      document.getElementById("Mo").title = " ";
      document.getElementById("Mo").style.backgroundColor = "#ECECEC";
      document.getElementById("Mo").style.pointerEvents = "auto";
    }
  })();
}

// Tecnecio
document.getElementById("Tc").onclick = function () {
  myFunction43();
};
function myFunction43() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Tc" && elemento === "Tecnecio") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Tc").style.border = "3px #77dd77 solid";
      document.getElementById("Tc").innerHTML = "Tc";
      document.getElementById("Tc").title = "Tecnecio";
      document.getElementById("Tc").style.color = "#cc8899";
      document.getElementById("Tc").style.backgroundColor = "#ffddb3";
      document.getElementById("Tc").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Tc").style.border = "3px #de1738 solid";
      document.getElementById("Tc").innerHTML = " ";
      document.getElementById("Tc").title = " ";
      document.getElementById("Tc").style.backgroundColor = "#ECECEC";
      document.getElementById("Tc").style.pointerEvents = "auto";
    }
  })();
}

// Rutenio
document.getElementById("Ru").onclick = function () {
  myFunction44();
};
function myFunction44() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Ru" && elemento === "Rutenio") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Ru").style.border = "3px #77dd77 solid";
      document.getElementById("Ru").innerHTML = "Ru";
      document.getElementById("Ru").title = "Rutenio";
      document.getElementById("Ru").style.backgroundColor = "#ffddb3";
      document.getElementById("Ru").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Ru").style.border = "3px #de1738 solid";
      document.getElementById("Ru").innerHTML = " ";
      document.getElementById("Ru").title = " ";
      document.getElementById("Ru").style.backgroundColor = "#ECECEC";
      document.getElementById("Ru").style.pointerEvents = "auto";
    }
  })();
}

// Rodio
document.getElementById("Rh").onclick = function () {
  myFunction45();
};
function myFunction45() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Rh" && elemento === "Rodio") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Rh").style.border = "3px #77dd77 solid";
      document.getElementById("Rh").innerHTML = "Rh";
      document.getElementById("Rh").title = "Rodio";
      document.getElementById("Rh").style.backgroundColor = "#ffddb3";
      document.getElementById("Rh").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Rh").style.border = "3px #de1738 solid";
      document.getElementById("Rh").innerHTML = " ";
      document.getElementById("Rh").title = " ";
      document.getElementById("Rh").style.backgroundColor = "#ECECEC";
      document.getElementById("Rh").style.pointerEvents = "auto";
    }
  })();
}

// Paladio
document.getElementById("Pd").onclick = function () {
  myFunction46();
};
function myFunction46() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Pd" && elemento === "Paladio" && valencia === "2, 4") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Pd").style.border = "3px #77dd77 solid";
      document.getElementById("Pd").innerHTML = "Pd";
      document.getElementById("Pd").title = "Paladio";
      document.getElementById("Pd").style.backgroundColor = "#ffddb3";
      document.getElementById("Pd").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Pd").style.border = "3px #de1738 solid";
      document.getElementById("Pd").innerHTML = " ";
      document.getElementById("Pd").title = " ";
      document.getElementById("Pd").style.backgroundColor = "#ECECEC";
      document.getElementById("Pd").style.pointerEvents = "auto";
    }
  })();
}

// Plata
document.getElementById("Ag").onclick = function () {
  myFunction47();
};
function myFunction47() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Ag" && elemento === "Plata" && valencia === "1") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Ag").style.border = "3px #77dd77 solid";
      document.getElementById("Ag").innerHTML = "Ag";
      document.getElementById("Ag").title = "Plata";
      document.getElementById("Ag").style.backgroundColor = "#ffddb3";
      document.getElementById("Ag").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Ag").style.border = "3px #de1738 solid";
      document.getElementById("Ag").innerHTML = " ";
      document.getElementById("Ag").title = " ";
      document.getElementById("Ag").style.backgroundColor = "#ECECEC";
      document.getElementById("Ag").style.pointerEvents = "auto";
    }
  })();
}

// Cadmio
document.getElementById("Cd").onclick = function () {
  myFunction48();
};
function myFunction48() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Cd" && elemento === "Cadmio" && valencia === "2") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Cd").style.border = "3px #77dd77 solid";
      document.getElementById("Cd").innerHTML = "Cd";
      document.getElementById("Cd").title = "Cadmio";
      document.getElementById("Cd").style.backgroundColor = "#ffddb3";
      document.getElementById("Cd").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Cd").style.border = "3px #de1738 solid";
      document.getElementById("Cd").innerHTML = " ";
      document.getElementById("Cd").title = " ";
      document.getElementById("Cd").style.backgroundColor = "#ECECEC";
      document.getElementById("Cd").style.pointerEvents = "auto";
    }
  })();
}

// Indio
document.getElementById("In").onclick = function () {
  myFunction49();
};
function myFunction49() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "In" && elemento === "Indio" && valencia === "3") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("In").style.border = "3px #77dd77 solid";
      document.getElementById("In").innerHTML = "In";
      document.getElementById("In").title = "Indio";
      document.getElementById("In").style.backgroundColor = "#ffddb3";
      document.getElementById("In").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("In").style.border = "3px #de1738 solid";
      document.getElementById("In").innerHTML = " ";
      document.getElementById("In").title = " ";
      document.getElementById("In").style.backgroundColor = "#ECECEC";
      document.getElementById("In").style.pointerEvents = "auto";
    }
  })();
}

// Estaño
document.getElementById("Sn").onclick = function () {
  myFunction50();
};
function myFunction50() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Sn" && elemento === "Estaño" && valencia === "2, 4") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Sn").style.border = "3px #77dd77 solid";
      document.getElementById("Sn").innerHTML = "Sn";
      document.getElementById("Sn").title = "Estaño";
      document.getElementById("Sn").style.backgroundColor = "#ffddb3";
      document.getElementById("Sn").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Sn").style.border = "3px #de1738 solid";
      document.getElementById("Sn").innerHTML = " ";
      document.getElementById("Sn").title = " ";
      document.getElementById("Sn").style.backgroundColor = "#ECECEC";
      document.getElementById("Sn").style.pointerEvents = "auto";
    }
  })();
}

// Antimonio
document.getElementById("Sb").onclick = function () {
  myFunction51();
};
function myFunction51() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Sb" && elemento === "Antimonio" && valencia === "1, 3, 5") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Sb").style.border = "3px #77dd77 solid";
      document.getElementById("Sb").innerHTML = "Sb";
      document.getElementById("Sb").title = "Antimonio";
      document.getElementById("Sb").style.backgroundColor = "#cc9966";
      document.getElementById("Sb").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Sb").style.border = "3px #de1738 solid";
      document.getElementById("Sb").innerHTML = " ";
      document.getElementById("Sb").title = " ";
      document.getElementById("Sb").style.backgroundColor = "#ECECEC";
      document.getElementById("Sb").style.pointerEvents = "auto";
    }
  })();
}

// Teluro
document.getElementById("Te").onclick = function () {
  myFunction52();
};
function myFunction52() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Te" && elemento === "Teluro" && valencia === "2, 4, 6") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Te").style.border = "3px #77dd77 solid";
      document.getElementById("Te").innerHTML = "Te";
      document.getElementById("Te").title = "Teluro";
      document.getElementById("Te").style.backgroundColor = "#cc9966";
      document.getElementById("Te").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Te").style.border = "3px #de1738 solid";
      document.getElementById("Te").innerHTML = " ";
      document.getElementById("Te").title = " ";
      document.getElementById("Te").style.backgroundColor = "#ECECEC";
      document.getElementById("Te").style.pointerEvents = "auto";
    }
  })();
}

// Yodo
document.getElementById("I").onclick = function () {
  myFunction53();
};
function myFunction53() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "I" && elemento === "Yodo" && valencia === "1, 3, 5, 7") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("I").style.border = "3px #77dd77 solid";
      document.getElementById("I").innerHTML = "I";
      document.getElementById("I").title = "Yodo";
      document.getElementById("I").style.backgroundColor = "#bdecb6";
      document.getElementById("I").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("I").style.border = "3px #de1738 solid";
      document.getElementById("I").innerHTML = " ";
      document.getElementById("I").title = " ";
      document.getElementById("I").style.backgroundColor = "#ECECEC";
      document.getElementById("I").style.pointerEvents = "auto";
    }
  })();
}

// Xenón
document.getElementById("Xe").onclick = function () {
  myFunction54();
};
function myFunction54() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Xe" && elemento === "Xenón") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Xe").style.border = "3px #77dd77 solid";
      document.getElementById("Xe").innerHTML = "Xe";
      document.getElementById("Xe").title = "Xenón";
      document.getElementById("Xe").style.color = "#c81d11";
      document.getElementById("Xe").style.backgroundColor = "#ffd1f5";
      document.getElementById("Xe").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Xe").style.border = "3px #de1738 solid";
      document.getElementById("Xe").innerHTML = " ";
      document.getElementById("Xe").title = " ";
      document.getElementById("Xe").style.backgroundColor = "#ECECEC";
      document.getElementById("Xe").style.pointerEvents = "auto";
    }
  })();
}

// Cesio
document.getElementById("Cs").onclick = function () {
  myFunction55();
};
function myFunction55() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Cs" && elemento === "Cesio" && valencia === "1") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Cs").style.border = "3px #77dd77 solid";
      document.getElementById("Cs").innerHTML = "Cs";
      document.getElementById("Cs").title = "Cesio";
      document.getElementById("Cs").style.backgroundColor = "#ffddb3";
      document.getElementById("Cs").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Cs").style.border = "3px #de1738 solid";
      document.getElementById("Cs").innerHTML = " ";
      document.getElementById("Cs").title = " ";
      document.getElementById("Cs").style.backgroundColor = "#ECECEC";
      document.getElementById("Cs").style.pointerEvents = "auto";
    }
  })();
}

// Bario
document.getElementById("Ba").onclick = function () {
  myFunction56();
};
function myFunction56() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Ba" && elemento === "Bario" && valencia === "2") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Ba").style.border = "3px #77dd77 solid";
      document.getElementById("Ba").innerHTML = "Ba";
      document.getElementById("Ba").title = "Bario";
      document.getElementById("Ba").style.backgroundColor = "#ffddb3";
      document.getElementById("Ba").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Ba").style.border = "3px #de1738 solid";
      document.getElementById("Ba").innerHTML = " ";
      document.getElementById("Ba").title = " ";
      document.getElementById("Ba").style.backgroundColor = "#ECECEC";
      document.getElementById("Ba").style.pointerEvents = "auto";
    }
  })();
}

// Hafnio
document.getElementById("Hf").onclick = function () {
  myFunction72();
};
function myFunction72() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Hf" && elemento === "Hafnio") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Hf").style.border = "3px #77dd77 solid";
      document.getElementById("Hf").innerHTML = "Hf";
      document.getElementById("Hf").title = "Hafnio";
      document.getElementById("Hf").style.backgroundColor = "#ffddb3";
      document.getElementById("Hf").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Hf").style.border = "3px #de1738 solid";
      document.getElementById("Hf").innerHTML = " ";
      document.getElementById("Hf").title = " ";
      document.getElementById("Hf").style.backgroundColor = "#ECECEC";
      document.getElementById("Hf").style.pointerEvents = "auto";
    }
  })();
}

// Tantalio
document.getElementById("Ta").onclick = function () {
  myFunction73();
};
function myFunction73() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Ta" && elemento === "Tantalio") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Ta").style.border = "3px #77dd77 solid";
      document.getElementById("Ta").innerHTML = "Ta";
      document.getElementById("Ta").title = "Tantalio";
      document.getElementById("Ta").style.backgroundColor = "#ffddb3";
      document.getElementById("Ta").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Ta").style.border = "3px #de1738 solid";
      document.getElementById("Ta").innerHTML = " ";
      document.getElementById("Ta").title = " ";
      document.getElementById("Ta").style.backgroundColor = "#ECECEC";
      document.getElementById("Ta").style.pointerEvents = "auto";
    }
  })();
}

// Wolframio
document.getElementById("W").onclick = function () {
  myFunction74();
};
function myFunction74() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "W" && elemento === "Wolframio") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("W").style.border = "3px #77dd77 solid";
      document.getElementById("W").innerHTML = "W";
      document.getElementById("W").title = "Wolframio";
      document.getElementById("W").style.backgroundColor = "#ffddb3";
      document.getElementById("W").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("W").style.border = "3px #de1738 solid";
      document.getElementById("W").innerHTML = " ";
      document.getElementById("W").title = " ";
      document.getElementById("W").style.backgroundColor = "#ECECEC";
      document.getElementById("W").style.pointerEvents = "auto";
    }
  })();
}

// Renio
document.getElementById("Re").onclick = function () {
  myFunction75();
};
function myFunction75() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Re" && elemento === "Renio") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Re").style.border = "3px #77dd77 solid";
      document.getElementById("Re").innerHTML = "Re";
      document.getElementById("Re").title = "Renio";
      document.getElementById("Re").style.backgroundColor = "#ffddb3";
      document.getElementById("Re").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Re").style.border = "3px #de1738 solid";
      document.getElementById("Re").innerHTML = " ";
      document.getElementById("Re").title = " ";
      document.getElementById("Re").style.backgroundColor = "#ECECEC";
      document.getElementById("Re").style.pointerEvents = "auto";
    }
  })();
}

// Osmio
document.getElementById("Os").onclick = function () {
  myFunction76();
};
function myFunction76() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Os" && elemento === "Osmio) {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Os").style.border = "3px #77dd77 solid";
      document.getElementById("Os").innerHTML = "Os";
      document.getElementById("Os").title = "Osmio";
      document.getElementById("Os").style.backgroundColor = "#ffddb3";
      document.getElementById("Os").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Os").style.border = "3px #de1738 solid";
      document.getElementById("Os").innerHTML = " ";
      document.getElementById("Os").title = " ";
      document.getElementById("Os").style.backgroundColor = "#ECECEC";
      document.getElementById("Os").style.pointerEvents = "auto";
    }
  })();
}

// Iridio
document.getElementById("Ir").onclick = function () {
  myFunction77();
};
function myFunction77() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Ir" && elemento === "Iridio") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Ir").style.border = "3px #77dd77 solid";
      document.getElementById("Ir").innerHTML = "Ir";
      document.getElementById("Ir").title = "Iridio";
      document.getElementById("Ir").style.backgroundColor = "#ffddb3";
      document.getElementById("Ir").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Ir").style.border = "3px #de1738 solid";
      document.getElementById("Ir").innerHTML = " ";
      document.getElementById("Ir").title = " ";
      document.getElementById("Ir").style.backgroundColor = "#ECECEC";
      document.getElementById("Ir").style.pointerEvents = "auto";
    }
  })();
}

// Platino
document.getElementById("Pt").onclick = function () {
  myFunction78();
};
function myFunction78() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Pt" && elemento === "Platino" && valencia === "2, 4") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Pt").style.border = "3px #77dd77 solid";
      document.getElementById("Pt").innerHTML = "Pt";
      document.getElementById("Pt").title = "Platino";
      document.getElementById("Pt").style.backgroundColor = "#ffddb3";
      document.getElementById("Pt").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Pt").style.border = "3px #de1738 solid";
      document.getElementById("Pt").innerHTML = " ";
      document.getElementById("Pt").title = " ";
      document.getElementById("Pt").style.backgroundColor = "#ECECEC";
      document.getElementById("Pt").style.pointerEvents = "auto";
    }
  })();
}

// Oro
document.getElementById("Au").onclick = function () {
  myFunction79();
};
function myFunction79() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Au" && elemento === "Oro" && valencia === "1, 3") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Au").style.border = "3px #77dd77 solid";
      document.getElementById("Au").innerHTML = "Au";
      document.getElementById("Au").title = "Oro";
      document.getElementById("Au").style.backgroundColor = "#ffddb3";
      document.getElementById("Au").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Au").style.border = "3px #de1738 solid";
      document.getElementById("Au").innerHTML = " ";
      document.getElementById("Au").title = " ";
      document.getElementById("Au").style.backgroundColor = "#ECECEC";
      document.getElementById("Au").style.pointerEvents = "auto";
    }
  })();
}

// Mercurio
document.getElementById("Hg").onclick = function () {
  myFunction80();
};
function myFunction80() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Hg" && elemento === "Mercurio" && valencia === "1, 2") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Hg").style.border = "3px #77dd77 solid";
      document.getElementById("Hg").innerHTML = "Hg";
      document.getElementById("Hg").title = "Mercurio";
      document.getElementById("Hg").style.color = "#187bcd";
      document.getElementById("Hg").style.backgroundColor = "#ffddb3";
      document.getElementById("Hg").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Hg").style.border = "3px #de1738 solid";
      document.getElementById("Hg").innerHTML = " ";
      document.getElementById("Hg").title = " ";
      document.getElementById("Hg").style.backgroundColor = "#ECECEC";
      document.getElementById("Hg").style.pointerEvents = "auto";
    }
  })();
}

// Talio
document.getElementById("Tl").onclick = function () {
  myFunction81();
};
function myFunction81() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Tl" && elemento === "Talio" && valencia === "3") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Tl").style.border = "3px #77dd77 solid";
      document.getElementById("Tl").innerHTML = "Tl";
      document.getElementById("Tl").title = "Talio";
      document.getElementById("Tl").style.backgroundColor = "#ffddb3";
      document.getElementById("Tl").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Tl").style.border = "3px #de1738 solid";
      document.getElementById("Tl").innerHTML = " ";
      document.getElementById("Tl").title = " ";
      document.getElementById("Tl").style.backgroundColor = "#ECECEC";
      document.getElementById("Tl").style.pointerEvents = "auto";
    }
  })();
}

// Plomo
document.getElementById("Pb").onclick = function () {
  myFunction82();
};
function myFunction82() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Pb" && elemento === "Plomo" && valencia === "2, 4") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Pb").style.border = "3px #77dd77 solid";
      document.getElementById("Pb").innerHTML = "Pb";
      document.getElementById("Pb").title = "Plomo";
      document.getElementById("Pb").style.backgroundColor = "#ffddb3";
      document.getElementById("Pb").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Pb").style.border = "3px #de1738 solid";
      document.getElementById("Pb").innerHTML = " ";
      document.getElementById("Pb").title = " ";
      document.getElementById("Pb").style.backgroundColor = "#ECECEC";
      document.getElementById("Pb").style.pointerEvents = "auto";
    }
  })();
}

// Bismuto
document.getElementById("Bi").onclick = function () {
  myFunction83();
};
function myFunction83() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Bi" && elemento === "Bismuto" && valencia === "1, 3, 5") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Bi").style.border = "3px #77dd77 solid";
      document.getElementById("Bi").innerHTML = "Bi";
      document.getElementById("Bi").title = "Bismuto";
      document.getElementById("Bi").style.backgroundColor = "#ffddb3";
      document.getElementById("Bi").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Bi").style.border = "3px #de1738 solid";
      document.getElementById("Bi").innerHTML = " ";
      document.getElementById("Bi").title = " ";
      document.getElementById("Bi").style.backgroundColor = "#ECECEC";
      document.getElementById("Bi").style.pointerEvents = "auto";
    }
  })();
}

// Polonio
document.getElementById("Po").onclick = function () {
  myFunction84();
};
function myFunction84() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Po" && elemento === "Polonio" && valencia === "2, 4, 6") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });<
      document.getElementById("Po").style.border = "3px #77dd77 solid";
      document.getElementById("Po").innerHTML = "Po";
      document.getElementById("Po").title = "Polonio";
      document.getElementById("Po").style.backgroundColor = "#cc9966";
      document.getElementById("Po").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Po").style.border = "3px #de1738 solid";
      document.getElementById("Po").innerHTML = " ";
      document.getElementById("Po").title = " ";
      document.getElementById("Po").style.backgroundColor = "#ECECEC";
      document.getElementById("Po").style.pointerEvents = "auto";
    }
  })();
}

// Astato
document.getElementById("At").onclick = function () {
  myFunction85();
};
function myFunction85() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "At" && elemento === "Astato" && valencia === "1, 3, 5, 7") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("At").style.border = "3px #77dd77 solid";
      document.getElementById("At").innerHTML = "As";
      document.getElementById("At").title = "Astato";
      document.getElementById("At").style.backgroundColor = "#cc9966";
      document.getElementById("At").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("At").style.border = "3px #de1738 solid";
      document.getElementById("At").innerHTML = " ";
      document.getElementById("At").title = " ";
      document.getElementById("At").style.backgroundColor = "#ECECEC";
      document.getElementById("At").style.pointerEvents = "auto";
    }
  })();
}

// Radón
document.getElementById("Rn").onclick = function () {
  myFunction86();
};
function myFunction86() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Rn" && elemento === "Radón") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Rn").style.border = "3px #77dd77 solid";
      document.getElementById("Rn").innerHTML = "Rn";
      document.getElementById("Rn").title = "Radón";
      document.getElementById("Rn").style.color = "#c81d11";
      document.getElementById("Rn").style.backgroundColor = "#ffd1f5";
      document.getElementById("Rn").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Rn").style.border = "3px #de1738 solid";
      document.getElementById("Rn").innerHTML = " ";
      document.getElementById("Rn").title = " ";
      document.getElementById("Rn").style.backgroundColor = "#ECECEC";
      document.getElementById("Rn").style.pointerEvents = "auto";
    }
  })();
}

// Francio
document.getElementById("Fr").onclick = function () {
  myFunction87();
};
function myFunction87() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Fr" && elemento === "Francio" && valencia === "1") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Fr").style.border = "3px #77dd77 solid";
      document.getElementById("Fr").innerHTML = "Fr";
      document.getElementById("Fr").title = "Francio";
      document.getElementById("Fr").style.backgroundColor = "#ffddb3";
      document.getElementById("Fr").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Fr").style.border = "3px #de1738 solid";
      document.getElementById("Fr").innerHTML = " ";
      document.getElementById("Fr").title = " ";
      document.getElementById("Fr").style.backgroundColor = "#ECECEC";
      document.getElementById("Fr").style.pointerEvents = "auto";
    }
  })();
}

// Radio
document.getElementById("Ra").onclick = function () {
  myFunction88();
};
function myFunction88() {
  (async () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: simbolo } = await Swal.fire({
      title: "¿Cuál es el símbolo?",
      input: "text",
      inputPlaceholder: "Símbolo",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: elemento } = await Swal.fire({
      title: "¿Cuál es el elemento?",
      input: "text",
      inputPlaceholder: "Elemento",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    const { value: valencia } = await Swal.fire({
      title: "¿Cuál es la valencia?",
      input: "text",
      inputPlaceholder: "Valencia",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "¡Debes escribir algo!";
        }
      }
    });

    if (simbolo === "Ra" && elemento === "Radio" && valencia === "2") {
      Swal.fire({
        title: "Correcto!",
        text: "Has acertado la pregunta.",
        icon: "success",
        confirmButtonText: "Siguiente"
      });
      document.getElementById("Ra").style.border = "3px #77dd77 solid";
      document.getElementById("Ra").innerHTML = "Ra";
      document.getElementById("Ra").title = "Radio";
      document.getElementById("Ra").style.backgroundColor = "#ffddb3";
      document.getElementById("Ra").style.pointerEvents = "none";
    } else {
      Swal.fire({
        title: "Incorrecto...",
        text: "¡Compruébalo una vez más'!",
        icon: "error",
        confirmButtonText: "Volver a intentar"
      });
      document.getElementById("Ra").style.border = "3px #de1738 solid";
      document.getElementById("Ra").innerHTML = " ";
      document.getElementById("Ra").title = " ";
      document.getElementById("Ra").style.backgroundColor = "#ECECEC";
      document.getElementById("Ra").style.pointerEvents = "auto";
    }
  })();
}
