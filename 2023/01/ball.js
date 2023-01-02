const MIN_THETA_SCALAR = 0.5;
const MAX_THETA_SCALAR = 1.5;
const MIN_BALL_DIAMETER = 5;
const MAX_BALL_DIAMETER = 20;
const MIN_X_ORBIT_SCALAR = 1;
const MAX_X_ORBIT_SCALAR = 1.75;
const MIN_Y_ORBIT_SCALAR = 0.8;
const MAX_Y_ORBIT_SCALAR = 1.2;

class Ball {
  constructor({
    fillColor,
    strokeColor,
    xOffset,
    yOffset,
    xOrbitScalar,
    yOrbitScalar,
    thetaOffset,
    thetaScalar,
  }) {
    this.fillColor = fillColor;
    this.strokeColor = strokeColor;
    this.xOffset = xOffset;
    this.yOffset = yOffset;
    this.xOrbitScalar = xOrbitScalar;
    this.yOrbitScalar = yOrbitScalar;
    this.thetaOffset = thetaOffset;
    this.thetaScalar = thetaScalar;

    this.diameter = map(
      this.thetaScalar,
      MAX_THETA_SCALAR,
      MIN_THETA_SCALAR,
      MIN_BALL_DIAMETER,
      MAX_BALL_DIAMETER
    );
  }

  render(theta, xFn, yFn, rot) {
    let x = xFn(this, theta);
    let y = yFn(this, theta);

    if (this.strokeColor) {
      stroke(this.strokeColor);
    } else {
      noStroke();
    }

    if (rot) {
      const rotation = rot(x, y);
      x = rotation.x;
      y = rotation.y;
    }

    fill(this.fillColor);
    ellipse(x + this.xOffset, y + this.yOffset, this.diameter);
  }
}

function makeBall(population, i) {
  const xOffset = width * 0.5;
  const yOffset = height * 0.5;
  const xOrbitScalar = random(MIN_X_ORBIT_SCALAR, MAX_X_ORBIT_SCALAR);
  const yOrbitScalar = random(MIN_Y_ORBIT_SCALAR, MAX_Y_ORBIT_SCALAR);
  const thetaOffset = (2 * PI * i) / population;
  const thetaScalar = random(MIN_THETA_SCALAR, MAX_THETA_SCALAR);
  const fillColor = makeHSL(floor(degrees(thetaOffset)));
  return new Ball({
    fillColor,
    xOffset,
    yOffset,
    xOrbitScalar,
    yOrbitScalar,
    thetaOffset,
    thetaScalar,
  });
}

function makeHSL(p) {
  return `hsl(${p}, 100%, 50%)`;
}
