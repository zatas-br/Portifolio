import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'pt', 'es'],

  defaultLocale: 'pt',
  
  localePrefix: 'as-needed'
});

export const config = {
  matcher: ['/', '/(pt|en|es)/:path*']
};