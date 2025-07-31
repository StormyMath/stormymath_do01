function setup() {
  let canvas = createCanvas(400, 300);
  canvas.parent("sketch-holder");
  background(240);
}

function draw() {
  background(0,0,240);
  stroke(0);
  noFill();

  translate(width / 2, height / 2);
  scale(1, -1);  // Y軸反転

  beginShape();
  for (let x = -200; x <= 200; x += 1) {
    let y = 0.01 * x * x;
    vertex(x, y);
  }
  endShape();
}
