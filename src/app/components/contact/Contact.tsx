import React from 'react';
import ContactForm from './contact-form/ContactForm';
import Address from './address/Address';

type ContactProps = {
  contactTranslation: {
    contactForm: any;
    address: any;
  };
};

const Contact: React.FC<ContactProps> = ({ contactTranslation }) => {
  return (
    <div className="flex flex-col lg:space-x-16 lg:flex-row">
      <div>
        <ContactForm contactFormTranslation={contactTranslation?.contactForm} />
      </div>
      <div className="mt-8 lg:mt-0">
        <Address addressTranslation={contactTranslation?.address} />
      </div>
    </div>
  );
};

export default Contact;
