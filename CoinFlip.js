let t = 0;
let d = 5;
let center = g.getWidth()/2;
let diameter = 150;
let slow = 5;
let choice = 3 + Math.floor(Math.random()*2);
let a = slow/(choice*choice);
print(choice);

function drawCoin(x, w) {
  g.fillEllipse(
    center + x + w,
    center - diameter/2,
    center + x - w,
    center + diameter/2
  );
}

function flip() {
  g.clear();
  t += 0.1;
  let x_h = d*Math.sin(t);
  let x_t = -d*Math.sin(t);
  let w = diameter/2*Math.cos(t);

  if (Math.cos(t) > 0) {
    g.setColor(0,1,0);
    drawCoin(x_h,w);
    g.fillRect(
      center - x_h,
      center - diameter/2,
      center + x_h,
      center + diameter/2
    );
    g.setColor(0,0,1);
    drawCoin(x_t,w);
  } else {
    g.setColor(0,1,0);
    drawCoin(x_t,w);
    g.fillRect(
      center - x_t,
      center - diameter/2,
      center + x_t,
      center + diameter/2
    );
    g.setColor(1,0,0);
    drawCoin(x_h,w);
  }

  if (t < choice*Math.PI) {setTimeout(flip, a*t*t);}
}
setTimeout(flip, 1);