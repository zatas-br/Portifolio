import './global.css';

export default async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  

  return (
    <html lang={locale}>
      <body>
          {children}
      </body>
    </html>
  );
}