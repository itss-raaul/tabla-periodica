

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


var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "raulmaris" && password == "raul21042007"){
alert ("Login successfully");
window.location = "/index.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
