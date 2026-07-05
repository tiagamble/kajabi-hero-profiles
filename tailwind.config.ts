import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      haffer: ['Haffer', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        // Kajabi Core Palette - Warm & Earthy
        kajabi: {
          // Primary warm tones
          warmTan: '#AD715C',      // PMS 7522 C
          darkBrown: '#733725',    // PMS 7594 C
          lightTan: '#EFD3A9',     // PMS 7506 C
          gold: '#D6A151',         // PMS 7407 C
          
          // Cool tones
          lightBluegray: '#9FC2CC', // PMS 551 C
          navy: '#3A6278',         // PMS 7698 C
          lightGreen: '#CBD7CC',   // PMS 621 C
          darkGreen: '#405B50',    // PMS 5477 C
          
          // Secondary
          lightPurple: '#D7CBD5',  // PMS 5175 C
          darkPurple: '#52405B',   // PMS 668 C
          
          // Neutrals
          white: '#FDFDFC',
          black: '#0A0A0A',
        },
        // Aliases for semantic use
        primary: '#AD715C',        // Warm tan
        secondary: '#0A0A0A',      // Black
        accent: '#3A6278',         // Navy
      },
      backgroundImage: {
        'kajabi-gradient': 'linear-gradient(135deg, #FDFDFC 0%, #CBD7CC 100%)',
      },
    },
  },
  plugins: [],
}
export default config
