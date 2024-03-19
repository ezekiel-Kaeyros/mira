'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import LocaleSwitcher from '../locale-switcher/locale-switcher';
import Image from 'next/image';
import Logo from '../../../../../public/logo.svg';
import { useClickOutside } from '@/app/hooks/useClickOutside';
import { usePathname } from 'next/navigation';

type NavBarProps = {
  navigation: any;
  lang: string;
};

const NavBar: React.FC<NavBarProps> = ({ navigation, lang }) => {
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();

  let domNode = useClickOutside(() => {
    setNavbar(false);
  });
  /* Container 36 */

  return (
    <nav ref={domNode} className=" relative z-20 mx-3.5 md:mx-20 ">
      <div className="flex justify-between">
        <div
          className={`${
            navbar
              ? 'bg-slate-600 absolute pt-2 top-0 px-4 right-0 left-0 shadow  '
              : ' flex justify-between'
          } flex absolute lg:relative top-0 left-0 right-0  flex-col lg:mt-0`}
        >
          <div className={`flex z-10 items-center justify-between py-3 `}>
            <Link href="/">
              <Image width="100" src={Logo} alt="Logo" />
            </Link>
            <div className="lg:hidden flex flex-col">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="#ffffff"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg> /* Container 36 */
                ) : (
                  <svg
                    width="45"
                    height="18"
                    viewBox="0 0 39 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="30" height="5" fill="#112445" />
                    <rect x="9" y="9" width="30" height="5" fill="#FD5001" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Navigation Links mobile version*/}

          <nav
            className={`container z-10 ${
              navbar ? 'block' : 'hidden'
            } flex  text-white items-center justify-between `}
          >
            <ul className="flex flex-col px-0 mb-8 gap-x-8">
              <li
                className={`${
                  pathname?.split('/')[2] === 'report'
                    ? 'font-bold text-primaryColor'
                    : ''
                } mt-4`}
              >
                <Link href={`/${lang}/report`}>
                  {navigation?.reportIncident}
                </Link>
              </li>
              <li className="mt-4">
                <Link href={`/${lang}/about`}>{navigation?.about}</Link>
              </li>
              <li className="mt-4">
                <Link href={`/${lang}#faq`}>FAQs</Link>
              </li>
              <li
                className={`${
                  pathname?.split('/')[2] === 'datenschutz'
                    ? 'font-bold text-primaryColor'
                    : ''
                } mt-4`}
              >
                <Link href={`/${lang}/datenschutz`}>
                  {navigation?.datenschutz}
                </Link>
              </li>
              <li className="mt-4">
                <Link href={`/${lang}/contact`}>{navigation?.contact}</Link>
              </li>
            </ul>
            <LocaleSwitcher />
          </nav>
        </div>
        <div className="flex justify-between items-center ">
          {/* Horizontal or desktop navigation */}
          <nav className={` hidden lg:block   items-center justify-between  `}>
            <ul className="flex gap-5 mr-0 md:mr-5">
              <li
                className={`${
                  pathname?.split('/')[2] === 'report'
                    ? 'font-bold text-primaryColor'
                    : ''
                }`}
              >
                <Link href={`/${lang}/report`}>
                  {navigation?.reportIncident}
                </Link>
              </li>
              <li
                className={`${
                  pathname?.split('/')[2] === 'about'
                    ? 'font-bold text-primaryColor'
                    : ''
                }`}
              >
                <Link href={`/${lang}/about`}>{navigation?.about}</Link>
              </li>
              <li
                className={`${
                  pathname?.split('#')[1] === 'faqs'
                    ? 'font-bold text-primaryColor'
                    : ''
                }`}
              >
                <Link href={`/${lang}#faqs`}>FAQs</Link>
              </li>
              <li
                className={`${
                  pathname?.split('/')[2] === 'datenschutz'
                    ? 'font-bold text-primaryColor'
                    : ''
                }`}
              >
                <Link href={`/${lang}/datenschutz`}>
                  {navigation?.datenschutz}
                </Link>
              </li>
              <li
                className={`${
                  pathname?.split('/')[2] === 'contact'
                    ? 'font-bold text-primaryColor'
                    : ''
                }`}
              >
                <Link href={`/${lang}/contact`}>{navigation?.contact}</Link>
              </li>
            </ul>
          </nav>
          {/* <LocaleSwitcher /> */}
          <div className="opacity-0 lg:opacity-100 ">
            {/* Language switcher */}

            <LocaleSwitcher />
            {/* <LocaleSwitcher /> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
