import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // Isso ainda é necessário
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Deixe vazio! O CSS vai cuidar disso.
    // Você só colocaria aqui coisas que NÃO são variáveis,
    // como a família da fonte.
    extend: {
      fontFamily: {
        // Mapeia --font-body para a classe 'font-body'
        body: ['var(--font-body)', 'sans-serif'], 
      },
    }
  },
  plugins: [],
};

export default config;