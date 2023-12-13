import "../styles/globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import ScrollObserver from "../utils/scroll-oberver";
import SizeObserver from "../utils/size-observer";
import Script from "next/script";


export const metadata = {
  metadataBase: new URL("https://isaxcode.com"),
  title: {
    default: "Isaxcode",
    template: `Isaxcode | %s`,
  },
  description: "website design, website development, copywriting, graphic design, social media graphic and post designer, reel editor freelancer, branding, logo design, branding materials, poster design, web design and development, digital marketing, social media marketing, content marketing, SEO copy, website branding, website layout, website templates, website themes, WordPress themes, Shopify themes, graphic design templates, graphic design themes, graphic design kits, social media kits, content creation, Wix, Adobe Illustrator, Squarespace, landing page, UI graphics, app design, Figma, Webflow, digital design, motion graphics, explainer animations, Instagram reels, videos, GIFs, product design, print design, eCommerce platforms, merchandise graphic design, website analytics, website monetization, website marketing, responsive design, logo animation, UI animation, stickers and emojis, animated GIF, eCommerce website development, eCommerce website design, eCommerce website platforms, eCommerce website templates, eCommerce website themes, eCommerce website plugins, eCommerce website payment gateways, eCommerce website shipping and fulfillment, eCommerce website marketing, eCommerce website SEO, eCommerce website social media marketing, eCommerce website email marketing, eCommerce website analytics, agency website development, agency website design, agency website branding, agency website layout, agency website templates, agency website themes, agency website WordPress themes, agency website SEO, agency website social media marketing, agency website email marketing, agency website analytics, agency website content management systems (CMS), agency website marketing automation, agency website marketing ROI, agency website design and development services, agency website design and development company, agency website design and development agency, agency website design and development studio, agency website design and development freelancer, agency website design and development affordable, agency website design and development cheap, agency website design and development for small businesses, agency website design and development for startups, agency website design and development for businesses, agency website design and development for agencies, SAS Company website development, SAS Company website design, SAS Company website branding, SAS Company website layout, SAS Company website templates, SAS Company website themes, SAS Company website WordPress themes, SAS Company website SEO, SAS Company website social media marketing, SAS Company website email marketing, SAS Company website analytics, SAS Company website content management systems (CMS), SAS Company website marketing automation, SAS Company website marketing ROI, SAS Company website design and development services, SAS Company website design and development company, SAS Company website design and development agency, SAS Company website design and development studio, SAS Company website design and development freelancer, SAS Company website design and development affordable, SAS Company website design and development cheap, SAS Company website design and development for small businesses, SAS Company website design and development for startups, SAS Company website design and development for businesses, SAS Company website design and development for SAS Companies, Real Estate Company website development, Real Estate Company website design, Real Estate Company website marketing, Real Estate Company website graphics, Real Estate property listings, Real Estate agent websites, Real Estate brokerage websites, Real Estate developer websites, Real Estate investment websites, Real Estate virtual tours, Real Estate 3D tours, Real Estate photography, Real Estate videography, Real Estate drone photography, Real Estate floor plans, Real Estate neighborhood guides, Real Estate mortgage calculators, Real Estate home valuation tools, Real Estate market reports, Real Estate property search engines, Real Estate IDX integration, Real Estate CRM integration, Real Estate email marketing campaigns, Real Estate social media marketing, Real Estate content marketing, Real Estate SEO, Real Estate PPC advertising, Real Estate lead generation, Real Estate branding, Real Estate logo design, Real Estate business cards, Real Estate brochures, Real Estate flyers, Real Estate social media graphics, Real Estate email marketing templates, Real Estate print marketing materials, Real Estate digital marketing materials, Real Estate marketing automation, Real Estate marketing analytics, Real Estate marketing ROI, Real Estate marketing best practices, visual communication, freelance graphic design, logo design, branding, packaging design, illustration, web design, UI/UX design, motion graphics, photo editing, digital marketing, social media marketing, copywriting services, copywriting for social media, copywriting for business, copywriting for marketing, copywriting for advertising, website copywriting, landing page copywriting, email copywriting, social media ad copywriting, blog post copywriting, article copywriting, product description copywriting, content writing, content marketing, SEO copywriting, copyediting, proofreading, custom logo design, logo redesign, logo branding, logo creation, logo development, logo concept, logo sketches, logo iterations, logo finals, logo files, logo guidelines, logo usage, branding material design, branding services, brand identity design, brand guidelines, brand style guide, brand voice, brand messaging, brand personality, brand positioning, brand strategy, brand development, brand consistency, brand management, brand awareness, brand equity, brand loyalty, custom poster design, poster creation",
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
          <body>
            {/* <!-- Google tag (gtag.js) --> */}
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-VTDSFE7JPH"  strategy="lazyOnload"/>
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
            {children}
            <Analytics />
            <SpeedInsights />
          </body>
        </html>
      </ScrollObserver>
    </SizeObserver>

  )
}
