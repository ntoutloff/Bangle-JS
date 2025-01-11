const depth = 5;
const center = g.getWidth/2;
const diameter = 150;
const minSpeed = 5;

let t = 0;
let isFlipping = false;

function drawFace (x, width) {
  g.fillEllipse(
    center + x + width,
    center - diameter/2,
    center + x - width,
    center + diameter/2
  );
}

function flip() {
  let choice = 3 + Math.floor(Math.random()*2);
  let a = minSpeed/(choice*choice);
  function spin() {
    if (t < choice*Math.PI) {
      setTimeout(flip, a*t*t);
    }
  }
  setTimeout(spin, speed);
}

function checkFlip() {
  if (isFlipping == false) {
    isFlipping = true;
    flip();
  }
}

Bangle.on('touch', checkFlip);

