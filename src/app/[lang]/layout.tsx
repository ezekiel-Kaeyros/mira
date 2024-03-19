import { Locale, i18n } from '@/i18n.config';
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Header from '../components/header/header';
import Head from 'next/head';
import { FormProvider } from '../context/FormContext';
import { Providers } from '../components/captcha/providers';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '300',
});

export const metadata: Metadata = {
  title: 'MIRA NRW',
  description: 'MIRA NRW',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <Head>
        <meta name="description">{metadata.description}</meta>
      </Head>
      <Providers>
        {' '}
        <FormProvider>
          <body className={`${poppins.className}`}>
            {/* <Header lang={params.lang} /> */}
            {children}
          </body>
        </FormProvider>
      </Providers>
    </html>
  );
}
