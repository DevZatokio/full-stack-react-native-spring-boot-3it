export default {
  primary: '#9A2431',
  secondary: '#7A8792',
  black: '#000000',
  white: '#FFFFFF',
  success: '#00CA72',
  danger: '#FF0000',
  warding: '#FFCB00',
  dark: '#02014C',
  light: '#F8F9FA',
  light_fa: '#F8F9FA',
  info: '#FF0476',
  blue: '#2D80FF',
  gray_light: '#EEEEEE',
  gray: '#7A8792',
  dark_light: '#02014C',
   /**
   * Generates a random hex color code.
   *
   * @return {string} The randomly generated hex color code.
   */
  getRandomHexColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  },
   /**
   * Converts a hex color code to an rgba color code.
   *
   * @param {string} color - The hex color code to convert.
   * @param {number} [transparent=1] - The transparency value (default is 1).
   * @return {string} The rgba color code.
   */
  hexColorRgba: (color: string, transparent: number = 1) => {
    const rgb = hexToRgb(color);
    return `rgba(${rgb?.r},${rgb?.g},${rgb?.b},${transparent})`;
  },
};


function hexToRgb(hex: string) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}