// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "raul.es0407@gmail.com" && password == "raul21042007"){
alert ("Login successfully");
window.location = "/index.html"; // Redirecting to other page.
}
}
