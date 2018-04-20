


function setup() {
  createCanvas(1024, 768);
  background(255);
  stroke(0);
  strokeWeight(2);
  noLoop();
}

function offsetPoint(start, angle, distance) {
  return p5.Vector.fromAngle(radians(angle), distance)
          .add(start);
}

function drawCurve(start, angle, d1) {
  var d2 = d1 * 0.7071069;
  var midPt = offsetPoint(start, angle + 45, d2);
  var endPt = offsetPoint(midPt, angle - 45, d2);
  line(start.x, start.y, midPt.x, midPt.y);
  line(midPt.x, midPt.y, endPt.x, endPt.y);
}

function draw() {
  var pt = createVector(width/3, height/2);
  drawCurve(pt, 0, width/3, 1);
}
