function playHello() {
  const helloSound = document.getElementById("hello_sound");
  helloSound.play();
}

//about text appear on scroll
function aboutTextAppear() {
  const aboutText = document.querySelector(".about_text");
  const aboutTextPosition = aboutText.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 2;
  if (aboutTextPosition < screenPosition) {
    aboutText.classList.add("about_text_appear");
  }
}
window.addEventListener("scroll", aboutTextAppear);
