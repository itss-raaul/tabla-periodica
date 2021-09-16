

if (usuario === "raul" && password === "raul") {
 Swal.fire({
    title: 'Has iniciado sesión correctamente!',
    icon: 'success',
    confirmButtonText: 'Continuar'
  });
   window.location="/index.html";
}
    
else {
  Swal.fire({
    title: 'Tu usuario/contraseña no es correcta',
    text: "Inténtalo de nuevo",
    icon: 'error',
    confirmButtonText: 'Volver a intentar'
  });
  window.location="/index.html"

}


})(); }
