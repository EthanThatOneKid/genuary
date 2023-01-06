import { mandelbrot } from "./mandelbrot.ts";

zoom([-1.401155, 0], 0.5, 200);

function printImage(image: boolean[][]): void {
  console.log(
    image
      .map((row) => row.map((pixel) => (pixel ? "█" : " ")).join(""))
      .join("\n")
  );
}

function zoom(
  zoomPosition: [number, number],
  zoomAmount: number,
  pixelDensity: number
): void {
  const image = mandelbrot(zoomPosition, zoomAmount, pixelDensity);
  printImage(condenseImage(image, 50, 100));

  if (zoomAmount < 5) {
    setTimeout(() => {
      zoom(zoomPosition, zoomAmount * 1.25, pixelDensity);
    }, 100);
  }
}

function condenseImage(
  image: boolean[][],
  rows: number,
  columns: number
): boolean[][] {
  const result = new Array(rows);
  const rowStep = Math.ceil(image.length / rows);
  const columnStep = Math.ceil(image[0].length / columns);

  for (let row = 0; row < rows; row++) {
    result[row] = new Array(columns);
    for (let col = 0; col < columns; col++) {
      let sum = 0;
      for (let i = 0; i < rowStep; i++) {
        for (let j = 0; j < columnStep; j++) {
          sum +=
            image[row * rowStep + i] &&
            image[row * rowStep + i][col * columnStep + j]
              ? 1
              : 0;
        }
      }
      result[row][col] = sum / (rowStep * columnStep) >= 0.5;
    }
  }

  return result;
}
