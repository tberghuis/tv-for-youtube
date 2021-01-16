console.log("hello world");

var modal = document.getElementById("ask-fullscreen-modal");

var modalBtn = document.getElementById("openModalBtn");

const fullscreenYesBtn = document.getElementById("fullscreen-yes-btn");
const fullscreenNoBtn = document.getElementById("fullscreen-no-btn");

modalBtn.addEventListener("click", openModal);
fullscreenYesBtn.addEventListener("click", fullscreenYesHandler);
fullscreenNoBtn.addEventListener("click", closeModal);

///// fns

function openModal() {
  // modal.style.display = "block";

  modal.classList.remove("hide");
}

function closeModal() {
  modal.classList.add("hide");
}

function fullscreenYesHandler() {
  console.log("yes handler");

  document.documentElement.requestFullscreen();
}
