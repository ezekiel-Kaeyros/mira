import React from 'react';
import { CallToActionButton } from './CallToActionButton';

type CallToActionSectionValuesType = {
  reportIncident: string;
};

type CallToActionSectionProps = {
  buttonTranslations: CallToActionSectionValuesType;
  lang: string;
};

const CallToActionSection: React.FC<CallToActionSectionProps> = ({
  buttonTranslations,
  lang,
}) => {
  return (
    <div className="flex flex-col  space-y-4 md:space-y-0  md:flex-row md:items-center justify-between items-center mx-auto max-w-fit">
      <div className="mx-8">
        <CallToActionButton
          buttonId={2}
          lang={lang}
          variant="asian"
          title={buttonTranslations?.reportIncident}
        />
      </div>
    </div>
  );
};

export default CallToActionSection;
