import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/src/i18n/routing';
import { getMessages } from 'next-intl/server';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from '@/src/components/layout/Header';

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
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="flex flex-col items-center justify-center bg-primary-light gap-60 m-0">
        <div className="relative w-[95%] h-10 my-8">
                  <Header variant="blue" />
              </div>
          {children}
      </div>

    </NextIntlClientProvider>
  );
}