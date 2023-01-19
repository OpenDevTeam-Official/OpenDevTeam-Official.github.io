var audio = new Audio('nyan.mp3');

function nyanButton() {
  // change the title itself to black so its readable

  document.getElementById('odt').innerHTML= "NyanDT";
  document.body.style.cssText += 'background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3); background-size: 1200% 1200%; -webkit-animation: rainbow 20s ease infinite; animation: rainbow 20s ease infinite;';

  // play nyan cat song
  //audio.play();
}
