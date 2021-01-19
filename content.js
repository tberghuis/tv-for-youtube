let expandControl;
let compressControl;

let fullscreenActive = false;

createFullscreenControls();
addListeners();

///////// functions

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

////////////////////// util functions

function createElementFromHTML(htmlString) {
  var div = document.createElement("div");
  div.innerHTML = htmlString.trim();
  return div.firstChild;
}
