'use client'

import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('ContactPage');

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto p-6">
        <h1 className="text-4xl md:text-6xl font-bold text-text text-center mb-6">{t('title')}</h1>
        <p className="text-lg md:text-xl text-text-muted text-center mb-12">{t('subtitle')}</p>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-2">{t('form.name.label')}</label>
            <input type="text" id="name" name="name" placeholder={t('form.name.placeholder')} className="w-full px-4 py-3 bg-surface-alt border-2 border-border rounded-lg focus:ring-primary focus:border-primary transition-all" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-2">{t('form.email.label')}</label>
            <input type="email" id="email" name="email" placeholder={t('form.email.placeholder')} className="w-full px-4 py-3 bg-surface-alt border-2 border-border rounded-lg focus:ring-primary focus:border-primary transition-all" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-2">{t('form.message.label')}</label>
            <textarea id="message" name="message" rows={4} placeholder={t('form.message.placeholder')} className="w-full px-4 py-3 bg-surface-alt border-2 border-border rounded-lg focus:ring-primary focus:border-primary transition-all"></textarea>
          </div>
          <div>
            <button type="submit" className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-hover active:bg-primary-active transition-colors shadow-lg hover:shadow-xl cursor-pointer">{t('form.submit')}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
