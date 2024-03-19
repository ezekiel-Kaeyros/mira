import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';

type NavItemProps = {
  children: ReactNode;
  href: string;
};
const NavItem: React.FC<NavItemProps> = ({ children, href }) => {
  const path = usePathname();

  return (
    <Link
      className={`my-1 ${
        path?.slice(3, 50) === href
          ? 'bg-secondaryColor text-white hover:opacity-90 hover:bg-secondaryColor'
          : 'hover:bg-slate-100'
      } inline-block w-full py-2 px-3 rounded-md  duration-100  transition ease-in-out hover:transition hover:duration-100 hover:ease-in-out hover:rounded-md hover:px-3 hover:py-2`}
      href={`${href}`}
    >
      {children}
    </Link>
  );
};

export default NavItem;
