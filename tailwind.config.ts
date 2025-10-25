import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // ❗️As cores agora são declaradas no @theme do CSS
    // então normalmente você deixa isso vazio ou usa para tokens adicionais
  },
  plugins: [],
};

export default config;
