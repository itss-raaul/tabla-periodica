function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "raul@gmail.com" && password == "12345"){
   window.location = "/realmenu.html"; // Redirecting to other page.
}:
