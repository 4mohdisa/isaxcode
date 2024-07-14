import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import ScrollObserver from "../utils/scroll-oberver";
import SizeObserver from "../utils/size-observer";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google'
import Providers from "./providers";
import ThemeSwitcher from "./ThemeSwitcher";


export const metadata = {
  metadataBase: new URL("https://isaxcode.com"),
  title: {
    default: "Mohammed Isa - Freelance Web Designer & Developer",
    template: `Isaxcode | %s`,
  },
  description: "Mohammed Isa is a freelance web designer and developer based in Australia.Specializes in building websites and web applications for businesses and individuals.",
  verification: {
    google: "google-site-verification=123123123",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SizeObserver>
      <ScrollObserver>
        <html lang="en">
          <head>
            {/* <!-- Google Tag Manager --> */}
            <Script
              id="gtm"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
              (function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KDTNZCP2');
              `
              }}
            ></Script>
            {/* <!-- End Google Tag Manager --> */}

            {/* <!-- Google tag (gtag.js) --> */}
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-VTDSFE7JPH" strategy="lazyOnload" />
            <Script id='google-analytics' strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                tag('config', 'G-VTDSFE7JPH');
              `}
            </Script>
            {/* <!-- Hotjar Tracking Code for https://www.isaxcode.com/ --> */}
            <Script id='hotjar-tracking' strategy="lazyOnload">
              {`
                (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3730718,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
               })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
              `}
            </Script>
          </head>
          <body>
            <Providers>
            <GoogleAnalytics gaId="G-VTDSFE7JPH"/>
            <ThemeSwitcher />
            {children}
            <Analytics/>
            <SpeedInsights />
            </Providers>
          </body>
        </html>
      </ScrollObserver>
    </SizeObserver>

  )
}
