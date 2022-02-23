document.getElementById("c0").innerHTML="Contact us";
document.getElementById("c1").innerHTML="Welcome to My website, your one spot for all your IT solutions";
document.getElementById("c2").innerHTML="Our contact details are as follows:";
document.getElementById("c4").innerHTML="Cell number: 0837577444";
document.getElementById("c5").innerHTML="sibusisosigudla21@gmail.com";
document.getElementById("c6").innerHTML="";
document.getElementById("c7").innerHTML="Pretoria, Tshwane, South Africa.";
document.getElementById("47").innerHTML="Data Science";
document.getElementById("48").innerHTML="We are at your service!";
document.getElementById("49").innerHTML="Cell number: 0837577444";
document.getElementById("50").innerHTML="EMAIL: sibusisosigudla21@gmail.com";
document.getElementById("51").innerHTML="Pretoria, Tshwane, South Africa.";





// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

