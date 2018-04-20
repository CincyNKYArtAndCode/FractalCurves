
numSteps = 0

function setup() {
  createCanvas(1024, 768);
  background(255);
  stroke(0);
  strokeWeight(1);
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
    var d2 = d1/3.0;
    var pt1 = offsetPoint(start, angle, d2);
    var pt2 = offsetPoint(pt1, angle + 60, d2);
    var pt3 = offsetPoint(start, angle, d2 * 2);
    drawCurve(start, angle, d2, replacements - 1);
    drawCurve(pt1, angle + 60, d2, replacements - 1);
    drawCurve(pt2, angle - 60, d2, replacements - 1);
    drawCurve(pt3, angle, d2, replacements - 1);
  }
}

function draw() {
  clear();
  var midPt = createVector(width/2, height/2);
  var size = 300;
  var edgeLen = size * 1.73205;
  pt1 = offsetPoint(midPt, 0, size);
  pt2 = offsetPoint(midPt, 120, size);
  pt3 = offsetPoint(midPt, 240, size);
  drawCurve(pt1, 210, edgeLen, numSteps);
  drawCurve(pt3, 90, edgeLen, numSteps);
  drawCurve(pt2, 330, edgeLen, numSteps);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && numSteps > 0) {
    numSteps = numSteps - 1;
    redraw();
  } else if (keyCode === RIGHT_ARROW && numSteps < 6) {
    numSteps = numSteps + 1;
    redraw();
  }
}
