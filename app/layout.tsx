import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingConcierge from "@/components/FloatingConcierge";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thepetdr.ae"),

  title: {
    default:
      "The Pet Doctor | Vet Clinic, Catery, Grooming & Pet Shop in Sharjah",
    template: "%s | The Pet Doctor",
  },

  description:
    "The Pet Doctor is a veterinary clinic and pet care destination in Sharjah, offering feline-focused veterinary care, cat boarding, grooming, and a curated pet retail shop.",

  keywords: [
    "veterinary clinic Sharjah",
    "pet clinic Sharjah",
    "vet clinic Sharjah",
    "cat vet Sharjah",
    "feline veterinary care Sharjah",
    "cat boarding Sharjah",
    "catery Sharjah",
    "cat grooming Sharjah",
    "dog grooming Sharjah",
    "pet grooming Sharjah",
    "pet shop Sharjah",
    "pet retail shop Sharjah",
    "holistic pet care Sharjah",
    "The Pet Doctor",
    "ThePetDr",
  ],

  openGraph: {
    title:
      "The Pet Doctor | Vet Clinic, Catery, Grooming & Pet Shop in Sharjah",
    description:
      "Feline-focused veterinary care, cat boarding, grooming and pet retail services in Sharjah.",
    url: "https://thepetdr.ae",
    siteName: "The Pet Doctor",
    locale: "en_AE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "The Pet Doctor | Vet Clinic, Catery, Grooming & Pet Shop in Sharjah",
    description:
      "Feline-focused veterinary care, cat boarding, grooming and pet retail services in Sharjah.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({
                  'gtm.start': new Date().getTime(),
                  event:'gtm.js'
                });
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PDS5F9HR');
            `,
          }}
        />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PDS5F9HR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navbar />

        <main>{children}</main>

        <Footer />

        <FloatingConcierge />
      </body>
    </html>
  );
}
