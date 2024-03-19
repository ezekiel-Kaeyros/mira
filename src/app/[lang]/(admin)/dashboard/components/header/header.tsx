import React from 'react';
import Profile from './Profile';
import LocaleSwitcher from '../../../../../components/header/locale-switcher/locale-switcher';

const AdminHeader = () => {
  return (
    <div className="rounded-md shadow bg-white mt-2 mx-16 items-center px-8 py-2 flex justify-end bg-primary">
      <div className="mr-4 mt-2">
        <LocaleSwitcher />
      </div>
      <Profile />
    </div>
  );
};

export default AdminHeader;
