
void setup()  {
  size(800, 800);
  fill(0);
  noStroke();
  background(255);
}

void drawGasket(float x, float y, float h, float w, int level) {
  if(level == 0) {
    ellipse(x, y, w, h);
  }
  else {
    float newH = h/3.0;
    float newW = w/3.0;
    
    for(int r = 0; r < 3; ++r) {
      for(int c = 0; c < 3; ++c) {
        if(random(4) < 2) {
          int newLevel = level - int(random(1,level));
          drawGasket(x + newW * c, y + newH * r, newW, newH, newLevel);
        }
      }
    }
  }
}

void draw() {
  fill(0,0,0,10);
  rect(0, 0, width, height);
  fill(255);
  drawGasket(0, 0, width, height, 5);
}
