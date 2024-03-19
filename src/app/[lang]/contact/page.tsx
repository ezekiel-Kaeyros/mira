import CookieConsent from '@/app/components/banners/CookieConsent';
import Contact from '@/app/components/contact/Contact';
import Footer from '@/app/components/footer/Footer';
import Header from '@/app/components/header/header';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

export default async function contact({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);

  return (
    <div className="h-full ">
      <Header lang={lang} />
      <div className="md:mt-16 py-16 md:mx-12 mx-2 mt-4 px-2 sm:px-[40px] xl:px-[300px]  ">
        <Contact contactTranslation={page?.contact} />
      </div>
      <div className="mt-8 lg:mt-24 relative">
        <Footer footer={page.footer} />
      </div>

      <CookieConsent
        lang={lang}
        cookieConsentTranslation={page?.cookiesConsent}
      />
    </div>
  );
}
