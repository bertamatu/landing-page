function navbarToggle() {
  const navbar = document.getElementById("myTopnav");
  if (navbar.className === "topnav") {
    navbar.className += " responsive";
  } else {
    navbar.className = "topnav";
  }
}

const helloSound = document.getElementById(hello_sound);
helloSound.play();
