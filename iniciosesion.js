// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "raul@gmail.com" && password == "12345"){
alert ("Login successfully");
window.location = "/realmenu.html"; // Redirecting to other page.
}
}
