console.log("hello content.js");

init();

///////// functions

// i dont think this is needed for some reason

function init() {
  var userAgent = "hello agent";
  var code =
    "if(navigator.__defineGetter__){navigator.__defineGetter__('userAgent',function(){return " +
    userAgent +
    ";});}";
  var textNode = document.createTextNode(code);

  var script = document.createElement("script");
  //eval(code);
  script.appendChild(textNode);
  script.remove();
  var parentNode = document.head || document.documentElement;
  parentNode.appendChild(script);
  parentNode.removeChild(script);
}
