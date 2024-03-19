import React from 'react';
import InputField from '../../forms/text-field/InputField';
import TextArea from '../../forms/text-area/TextArea';
import { Button } from '../../button/Button';

type ContactFormProps = {
  contactFormTranslation: {
    firstName: string;
    lastName: string;
    email: string;
    inquiry: string;
    button: string;
  };
};
const ContactForm: React.FC<ContactFormProps> = ({
  contactFormTranslation,
}) => {
  return (
    <form>
      <h1 className="font-bold text-md lg:text-2xl">Contact form</h1>
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="w-full">
          <InputField
            name="firstName"
            placeholder={contactFormTranslation?.firstName}
            title={contactFormTranslation?.firstName}
          />
        </div>
        <div className="w-full">
          <InputField
            name="lastName"
            placeholder={contactFormTranslation?.lastName}
            title={contactFormTranslation?.lastName}
          />
        </div>
      </div>
      <div className="w-full">
        <InputField
          placeholder={contactFormTranslation?.email}
          name="email"
          type="email"
          title={contactFormTranslation?.email}
        />
      </div>
      <div className="w-ful pt-6">
        <TextArea
          id="inquiry"
          placeholder={contactFormTranslation?.inquiry}
          label={contactFormTranslation?.inquiry}
          name="inquiry"
          props={''}
        />
      </div>

      <div className="my-4">
        <Button>{contactFormTranslation?.button}</Button>
      </div>
    </form>
  );
};

export default ContactForm;
