let rng = (min, max) => { return Math.floor(Math.random() * (max - min + 1) + min); }

class rgbGen {
  constructor(red, green, blue) {
    this.red = rng(0, 255);
    this.green = rng(0, 255);
    this.blue = rng(0, 255);
  }
}

class shapeGen {
  constructor(height, width, degree, color) {
    this.height = height;
    this.width = width;
    this.degree = degree;
    this.color = color;
  }
};

let shape = new shapeGen(rng(0,1000), rng(0, 1000), rng(0, 12) * 30, new rgbGen);
