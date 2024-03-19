import React from 'react';

type CopyrightProps = {
  datenshutz: string;
};

const CopyRightSection: React.FC<CopyrightProps> = ({ datenshutz }) => {
  return (
    <div className="flex flex-col border-t-slate-400 border-t md:flex-row py-4 items-end mb-0 justify-between md:justify-between">
      <div className="flex items-center flex-col justify-center md:flex-row w-full md:text-black">
        <div className="w-fit">&copy; 2023 MIRa-NRW</div>
      </div>
    </div>
  );
};

export default CopyRightSection;
