let l;
let r;
let t = 0;
w = g.getWidth();
h = g.getHeight()-1;

function drawEllipse() {
  t += 0.2;
  g.clear();
  let left = (w/2)*Math.sin(t) + w/2;
  let right = (w/2)*-Math.sin(t) + w/2;
  print(left);
  g.setColor(0,0,1);
  g.fillEllipse(
    left,
    0,
    right,
    h  
  );
  g.setColor(1,0,0);
  g.drawEllipse(
    left,
    0,
    right,
    h  
  );
  if (t < 20) {
    setTimeout(drawEllipse,1);
  } else {print('Done!');}
}

setTimeout(drawEllipse, 1);
 
