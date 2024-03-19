import React from 'react';
import Link from 'next/link';
import NavItem from '../nav-item/NavItem';
import Image from 'next/image';
import Logo from '../../../../../../../public/logo.svg';

export default function App() {
  const items = [];

  return (
    <div className="flex flex-col px-4 bg-white border h-screen border-gray-100">
      <Link className="px-4 pt-4" href="/">
        <Image width="100" src={Logo} alt="Logo" className="mt-2" />
      </Link>
      <div className="flex w-full flex-col mt-32">
        <div className="w-full">
          <NavItem href="/dashboard">Dashboard</NavItem>
        </div>
        <div className="py-2 w-full">
          <NavItem href="/dashboard/blog">Blog</NavItem>
        </div>
        <div className="">
          <NavItem href="/dashboard/users">Users</NavItem>
        </div>
        <div className="pt-2">
          <NavItem href="/dashboard/analytics">Analytics</NavItem>
        </div>
      </div>
    </div>
  );
}
