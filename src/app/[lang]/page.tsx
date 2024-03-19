import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import Header from '../components/header/header';
import HeroSection from '../components/hero-section/HeroSection';
import Footer from '../components/footer/Footer';
import Partners from '../components/partners/Partners';
import Faqs from '../components/faqs/Faqs';
import CookieConsent from '../components/banners/CookieConsent';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);

  return (
    <div className="relative h-full">
      <Header lang={lang} />
      <div className="mx-3.5 md:mx-10 lg:mx-32 xl:mx-48">
        <HeroSection lang={lang} heroContent={page.home?.heroSection} />
        {/* <Publications publicationsTranslation={page?.home?.publications} /> */}
        {/* <News newsContent={page.news} /> */}
        <div className="w-full py-4 lg:py-8">
          <Faqs faqs={page?.faqs} title="FAQs" />
        </div>
        <div className="">
          <Partners partnersTranslationTitle={page?.home?.partrners} />
        </div>
      </div>

      <Footer footer={page.footer} />

      <CookieConsent
        lang={lang}
        cookieConsentTranslation={page?.cookiesConsent}
      />
    </div>
  );
}
