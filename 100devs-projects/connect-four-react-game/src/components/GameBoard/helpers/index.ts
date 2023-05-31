import { Coords } from '../../../utils/Interfaces';

export function generateInitialRectDataArray(cols: number, rows: number) {
  const output: Coords[] = [];
  let indexCounter = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = 88 * col + 8;
      const y = 88 * row + 8;
      output.push({ x, y, index: indexCounter });
      indexCounter++;
    }
  }
  return output;
}
