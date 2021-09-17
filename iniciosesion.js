// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "raul@gmail.com" && password == "12345"){
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 7000,
  timerProgressBar: true,
})

Toast.fire({
  icon: 'success',
  title: 'Loggin Successfully!'
})

});
window.location = "/realmenu.html"; // Redirecting to other page.
}
}
