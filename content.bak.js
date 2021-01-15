function createFullscreenButton() {
  var button = document.createElement("input");
  button.type = "button";
  button.value = "fullscreen";
  button.onclick = () => {
    // alert("hello world");

    document.body.removeChild(button);  
    document.documentElement.requestFullscreen();
    
  };
  document.body.appendChild(button);
}
