const GALACTIC_AMPLITUDE = 100;
const GALACTIC_SHIFT = 125;

class Galaxy {
  constructor({ population, makeBall, xFn, yFn, rot }) {
    this.population = population;
    this.makeBall = makeBall;
    this.xFn = xFn;
    this.yFn = yFn;
    this.rot = rot;

    this.balls = [];
    this.theta = 0;
  }

  render(delta) {
    this.theta += delta;
    for (const ball of this.balls) {
      ball.render(this.theta, this.xFn, this.yFn, this.rot);
    }
  }

  populate() {
    this.balls = [];

    for (let i = 0; i < this.population; i++) {
      const ball = this.makeBall(this.population, i);
      this.balls.push(ball);
    }
  }
}

function xFn(ball, theta) {
  return (
    cos(theta * ball.thetaScalar + ball.thetaOffset) *
    GALACTIC_AMPLITUDE *
    ball.xOrbitScalar
  );
}

function yFn(ball, theta) {
  return (
    sin(theta * ball.thetaScalar + ball.thetaOffset) *
    GALACTIC_AMPLITUDE *
    ball.yOrbitScalar
  );
}

function rot(x, y) {
  const t = GALACTIC_SHIFT;
  return {
    x: x * cos(t) - y * sin(t),
    y: x * sin(t) + y * cos(t),
  };
}

// TODO: Add option variability to customize variability of balls.
function makeGalaxy({ population = 100 }) {
  return new Galaxy({
    population,
    makeBall,
    xFn,
    yFn,
    rot,
  });
}
