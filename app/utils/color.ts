/**
 * colorWithAlpha
 * Convert a hex color (or rgba/rgb strings) into an rgba(...) string with applied alpha
 */
export function colorWithAlpha(color: string, alpha: number): string {
  if (!color) return (color as any);
  
  // Handle rgba(r, g, b, a) format
  const rgbaMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
  if (rgbaMatch) {
    const r = rgbaMatch[1];
    const g = rgbaMatch[2];
    const b = rgbaMatch[3];
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  
  // Handle hex format
  if (color.startsWith('#')) {
    let c = color.replace('#', '');
    if (c.length === 3) c = c.split('').map((ch) => ch + ch).join('');
    if (c.length === 4) c = c.split('').map((ch) => ch + ch).join('').slice(0, 6);
    if (c.length === 8) c = c.slice(0, 6);
    const r = parseInt(c.slice(0, 2), 16);
    const g = parseInt(c.slice(2, 4), 16);
    const b = parseInt(c.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  
  return color;
}

export default colorWithAlpha;
