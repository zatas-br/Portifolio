import './global.css';
import Header from '@/src/components/layout/Header';
import { routing } from '@/src/i18n/routing';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider, hasLocale } from 'next-intl';

type Props = {
  children: React.ReactNode;
  params: { locale: string }; // 2. O 'params' não é uma Promise aqui
};

export default async function RootLayout({ children, params }: Props) {

  const { locale } = params; // <-- Corrigido (não precisa de 'await')
  
  // 3. Adicione o 'notFound' para locales inválidos
  if (!hasLocale(routing.locales, locale)) {
  }

  const messages = await getMessages();
  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className='flex justify-center items-center bg-primary-light flex-col'>
          <Header key={locale} />
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}