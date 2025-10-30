'use client'

import { useTranslations } from 'next-intl';
import { useState, FormEvent } from 'react';

enum FormStatus {
  IDLE,
  LOADING,
  SUCCESS,
  ERROR,
}

export default function Contact() {
  const t = useTranslations('ContactPage');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);
  const [statusMessage, setStatusMessage] = useState('');

  const isLoading = status === FormStatus.LOADING;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setStatus(FormStatus.LOADING);
    setStatusMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus(FormStatus.SUCCESS);
        setStatusMessage(t('success'));
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus(FormStatus.ERROR);
        setStatusMessage(data.error || t('error.default'));
      }
    } catch (error) {
      console.error('Erro de rede:', error);
      setStatus(FormStatus.ERROR);
      setStatusMessage(t('error.network'));
    }
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto p-6">
        <h1 className="text-4xl md:text-6xl font-bold text-text text-center mb-6">{t('title')}</h1>
        <p className="text-lg md:text-xl text-text-muted text-center mb-12">{t('subtitle')}</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-2">{t('form.name.label')}</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder={t('form.name.placeholder')} 
              className="w-full px-4 py-3 bg-surface-alt border-2 border-border rounded-lg focus:ring-primary focus:border-primary transition-all" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-2">{t('form.email.label')}</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder={t('form.email.placeholder')} 
              className="w-full px-4 py-3 bg-surface-alt border-2 border-border rounded-lg focus:ring-primary focus:border-primary transition-all" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              disabled={isLoading}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-2">{t('form.message.label')}</label>
            <textarea 
              id="message" 
              name="message" 
              rows={4} 
              placeholder={t('form.message.placeholder')} 
              className="w-full px-4 py-3 bg-surface-alt border-2 border-border rounded-lg focus:ring-primary focus:border-primary transition-all"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              disabled={isLoading}
            ></textarea>
          </div>
          <div>
            <button 
              type="submit" 
              className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-black active:bg-primary- transition-colors shadow-lg hover:shadow-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? t('submitting') : t('submit')}
            </button>
          </div>
          {status !== FormStatus.IDLE && (
            <p className={`text-center font-medium ${
              status === FormStatus.ERROR ? 'text-red-500' : 'text-green-500'
            }`}>
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}