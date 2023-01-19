var audio = new Audio('nyan.mp3');

function nyanButton() {
  // change body css
  document.body.style.cssText += 'background: linear-gradient(-45deg, #ffeb3b, #74efff, #9c27b0); background-size: 100% 100%; animation: gradient-bg 1s ease infinite;';

  // play nyan cat song
  //audio.play();
}
