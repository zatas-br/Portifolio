import { ParallaxProvider } from 'react-scroll-parallax';
import './global.css';

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className="bg-background-white">
          {children}
      </body>
    </html>
  );
}