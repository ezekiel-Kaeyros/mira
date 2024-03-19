'use client';

import { motion } from 'framer-motion';
import { VariantProps, cva } from 'class-variance-authority';
import React, { ButtonHTMLAttributes, FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/utils/utils';
import AnimateClick from '../animate-click/AnimateClick';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  icon?: any;
}

const buttonVariants = cva(
  'w-full  text-white font-medium py-3 flex justify-center px-4 mt-10 rounded focus:outline-none focus:shadow-outline',

  {
    variants: {
      variant: {
        default: 'bg-secondaryColor w-full text-white hover:opacity-90',
        primary: 'bg-primaryColor w-full  hover:opacity-90',
        secondary: 'bg-white hover:opacity-90',
        black: 'bg-[#587D71] w-full  hover:opacity-90',
        asian: 'w-full bg-[#D90429] text-white',
        other: 'bg-[#393F44] w-full text-white',
        disabled: 'bg-secondaryColor opacity-30',
      },
    },

    defaultVariants: {
      variant: 'default',
    },
  }
);

const Button: FC<ButtonProps> = ({
  variant,
  className,
  href,
  icon,
  children,
  ...props
}) => {
  if (href) {
    return (
      <AnimateClick>
        {icon ? (
          <Link
            href={href}
            className={cn(buttonVariants({ variant, className }))}
          >
            <span className="mr-2">
              {icon ? <Image src={icon} alt={'Icon'} /> : ''}
            </span>
            {children}
          </Link>
        ) : (
          <Link
            href={href}
            className={cn(buttonVariants({ variant, className }))}
          >
            {children}
          </Link>
        )}
      </AnimateClick>
    );
  }
  return (
    <AnimateClick>
      <button
        type="submit"
        {...props}
        className={cn(buttonVariants({ variant, className }))}
      >
        <div className="flex items-center">
          <span className="mr-2">
            {icon ? <Image src={icon} alt={'Icon'} /> : ''}
          </span>
          {children}
        </div>
      </button>
    </AnimateClick>
  );
};

export { Button, buttonVariants };
