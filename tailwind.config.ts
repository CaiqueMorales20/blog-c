import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#263238',
        secondary: '#B0BEC5',
        accent: '#FF9800',
      },
      fontSize: {
        sm: 'clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem);',
        base: 'clamp(1rem, 0.34vw + 0.91rem, 1.19rem)',
        medium: 'clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)',
        lg: 'clamp(1.56rem, 1vw + 1.31rem, 2.11rem)',
        xl: ['clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)', '1.3'],
        '2xl': 'clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)',
      },
      backgroundImage: {
        wave: "url('/pattern/wave.svg')",
        wave2: "url('/pattern/wave-2.svg')",
        blob: "url('/pattern/blob.svg')",
      },
    },
  },
  plugins: [],
}
export default config
