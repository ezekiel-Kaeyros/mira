'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { i18n } from '@/i18n.config';
import Image from 'next/image';
import GermanLogo from '../../../../../public/images/germany-flag.svg';
import EnglandLogo from '../../../../../public/images/england-flag.svg';

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <div>
      <div className="flex flex-col relative items-center  p-1">
        {
          <ul className="flex rounded-md ml-8 px-3 py-1 t z-10 h-fit flex-row space-x-10">
            {i18n.locales.map((locale) => {
              return (
                <li key={locale}>
                  <Link
                    href={redirectedPathName(locale)}
                    className={`"py-2 " `}
                  >
                    {locale === 'en' ? (
                      <div
                        className={`${
                          pathName?.split('/')[1] === 'en'
                            ? 'underline font-bold text-primaryColor flex  items-center w-8 '
                            : 'flex  items-center w-8 '
                        }`}
                      >
                        <Image
                          className="mr-2"
                          src={EnglandLogo}
                          alt="Logo England"
                        />
                        {locale?.toLocaleUpperCase()}
                      </div>
                    ) : (
                      <div
                        className={`${
                          pathName?.split('/')[1] === 'de'
                            ? 'underline font-bold text-primaryColor flex  items-center w-8 '
                            : 'flex  items-center w-8 "'
                        }`}
                      >
                        <Image
                          className="mr-2"
                          src={GermanLogo}
                          alt="Logo Germany"
                        />
                        {locale?.toLocaleUpperCase()}
                      </div>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        }
      </div>
    </div>
  );
}
