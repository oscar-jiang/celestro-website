// Inspired by Martin Leitner-Ankerl
// https://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/

let h:number = Math.random();
const goldenRatio: number = 0.618033988749895;

// HSV Values to RGB
function hvsToRGB(h: number, s: number, v: number): [number, number, number] {
  let h_i: number = Math.floor(h*6);
  let f: number = (h*6) - h_i;
  let p: number = v * (1-s);
  let q: number = v * (1-f*s);
  let t: number = v * (1 - ( 1 - f) * s);

  let r;
  let g;
  let b;

  switch (h_i % 6) {
    case 0:
      r = v; g = t; b = p;
      break;
    case 1:
      r = q; g = v; b = p;
      break;
    case 2:
      r = p; g = v; b = t;
      break;
    case 3:
      r = p; g = q; b = v;
      break;
    case 4:
      r = t; g = p; b = v;
      break;
    case 5:
      r = v; g = p; b = q;
      break;
    default:
      r = 0; g = 0; b = 0;
  }

  return [Math.floor(r * 256), Math.floor(g * 256), Math.floor(b * 256)];
}

// Convert RGB to HEX
// Constraint values are between [0,255]
// RGB => '#RRGGBB'
function rgbToHex(r: number,g: number,b: number): string {
  return `#${ ((r << 16) + (g << 8) + (b)).toString(16).toUpperCase().padStart(6, '0')}`
}

// Get the next colour
export function getNextColour(): string {
  h = (h + goldenRatio) % 1;
  const [r,g,b] = hvsToRGB(h, 0.5, 0.95);
  return rgbToHex(r,g,b);
}