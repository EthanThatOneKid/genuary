const FRAMES = 500;

let filming = false;
let lastFrame = Infinity;

function setup() {
  createCanvas(400, 400);
  randomSeed(0);
}

function draw() {
  intersection();

  if (frameCount >= lastFrame) {
    filming = false;
  }
}

function mousePressed() {
  if (!filming) {
    background(0);
    randomSeed(0);
    saveGif("genuary-2023-04.gif", FRAMES, { units: "frames", delay: 0 });
    lastFrame = frameCount + FRAMES;
    filming = true;
  }
}

const SHAPES = [
  randomEllipse,
  randomCircle,
  randomRect,
  randomSquare,
  randomTriangle,
];

function intersection() {
  fill(makeHSL(floor(random(0, 360))));
  const randomIndex = round(random(0, SHAPES.length - 1));
  const randomShape = SHAPES[randomIndex];
  randomShape();
}

// https://p5js.org/reference/#/p5/ellipse
function randomEllipse() {
  ellipse(
    random(-width, width),
    random(-height, height),
    random(20, width + height),
    random(20, height + height)
  );
}

// https://p5js.org/reference/#/p5/circle
function randomCircle() {
  circle(
    random(-width, width),
    random(-height, height),
    random(20, width + height)
  );
}

// https://p5js.org/reference/#/p5/rect
function randomRect() {
  rect(
    random(-width, width),
    random(-height, height),
    random(20, width + height),
    random(20, width + height)
  );
}

// https://p5js.org/reference/#/p5/square
function randomSquare() {
  square(
    random(-width, width),
    random(-height, height),
    random(20, width + height)
  );
}

// https://p5js.org/reference/#/p5/triangle
function randomTriangle() {
  triangle(
    random(-width, width),
    random(-height, height),
    random(-width, width),
    random(-height, height),
    random(-width, width),
    random(-height, height)
  );
}

function makeHSL(p) {
  return `hsl(${p}, 100%, 50%)`;
}
