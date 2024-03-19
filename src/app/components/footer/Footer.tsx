import Link from 'next/link';
import React from 'react';
import CopyRightSection from './CopyRightSection';
import Image from 'next/image';
import Logo from '../../../../public/logo.svg';
import FacebookLogo from '../../../../public/icons/facebook.svg';
import InstagramLogo from '../../../../public/icons/instaLogo.svg';
import TwitterLogo from '../../../../public/icons/twitter.svg';
import Ministerium from '../../../../public/images/ministerium.svg';

type FooterValues = {
  datenschutz: any;
};

type FooterProps = {
  footer: FooterValues | any;
};

const Footer: React.FC<FooterProps> = ({ footer }) => {
  return (
    <div className="flex flex-col bg-blue-200 text-gray-800">
      <div className="flex flex-col  sm:space-x-4 sm:flex-row lg:py-12 py-8 md:justify-between flex-wrap px-3.5 md:px-8 lg:px-32 xl:px-[13rem] ">
        <Link href={'/'} className="w-fit">
          <Image className="md:w-32  mb-8" src={Logo} alt="Logo" />
        </Link>
        <ul className="w-fit">
          <li className="font-bold text-lg mb-4">Inform</li>
          <li className="">Privacy policy</li>
          <li className="my-2">Legal Notice</li>
          <li className="">Press</li>
        </ul>
        <ul className="w-fit">
          <li className="font-bold text-lg mb-4">Social Media</li>
          <li className="">
            <Link
              className="flex items-center"
              target="_blank"
              href={'https://www.facebook.com/'}
            >
              <Image className="w-6" src={FacebookLogo} alt="facebook icon" />
              <div className="ml-2">MIRa-NRW</div>
            </Link>
          </li>
          <li className="my-3">
            <Link
              className="flex items-center"
              target="_blank"
              href={'https://instagram.com/'}
            >
              <Image className="w-6" src={InstagramLogo} alt="facebook icon" />
              <div className="ml-2">MIRa-NRW</div>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center"
              target="_blank"
              href={'https://twitter.com/'}
            >
              <Image className="w-6" src={TwitterLogo} alt="facebook icon" />
              <div className="ml-2">MIRa-NRW</div>
            </Link>
          </li>
        </ul>
        <ul className="w-fit">
          <li className="font-bold text-lg mb-4">Contact</li>
          <li
            className="w-64
             mb-4"
          >
            <div>Zur Vielfalt 21</div>
            <div>44147 Dortmund</div>
            <div>Telefon: +49(0) 231 999 80 444</div>
            <div>meldestelle@vmdo.de</div>
          </li>
        </ul>
        <ul>
          <div className="mb-4 text-lg font-bold">Gefördert durch:</div>
          <Image
            className="lg:w-[20rem]"
            src={Ministerium}
            alt="Ministerium für Kinder, Jugend, Familie, Gleichstellung, Flucht und Integration des Landes Nordrhein-Westfalen"
          />
        </ul>
      </div>
      <CopyRightSection datenshutz={footer?.datenschutz} />
    </div>
  );
};

export default Footer;
