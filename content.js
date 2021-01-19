console.log("hello content.js");
let modal;
let fullscreenYesBtn;
let fullscreenNoBtn;
// let fullscreenImg;
let expandControl;
let compressControl;

let fullscreenActive = false;

createModal();
addListeners();

test();

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

  // add fullscreen img
  // fullscreenImg = document.createElement("img");
  // fullscreenImg.src = chrome.runtime.getURL("fullscreen.png");
  // fullscreenImg.setAttribute("id", "fullscreen-img");
  // fullscreenImg.classList.add("hide");
  // document.body.appendChild(fullscreenImg);

  expandControl = createElementFromHTML(
    '<i class="fas fa-expand fa-3x"></i>'
  );
  document.body.appendChild(expandControl);
}

function addListeners() {
  fullscreenYesBtn.addEventListener("click", fullscreenYesHandler);
  fullscreenNoBtn.addEventListener("click", fullscreenNoHandler);
}

function fullscreenNoHandler(e) {
  // prevent from showing fullscreen img
  e.stopPropagation();
  closeModal();
}

function closeModal() {
  modal.classList.add("hide");
}

function fullscreenYesHandler() {
  console.log("yes handler");
  closeModal();

  fullscreenActive = true;

  // document.documentElement.requestFullscreen();
  // document.body.webkitRequestFullscreen();
  document.documentElement.webkitRequestFullscreen();
}

function test() {
  document.addEventListener(
    "click",
    () => {
      console.log("test");
    },
    false
  );
}

function showFullscreenImg() {
  fullscreenImg.classList.add("hide");
}

////////////////////// utility fns
// put in separate file????

function createElementFromHTML(htmlString) {
  var div = document.createElement("div");
  div.innerHTML = htmlString.trim();
  return div.firstChild;
}
