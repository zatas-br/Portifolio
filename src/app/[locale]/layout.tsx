// 📁 app/[locale]/layout.tsx

import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/src/i18n/routing';
import { getMessages } from 'next-intl/server';
import Header from '@/src/components/layout/Header';
import ScrollResetProvider from '@/src/components/providers/ScrollResetProvider';
import { Metadata } from 'next';

export const metadata: Metadata = {
  icons: {
    icon: [
      {
        url: '/images/Identidade_visual/icon-zatas-blue.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/images/Identidade_visual/icon-zatas-white.svg',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <ScrollResetProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
        </div>
      </ScrollResetProvider>
    </NextIntlClientProvider>
  );
}