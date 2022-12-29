import Header from '../components/Header/Header';
import PageContainer from '../components/PageContainer/PageContainer';
import '../styles/main.scss';
import { Poppins, Open_Sans } from '@next/font/google';

const poppins = Poppins({
  weight: ['400', '600'],
  variable: '--font-poppins',
});

const openSans = Open_Sans();

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${openSans.className} ${poppins.variable}`}>
        <PageContainer>
          <Header />
          {children}
        </PageContainer>
      </body>
    </html>
  );
}
