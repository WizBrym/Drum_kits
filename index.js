//Getting Numbers of Drums
var numberOfButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener('click', buttoncliked);
}

// Detecting click on the buttons i.e using button press
function buttoncliked() {
  var drumkey = this.innerHTML;
  makeSound(drumkey);
  buttonAnimation(drumkey);
};

// Detecting keypress on the keyboard i.e using keyboard to play drum sounds
document.addEventListener('keypress', function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
})
// Playing corresponding drumsounds
function makeSound(key) {
  switch (key) {
    case "w":
      var drumSound1 = new Audio("sounds/snare.mp3")
      drumSound1.play()
      break;
    case "a":
      var drumSound2 = new Audio("sounds/tom-2.mp3")
      drumSound2.play()
      break;
    case "s":
      var drumSound3 = new Audio("sounds/tom-3.mp3")
      drumSound3.play()
      break;
    case "d":
      var drumSound4 = new Audio("sounds/kick-bass.mp3")
      drumSound4.play()
      break;
    case "j":
      var drumSound5 = new Audio("sounds/tom-4.mp3")
      drumSound5.play()
      break;
    case "k":
      var drumSound6 = new Audio("sounds/tom-1.mp3")
      drumSound6.play()
      break;
    case "l":
      var drumSound7 = new Audio("sounds/crash.mp3")
      drumSound7.play()
      break;
    default:
      console.log();
  }
};

//Creating animation for the button and key press

function buttonAnimation(currentButton){
  var activeButton = document.querySelector("." + currentButton)
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
};
