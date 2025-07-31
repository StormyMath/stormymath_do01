function setup() {
  //let canvas = createCanvas(400, 300);
  //canvas.parent("sketch-holder");
  createCanvas(400, 300);
  background(240);
}

function draw() {
  background(240);
  translate(width / 2, height / 2);
  scale(1, -1);
  stroke(0);
  noFill();
  beginShape();
  for (let x = -200; x <= 200; x++) {
    let y = 0.01 * x * x;
    vertex(x, y);
  }
  endShape();
}
