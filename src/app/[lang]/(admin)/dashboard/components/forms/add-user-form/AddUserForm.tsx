'use client';
import { Button } from '@/app/components/button/Button';
import EmailField from '@/app/components/forms/email-field/EmailField';
import SelectField from '@/app/components/forms/select-field/SelectField';
import InputField from '@/app/components/forms/text-field/InputField';
import React from 'react';

const roles = ['Admin', 'Cleaner', 'User'];

const AddUserForm = () => {
  return (
    <form className="max-w-lg mx-auto bg-white">
      <h1 className="font-bold pb-4 text-xl py-0 text-secondaryColor">
        Add a new user
      </h1>
      <InputField name={'name'} title="Full Name" placeholder="John Doe" />
      <InputField name={'username'} title="Username" placeholder="johndoe" />
      <EmailField />
      <div className="mt-4">
        <SelectField options={roles} props={''} title="Role" name="role" />
      </div>

      <Button variant="default">Create</Button>
    </form>
  );
};

export default AddUserForm;
