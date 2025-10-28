// 📁 app/layout.tsx

import './global.css';
import Header from '@/src/components/layout/Header';
import { routing } from '@/src/i18n/routing';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { ThemeProvider } from 'next-themes';

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
          <ThemeProvider attribute="class" 
            defaultTheme="system" 
            enableSystem>
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}