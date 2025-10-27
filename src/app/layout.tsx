import './global.css';
import Header from '@/src/components/layout/Header';
import { routing } from '@/src/i18n/routing';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider, hasLocale } from 'next-intl';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {

  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
  }

  const messages = await getMessages();
  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className='flex justify-center items-center bg-primary-light flex-col'>
          <Header />
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}