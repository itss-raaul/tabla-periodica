function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "raul@gmail.com" && password == "12345"){
   window.location = "/realmenu.html"; // Redirecting to other page.
};
}

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
