'use client';
import { cn } from '@/utils/utils';
import { VariantProps, cva } from 'class-variance-authority';
import React, { ButtonHTMLAttributes, FC, useState } from 'react';
import AnimateClick from '../animate-click/AnimateClick';
import Modal from '../modal/Modal';
import ModalLayout from './modal-layout/ModalLayout';
import Link from 'next/link';

interface CallToActionButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof callToActionButtonVariants> {
  title: string;
  lang: string;
  buttonId: number;
}

const callToActionButtonVariants = cva(
  'flex justify-between rounded-full py-4 px-6 -z-10  items-center',

  {
    variants: {
      variant: {
        black: 'bg-[#EBF4FA] w-full text-[#393F44] hover:opacity-90',
        asian: 'bg-[#FD5001] w-full text-white  hover:opacity-90',
        other: 'bg-[#587D71] w-full text-white hover:opacity-90',
      },
    },

    defaultVariants: {
      variant: 'black',
    },
  }
);

const CallToActionButton: FC<CallToActionButtonProps> = ({
  title,
  className,
  variant,
  lang,
  buttonId,
}) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [id, setId] = useState<number>();

  const handleButtonClick = (buttonId: number) => {
    setToggle(!toggle);

    setId(buttonId);
  };

  return (
    <>
      <Modal
        onRequestClose={() => setToggle((prev) => !prev)}
        shouldShow={toggle}
      >
        <ModalLayout
          description="stems from the historically grown way of thinking that “they” are permanently different from “us”. This sense of difference serves as the motive for “we” to use our power advantage to treat “the others” in a way that we would consider cruel or unfair if members of our own group were affected by it. Racism is thus an expression of social relations of power that establishes a system of distinction, exclusion, restriction or preference. This has the effect that respect for, participation in or exercise of human rights in political, social, economic, legal, cultural or any other area of public or private life is hampered, impaired or denied.
"
          title={
            id === 1
              ? 'Anti-Black Racism'
              : id === 2
              ? 'Anti-Asian Racism'
              : 'Other-form '
          }
        />
      </Modal>
      <AnimateClick>
        <Link
          href={`/${lang}/report`}
          //   onClick={() => handleButtonClick(buttonId)}
          className={cn(callToActionButtonVariants({ variant, className }))}
        >
          <div className="font-bold">{title && title}</div>
        </Link>
      </AnimateClick>
    </>
  );
};

export { CallToActionButton, callToActionButtonVariants };
