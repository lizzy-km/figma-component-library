interface figmaColorToRgbaProps{
    r: number;
    g: number;
    b: number;
    a: number;
}
function figmaColorToRgba({ r, g, b, a }: figmaColorToRgbaProps): string {
  return `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})`;
}