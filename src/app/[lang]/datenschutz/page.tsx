import CookieConsent from '@/app/components/banners/CookieConsent';
import Footer from '@/app/components/footer/Footer';
import MultiStepForm from '@/app/components/forms/multistep/MultiStepForm';
import Header from '@/app/components/header/header';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

export default async function datenschutz({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);

  return (
    <div className="h-full ">
      <Header lang={lang} />
      <div className="md:mt-16 md:mx-12 mx-2 mt-4 px-2 sm:px-[40px] xl:px-[450px]  ">
        <div className="border mt-16 md:mt-4 border-gray-600 rounded-md  p-4 md:p-8">
          <h1 className="font-bold text-center text-2xl mb-4">
            {page?.melden?.stepper?.datenschutz?.title}
          </h1>
          <p>{page?.melden?.stepper?.datenschutz?.firstParagraph}</p>
          <p className="py-2">
            {page?.melden?.stepper?.datenschutz?.secondParagraph}
          </p>
          <p>{page?.melden?.stepper?.datenschutz?.thirdParagraph}</p>
        </div>
      </div>
      <div className="mt-96 relative">
        <Footer footer={page.footer} />
      </div>
      <CookieConsent
        lang={lang}
        cookieConsentTranslation={page?.cookiesConsent}
      />
    </div>
  );
}
