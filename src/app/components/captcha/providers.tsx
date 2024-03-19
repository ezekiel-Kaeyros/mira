'use client';

import { ReactNode } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6Lc10xopAAAAAOXg28GjpmbVdLpIjoZP16XUx540">
      {children}
    </GoogleReCaptchaProvider>
  );
}
