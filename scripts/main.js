let leftButton = document.getElementById("left");
let upButton = document.getElementById("up");
let rightButton = document.getElementById("right");
let downButton = document.getElementById("down");
let buttonClass = "btn btn-lg btn-outline-secondary"

document.onkeydown = function () {
  resetArrow()
  switch (window.event.keyCode) {
    case 37:
      leftButton.className = buttonClass + " active";
      break;
    case 38:
      upButton.className = buttonClass + " active";
      break;
    case 39:
      rightButton.className = buttonClass + " active";
      break;
    case 40:
      downButton.className = buttonClass + " active";
      break;
  }
};

function resetArrow(){
  leftButton.className = buttonClass + " inactive";
  upButton.className = buttonClass + " inactive";
  rightButton.className = buttonClass + " inactive";
  downButton.className = buttonClass + " inactive";
}
