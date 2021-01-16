console.log("hello content.js");
let modal;
let fullscreenYesBtn;
let fullscreenNoBtn;

createModal();
addListeners();

///////// functions

function createModal() {
  fullscreenYesBtn = document.createElement("button");
  fullscreenNoBtn = document.createElement("button");
  fullscreenYesBtn.innerText = "Yes";
  fullscreenNoBtn.innerText = "No";

  modal = document.createElement("div");
  modal.setAttribute("id", "ask-fullscreen-modal");

  modal.innerHTML = `
    <h2>Do you want fullscreen?</h2>
  `;
  const d1 = document.createElement("div");
  d1.appendChild(fullscreenYesBtn);
  d1.appendChild(fullscreenNoBtn);

  modal.appendChild(d1);

  document.body.appendChild(modal);
}

function addListeners() {
  fullscreenYesBtn.addEventListener("click", fullscreenYesHandler);
  fullscreenNoBtn.addEventListener("click", closeModal);
}

function closeModal() {
  modal.classList.add("hide");
}

function fullscreenYesHandler() {
  console.log("yes handler");
  closeModal();
  // document.documentElement.requestFullscreen();
  document.body.webkitRequestFullscreen();
}
