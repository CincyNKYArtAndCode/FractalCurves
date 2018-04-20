
void setup()  {
  size(800, 800);
  fill(0);
  background(255);
  noLoop();
}

void drawGasket(float x, float y, float h, float w, int level) {
  if(level == 0) {
    rect(x, y, w, h);
  }
  else {
    float newH = h/3.0;
    float newW = w/3.0;
    
    for(int r = 0; r < 3; ++r) {
      for(int c = 0; c < 3; ++c) {
        if(!(r == 1 && c == 1)) {
          drawGasket(x + newW * c, y + newH * r, newW, newH, level - 1);
        }
      }
    }
  }
}

void draw() {
  drawGasket(0, 0, width, height, 5);
}
