
numSteps = 6

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

function drawCurve(start, angle, d1, replacements) {
  if (replacements == 0) {
    var endPt = offsetPoint(start, angle, d1);
    line(start.x, start.y, endPt.x, endPt.y);
  } else {
    var d2 = d1 * 0.7071069;
    var midPt = offsetPoint(start, angle + 45, d2);
    drawCurve(start, angle + 45, d2, replacements - 1);
    drawCurve(midPt, angle - 45, d2, replacements - 1);
  }
}

function draw() {
  clear();
  var pt = createVector(width/3, height/2);
  drawCurve(pt, 0, width/3, numSteps);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && numSteps > 0) {
    numSteps = numSteps - 1;
    redraw();
  } else if (keyCode === RIGHT_ARROW && numSteps < 14) {
    numSteps = numSteps + 1;
    redraw();
  }
}
