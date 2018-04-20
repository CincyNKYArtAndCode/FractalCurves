
function setup() {
  createCanvas(1024, 768);
  background(255);
  stroke(0);
  strokeWeight(2);
  noLoop();
}

function offsetPoint(start, angle, distance) {
  return p5.Vector
    .fromAngle(radians(angle), distance)
    .add(start);
}

function drawCurve(start, angle, distance) {
  var endPt = offsetPoint(start, angle, distance);
  line(start.x, start.y, endPt.x, endPt.y);
}

function draw() {
  var pt = createVector(width/3, height/2);
  drawCurve(pt, 10, width/3);
}
