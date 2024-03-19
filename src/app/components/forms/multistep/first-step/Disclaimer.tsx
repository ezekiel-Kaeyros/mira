import React from 'react';

type DisclaimerProps = {
  disclaimerTranslation: string;
};

const Disclaimer: React.FC<DisclaimerProps> = ({ disclaimerTranslation }) => {
  return (
    <p className="border text-sm border-red-500 p-4 w-full rounded-md">
      {disclaimerTranslation}
    </p>
  );
};

export default Disclaimer;
