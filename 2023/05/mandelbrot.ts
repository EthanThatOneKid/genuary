export function mandelbrot(
  zoomPosition: [number, number],
  zoomAmount: number,
  pixelDensity: number
): boolean[][] {
  const rows = Math.round(pixelDensity * zoomAmount);
  const columns = Math.round(pixelDensity * zoomAmount);
  const result = new Array(rows);
  const xMin = zoomPosition[0] - zoomAmount / 2;
  const yMin = zoomPosition[1] - zoomAmount / 2;
  const xMax = zoomPosition[0] + zoomAmount / 2;
  const yMax = zoomPosition[1] + zoomAmount / 2;
  const xStep = (xMax - xMin) / columns;
  const yStep = (yMax - yMin) / rows;

  for (let row = 0; row < rows; row++) {
    result[row] = new Array(columns);
    for (let col = 0; col < columns; col++) {
      const x0 = xMin + col * xStep;
      const y0 = yMin + row * yStep;
      let x = 0;
      let y = 0;
      let iteration = 0;
      let maxIteration = 1000;

      while (x * x + y * y <= 4 && iteration < maxIteration) {
        const xTemp = x * x - y * y + x0;
        y = 2 * x * y + y0;
        x = xTemp;
        iteration++;
      }

      result[row][col] = iteration < maxIteration;
    }
  }

  return result;
}
