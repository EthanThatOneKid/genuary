const POPULATION = 100;
const ANIMATION_SPEED = 0.6;

let GALAXY; // Global galaxy.

let frameStartTime; // Initial start timestamp.
let filming = false;

function resetGalaxy() {
  GALAXY = makeGalaxy({
    population: POPULATION,
  });

  GALAXY.populate();
  frameStartTime = millis();
}

function setup() {
  createCanvas(400, 400);
  resetGalaxy();
}

function draw() {
  background(1);

  // Calculate the elapsed time since the last frame.
  let elapsedTime = (millis() - frameStartTime) / 1e3; // Time in seconds.
  frameStartTime = millis(); // Update the frame start time.

  // Update the animation using the elapsed time.
  GALAXY.render(elapsedTime * ANIMATION_SPEED);
}

function mousePressed() {
  if (!filming) {
    saveGif("genuary-2023-01.gif", 1e3, { units: "frames", delay: 0 });

    resetGalaxy();
    filming = true;
  }
}
