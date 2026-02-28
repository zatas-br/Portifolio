import './global.css';
import ThemeRegistry from '@/src/components/providers/ThemeRegistry';
import { Montserrat, Lora } from 'next/font/google';

import type { Metadata } from "next";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  variable: '--font-montserrat',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
});

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
        <body className={`antialiased no-scrollbar ${montserrat.variable} ${lora.variable}`}>
          <ThemeRegistry>
            {children}
          </ThemeRegistry>
        </body>
    </html>
  );
}
