'use client';

import Image from 'next/image';
import React, { useRef, useState } from 'react';
import NavItem from '../nav-item/NavItem';
import AnimateClick from '@/app/components/animate-click/AnimateClick';
import FadinOutAnimation from '@/app/components/fade-in-out-animation/FadeInOutAnimation';
import { useClickOutside } from '@/app/hooks/useClickOutside';
import Logo from '../../../../../../../public/logo.svg';

const Profile = () => {
  const [toggle, setToggle] = useState(false);

  let domNode = useClickOutside(() => {
    setToggle(false);
  });

  return (
    <div ref={domNode} className="flex  flex-col items-center relative">
      <AnimateClick>
        <Image
          onClick={() => setToggle(!toggle)}
          src={Logo}
          className="shadow-md bg-white border border-gray-100 p-1 w-12 h-12 rounded-full"
          alt="Profile"
        />
      </AnimateClick>
      {toggle ? (
        <FadinOutAnimation>
          <div className="flex z-20 flex-col bg-white shadow-lg p-4 right-0 top-16 absolute rounded-md">
            <div className="font-bold px-2 text-sm">Signed in as</div>
            <div className="text-sm px-2">admin@mira.com</div>
            <div className="flex flex-col mt-2">
              <NavItem href={'/profile'}>My profile</NavItem>
              <NavItem href={'/Logout'}>Logout</NavItem>
            </div>
          </div>
        </FadinOutAnimation>
      ) : (
        ''
      )}
    </div>
  );
};

export default Profile;
