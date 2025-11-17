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
        <head>
          <script defer src="https://cloud.umami.is/script.js" data-website-id="5e8230f4-9fc4-4c40-9d3d-4956289a241d"></script>
        </head>
        <body className='antialiased'>
          <ThemeRegistry>
            {children}
          </ThemeRegistry>
        </body>
    </html>
  );
}