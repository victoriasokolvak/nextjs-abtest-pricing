import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-pattern': "url('/patterns/Pattern.png'), linear-gradient(252.75deg, #E3FFFE 23.91%, #E6EDFD 78.01%)",
      },
      colors: {
        'title-color': '#181B29',
        'custom-green': '#00B39B',
        'custom-blue': '#3B71F7',
        'custom-hover-green': '#059669',
        'custom-hover-blue': '#2563eb',
        'custom-gray': '#747E97',
        'custom-orange': '#FFCC8F',
        'unactive-border': '#D7F4F3',
        'custom-yellow': '#FECE1F',
        'custom-dark': '#252525',
        'custom-check': '#22293B',
      },
    },
  },
  plugins: [],
};
export default config;
