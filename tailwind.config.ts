import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        'textlight': '#fff',
        'texDark': '#000',
        'textGray': '#E5E7EB',
        'bgLight': '#fff',
        'bgDark': '#000',
      },
    }
  },
  plugins: [],
  darkMode: 'class',
}
export default config
