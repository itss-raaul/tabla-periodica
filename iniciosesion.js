// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "raul@gmail.com" && password == "12345"){
Swal.fire(
  'Good job!',
  'You clicked the button!',
  'success'
)

});
window.location = "/realmenu.html"; // Redirecting to other page.
}
}
