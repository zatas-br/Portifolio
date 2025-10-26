import { VariantsMenu } from '../components/menu/VariantsMenu';
import './global.css';
import Header from '@/src/components/layout/Header';

export default async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  

  return (
    <html lang={locale}>
      
      <body className='flex justify-center items-center bg-primary-light flex-col'>
        <Header/>
          {children}
      </body>
    </html>
  );
}