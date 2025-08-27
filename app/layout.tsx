import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import FixedBottomBar from './_component/ui/FixedBottomBar';

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

const suite = localFont({
  src: '../public/fonts/SUITEVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-suite',
});

const gangwon = localFont({
  src: '../public/fonts/GangwonEduPower.woff2',
  display: 'swap',
  weight: '400',
  variable: '--font-gangwon',
});

const googleSans = localFont({
  src: [
    {
      path: '../public/fonts/GoogleSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/GoogleSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/GoogleSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  display: 'swap',
  weight: '400 700 500',
  variable: '--font-google-sans',
});

const openSans = localFont({
  src: '../public/fonts/OpenSans_Condensed-Regular.ttf',
  display: 'swap',
  weight: '400',
  variable: '--font-open-sans',
});

const robotoMono = localFont({
  src: '../public/fonts/RobotoMono-Regular.ttf',
  display: 'swap',
  weight: '400',
  variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
  title: 'GDGoC Konkuk',
  description: 'GDGoC Konkuk Landing Page',
  icons: '/GDG_logo.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const targetDate = new Date('2025-09-05T23:59:59');
  const isFuture = targetDate.getTime() > Date.now();
  return (
    <html
      lang="en"
      className={`${pretendard.variable} ${suite.variable} ${googleSans.variable} ${gangwon.variable} ${openSans.variable} ${robotoMono.variable}`}
    >
      <body className={pretendard.className}>
        {children}
        {isFuture && (
          <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <FixedBottomBar targetDate="2025-09-05T23:59:59" />
          </div>
        )}
      </body>
    </html>
  );
}
