function playHello() {
  const helloSound = document.getElementById("hello_sound");
  helloSound.play();
}

//about text appear on scroll
function aboutTextAppear() {
  const aboutText = document.querySelector(".about_text");
  const aboutTextPosition = aboutText.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.6;
  if (aboutTextPosition < screenPosition) {
    aboutText.classList.add("about_text_appear");
  }
}
window.addEventListener("scroll", aboutTextAppear);

//work text appear on scroll
function workTextAppear() {
  const workText = document.querySelector(".work_text");
  const workTextPosition = workText.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.7;
  if (workTextPosition < screenPosition) {
    workText.classList.add("work_text_appear");
  }
}
window.addEventListener("scroll", workTextAppear);
