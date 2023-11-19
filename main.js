import Typed from 'typed.js';
import confetti from 'canvas-confetti';

const typed = new Typed('#element', {
  strings: ['Frontend Engineer', 'Backend Engineer', 'Tech Savvy Person'],
  typeSpeed: 50,
});



const duar2Btn = document.getElementById("duar2")
duar2Btn.addEventListener("click", ()=>{

  const myCanvas = document.createElement('canvas');
  document.body.appendChild(myCanvas);
  
  const myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true
  });

  myCanvas.style.position = 'fixed';
  myCanvas.style.inset = 0;
  myCanvas.style.width = '100vw';
  myCanvas.style.height = '100vh';
  myCanvas.style.zIndex = -1;
  document.body.appendChild(myCanvas);

  myConfetti({
    particleCount: 100,
    startVelocity: 30,
    spread: 360,
    origin: {
      x: Math.random(),
      // since they fall down, start a bit higher than random
      y: Math.random() - 0.2
    }
  });
  
  // do this for 1 seconds
  var duration = 1 * 1000;
  var end = Date.now() + duration;
  
  (function frame() {
    // launch a few confetti from the left edge
    confetti({
      particleCount: 7,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    // and launch a few from the right edge
    confetti({
      particleCount: 7,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });
  
    // keep going until we are out of time
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
})

