// 📁 app/layout.tsx

import './global.css';
import ThemeRegistry from '@/src/components/providers/ThemeRegistry';

import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Zatas Portfolio",
  description: "Portfólio profissional",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
        <body className='antialiased'>
          <ThemeRegistry>
            {children}
          </ThemeRegistry>
        </body>
    </html>
  );
}