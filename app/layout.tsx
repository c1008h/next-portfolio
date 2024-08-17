import type { Metadata } from "next";
import Script from 'next/script';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASURE_ME as String;

export const metadata: Metadata = {
  title: "Chris Hong",
  description: "Chris Hong's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        {MEASUREMENT_ID && (
          <link
            rel='preload'
            href={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
            as='script'
            crossOrigin='anonymous'
          />
        )}
      <body className={inter.className}>{children}
      {MEASUREMENT_ID && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
              strategy='afterInteractive'
              crossOrigin='anonymous'
            />
            <Script
              id='google-analytics'
              strategy='afterInteractive'
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
              crossOrigin='anonymous'
            />
          </>
        )}

      </body>
    </html>
  );
}
