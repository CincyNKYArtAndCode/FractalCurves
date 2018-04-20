

function setup() {
  createCanvas(1024, 768);
  background(0);
  noStroke();
  fill(255, 204, 0);
}

function offsetPoint(start, angle, distance) {
  return p5.Vector.fromAngle(radians(angle), distance)
          .add(start);
}

function drawCurve(start, angle, d1, replacements) {
  if (replacements == 0) {
    var endPt = offsetPoint(start, angle, d1);
    vertex(start.x,start.y);
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

function snowflake(stps) {
  beginShape();
  var midPt = createVector(width/2, height/2);
  var size = 300;
  var edgeLen = size * 1.73205;
  pt1 = offsetPoint(midPt, 0, size);
  pt2 = offsetPoint(midPt, 120, size);
  pt3 = offsetPoint(midPt, 240, size);
  drawCurve(pt1, 210, edgeLen, stps);
  drawCurve(pt3, 90, edgeLen, stps);
  drawCurve(pt2, 330, edgeLen, stps);
  endShape(CLOSE);  
}

var stepNum = 0;
var delayNum = 0;

function draw() {
  if(delayNum == 0) {
    if(stepNum == 0) {
      clear();
    }
    snowflake(stepNum);
    stepNum = (stepNum + 1) % 6;
  }  
  delayNum = (delayNum + 1) % 10;
}

