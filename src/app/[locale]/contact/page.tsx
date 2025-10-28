import Contact from '@/src/components/sections/Contact';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'CardNav' });
  
  return {
    title: t('contact.label'),
  };
}

export default function ContactPage() {
    return (
        <>
            <Contact/>
        </>
    )
}