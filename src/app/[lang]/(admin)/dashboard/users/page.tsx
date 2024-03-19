'use client';
import React from 'react';
import UsersList from './components/UsersList';
import { Button } from '@/app/components/button/Button';
import Drawer from '../components/drawer/Drawer';
import { useDrawer } from '../hooks/useDrawer';
import { SHOW_DRAWER } from '../context/constants';
import AddUserForm from '../components/forms/add-user-form/AddUserForm';

const Users = () => {
  const { showDrawer, dispatch } = useDrawer();
  return (
    <div>
      <div className="w-full flex justify-end">
        <Button
          onClick={() => dispatch({ type: SHOW_DRAWER, payload: '' })}
          className="w-32 mb-4 ml-auto bg-secondaryColor"
        >
          Add User
        </Button>
      </div>

      <Drawer>{<AddUserForm />}</Drawer>

      <UsersList />
    </div>
  );
};

export default Users;
