import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';

// Self-hosted at build time by next/font.
const fraunces = Fraunces({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--font-fraunces', display: 'swap' });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://lafayettechurch.org'),
  icons: { icon: '/assets/logo-icon.jpeg', apple: '/assets/logo-icon.jpeg' },
};

// The website lives in app/(site); the content editor lives in app/studio.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
    <body>{children}</body>
  </html>;
}
