import Footer from '@/app/components/footer/Footer';
import Header from '@/app/components/header/header';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import { notFound } from 'next/navigation';

const NotFoundCatchAll = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  // notFound();
  const { page } = await getDictionary(lang);

  return (
    <div className="h-full ">
      <Header lang={lang} />
      <div className="md:mt-16 md:mx-12 py-16 mx-2 mt-4 px-2 sm:px-[40px] xl:px-[300px]  ">
        Coming soon
      </div>
      <div className="mt-96 relative">
        <Footer footer={page.footer} />
      </div>
    </div>
  );
};

export default NotFoundCatchAll;
