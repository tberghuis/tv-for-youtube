let modal;
let fullscreenYesBtn;
let fullscreenNoBtn;
let expandControl;
let compressControl;

let fullscreenActive = false;

// createModal();
createFullscreenControls();

addListeners();

// test();

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

function createFullscreenControls() {
  expandControl = createElementFromHTML(
    '<i class="fas fa-expand fa-5x hide"></i>'
  );
  compressControl = createElementFromHTML(
    '<i class="fas fa-compress fa-5x hide"></i>'
  );
  const d1 = createElementFromHTML('<div id="fullscreen-controls"></div>');
  d1.appendChild(expandControl);
  d1.appendChild(compressControl);

  document.body.appendChild(d1);
}

function addListeners() {
  // fullscreenYesBtn.addEventListener("click", fullscreenYesHandler);
  // fullscreenNoBtn.addEventListener("click", fullscreenNoHandler);

  // show fullscreen control as overlay timeout
  document.addEventListener("click", showFullscreenControl);

  expandControl.addEventListener("click", expandHandler, true);
  compressControl.addEventListener("click", compressHandler, true);
}

function expandHandler(e) {
  fullscreenActive = true;
  document.documentElement.webkitRequestFullscreen();
  hideFullscreenControls();
  e.stopPropagation();
}

function compressHandler(e) {
  fullscreenActive = false;
  document.webkitExitFullscreen();
  hideFullscreenControls();
  e.stopPropagation();
}

function showFullscreenControl() {
  // start basic
  // expandControl.classList.remove("hide");
  // setTimeout(hideFullscreenControls, 3000);

  if (fullscreenActive) {
    compressControl.classList.remove("hide");
  } else {
    expandControl.classList.remove("hide");
  }

  setTimeout(hideFullscreenControls, 3000);
}

function hideFullscreenControls() {
  if (!expandControl.classList.contains("hide")) {
    expandControl.classList.add("hide");
  }

  if (!compressControl.classList.contains("hide")) {
    compressControl.classList.add("hide");
  }
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

// function test() {
//   document.addEventListener(
//     "click",
//     () => {
//       console.log("test");
//     },
//     false
//   );
// }

////////////////////// utility fns
// put in separate file????

function createElementFromHTML(htmlString) {
  var div = document.createElement("div");
  div.innerHTML = htmlString.trim();
  return div.firstChild;
}
