// app/[locale]/page.tsx

import {useTranslations} from 'next-intl';
 
export default function HomePage() {
  // 'Homepage' é a chave "namespace" dentro do seu arquivo messages/pt.json
  const t = useTranslations('Homepage');
 
  return (
    <div>
      {/* t('title') busca a chave 'title' dentro de 'Homepage' */}
      <h1>{t('title')}</h1>
      <p>{t('subtitle')}</p>
    </div>
  );
}